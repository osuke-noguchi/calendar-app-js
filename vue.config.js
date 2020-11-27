const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['src/**/*.{vue,scss}']
      }),
    ],
  },
};
