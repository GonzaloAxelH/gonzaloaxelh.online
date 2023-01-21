/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "notion.so",
      "www.notion.so",
      "s3.us-west-2.amazonaws.com",
      "themeforest.img.customer.envatousercontent.com",
    ],
  },
};

module.exports = nextConfig;
