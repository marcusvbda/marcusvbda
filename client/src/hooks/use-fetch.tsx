// import { environment } from '@/constants/environment';
// import { RootState } from '@/store';
import { useCallback, useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

export const useFetch = (params: any = null) => {
	// const token: any = useSelector((state: RootState) => state.auth.jwt);
	const token: any = '';
	const [data, setData] = useState<any>(null);
	const [statusCode, setStatusCode] = useState<any>(null);
	const [error, setError] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(params?.loading ?? true);

	const fetcher = useCallback(
		async (_params: any, events: any = {}) => {
			try {
				events?.onStart?.();
				const route = _params?.route;
				const response = await fetch(route, {
					method: _params?.method || 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${_params?.token || token}`,
					},
					...(_params?.body ? { body: JSON.stringify(_params?.body) } : {}),
				});
				events?.onResponse?.(response);
				const data = await response.json();
				events?.onSuccess?.(data);
				if (_params?.debug) console.log(route, response.status, data);
				return data;
			} catch (error) {
				events?.onError?.(error);
				if (_params?.debug) console.log(error);
				return null;
			} finally {
				events?.onFinally?.();
			}
		},
		[token],
	);

	useEffect(() => {
		if (!params) return;

		const fetchData = async () => {
			setLoading(true);
			const mapData = params?.mapData || ((x: any) => x);

			const result = await fetcher(
				{ ...params, token: params?.token || token },
				{
					onStart: () =>
						params?.onStart ? params.onStart() : setLoading(true),
					onResponse: (x: any) =>
						params?.onResponse
							? params.onResponse(x)
							: setStatusCode(x.statusCode),
					onSuccess: (x: any) =>
						params?.onSuccess
							? params.onSuccess(mapData(x))
							: setData(mapData(x)),
					onError: (x: any) =>
						params?.onError ? params.onError(x) : setError(x),
					onFinally: () =>
						params?.onFinally ? params.onFinally() : setLoading(false),
				},
			);
			return result;
		};

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params?.route, params?.body]);

	return { fetcher, data, loading, error, statusCode };
};
