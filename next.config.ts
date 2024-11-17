import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/dashboard-react",
  assetPrefix: "/dashboard-react",
  trailingSlash: true,
  reactStrictMode: false,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
