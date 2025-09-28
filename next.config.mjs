/** @type {import('next').NextConfig} */
const isGH = process.env.GH_PAGES === 'true';
const nextConfig = {
  output: process.env.STATIC_EXPORT === 'true' ? 'export' : undefined,
  images: { unoptimized: !!process.env.STATIC_EXPORT },
  basePath: isGH ? '/shreya-portfolio' : undefined,
  assetPrefix: isGH ? '/shreya-portfolio/' : undefined,
  reactStrictMode: true
};
export default nextConfig;
