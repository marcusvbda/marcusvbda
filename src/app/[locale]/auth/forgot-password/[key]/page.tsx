import { checkRememberCode } from '@/actions/auth';
import { notFound } from 'next/navigation';
import ForgotPasswordContent from './content';

export default async function ForgotPassword({ params }: any) {
	const { key } = params;
	const checked = await checkRememberCode(key);

	if (!checked) return notFound();

	return <ForgotPasswordContent code={key} />;
}
