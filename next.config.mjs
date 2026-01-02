/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.willtrust.co',
        pathname: '/**',
      },
    ],
  },
  
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'https://blog.willtrust.co/wp-admin',
        permanent: false, 
      },
    ];
  },
};

export default nextConfig;
