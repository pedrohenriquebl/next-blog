import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  reactStrictMode: true,
} satisfies NextConfig;

export default withContentlayer(nextConfig);
