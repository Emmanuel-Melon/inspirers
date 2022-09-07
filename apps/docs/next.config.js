const withTM = require("next-transpile-modules")(["ui"]);

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
    domains: ["cloudinary.com/", "res.cloudinary.com"]
  },
});
