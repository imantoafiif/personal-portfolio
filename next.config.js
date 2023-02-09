/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/public",
  },
}

module.exports = nextConfig
