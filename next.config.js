const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
  target: 'serverless',
  future: {
    webpack5: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (process.env.ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        })
      )
    }
    return config
  },
})
