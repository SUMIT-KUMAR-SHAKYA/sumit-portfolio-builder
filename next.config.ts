import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "labor-connect-ruddy.vercel.app",
      },
    ],
  },
};

export default nextConfig;
