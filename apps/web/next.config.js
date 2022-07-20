const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ["cloudinary.com/", "res.cloudinary.com"],
  }
});
