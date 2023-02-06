/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "notion.so",
      "www.notion.so",
      "s3.us-west-2.amazonaws.com",
      "themeforest.img.customer.envatousercontent.com",
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
      "s3.us-west-2.amazonaws.com",
      "colabrio.ams3.cdn.digitaloceanspaces.com",
      "secure.gravatar.com"
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles_/sass")],
  },
};

module.exports = nextConfig;
