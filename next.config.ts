// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactStrictMode: true,

//   // ✅ Ignore ESLint errors during build
//   eslint: {
//     ignoreDuringBuilds: true,
//   },

//   // ✅ Ignore TypeScript errors during build
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// };

// export default nextConfig;


import withBundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ✅ Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ Ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default bundleAnalyzer(nextConfig);
