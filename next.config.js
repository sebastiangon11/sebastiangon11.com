const withTM = require('next-transpile-modules')(['react-github-btn']);
module.exports = withTM({
  optimizeCss: true,
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
