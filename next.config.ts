import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/turpotic",
  assetPrefix: "/turpotic/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;