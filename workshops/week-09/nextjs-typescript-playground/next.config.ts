import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://cdn.dummyjson.com/recipe-images/**")],
  },
};

export default nextConfig;
