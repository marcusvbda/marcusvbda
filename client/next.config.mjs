/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'http',
                hostname: '**',
                port: '',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
