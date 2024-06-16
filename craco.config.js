module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Evitar que Webpack utilice el módulo 'crypto' de Node.js
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        crypto: false,
        stream: false,
        // Puedes agregar más fallbacks según sea necesario
      };
      return webpackConfig;
    },
  },
};
