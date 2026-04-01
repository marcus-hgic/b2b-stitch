import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.varden.se",
        pathname: "/varden.se/b2b/**",
      },
    ],
  },
};

export default nextConfig;
