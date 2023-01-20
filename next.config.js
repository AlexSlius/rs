const withPlugins = require("next-compose-plugins")
const withOptimizedImages = require("next-optimized-images")
const withBundleAnalyzer = require("@next/bundle-analyzer")
const withFonts = require("next-fonts")

module.exports = withPlugins(
  [
    [withFonts],
    [withOptimizedImages],
    [withBundleAnalyzer],
  ],
);
