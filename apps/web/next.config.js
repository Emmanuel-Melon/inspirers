require("dotenv").config({ path: "../../.env" });

const withTM = require("next-transpile-modules")([
  "ui",
  "prisma"
]);


if (!process.env.NEXTAUTH_SECRET) throw new Error("Please set NEXTAUTH_SECRET");

if (!process.env.NEXTAUTH_URL) throw new Error("Please set NEXTAUTH_URL");

module.exports = withTM({
  reactStrictMode: false,
  // for demo purposes only, will revert after deployment
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["cloudinary.com/", "res.cloudinary.com"],
  }
});
