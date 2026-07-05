/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // custom domain duckduckdev.peerapongsm.dev serves from root — no basePath
  images: { unoptimized: true },
};

export default nextConfig;
