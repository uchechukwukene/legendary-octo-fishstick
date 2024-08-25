/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
    NEXT_API: process.env.NEXT_API,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
};

export default nextConfig;
