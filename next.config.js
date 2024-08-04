const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const pageExtensions = ["page.tsx"];
const endpointExtensions = ["endpoint.ts"];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: [...pageExtensions, ...endpointExtensions],
};

module.exports = withBundleAnalyzer(nextConfig);
