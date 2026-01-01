/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },

  async rewrites() {
    return [
      {
        source: '/blog/:path*',
        destination: 'https://blog.willtrust.co/:path*',
      },
    ];
  },
};

export default nextConfig;
