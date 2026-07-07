import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
  poweredByHeader: false,
  // Security headers temporarily commented out for phone testing.
  // X-Frame-Options: SAMEORIGIN blocks the iframe embedding used by the preview/share system,
  // causing ERR_BLOCKED_BY_RESPONSE on mobile. Uncomment after testing is complete.
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)",
  //       headers: [
  //         { key: "X-Content-Type-Options", value: "nosniff" },
  //         { key: "X-Frame-Options", value: "SAMEORIGIN" },
  //         { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  //         {
  //           key: "Permissions-Policy",
  //           value: "camera=(), microphone=(), geolocation=()",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
