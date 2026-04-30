/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/public/**"
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/public/**"
      }
    ]
  }
};

export default nextConfig;
