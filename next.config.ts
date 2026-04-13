import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/reality-api-demo" : "",
  assetPrefix: isProd ? "/reality-api-demo/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
