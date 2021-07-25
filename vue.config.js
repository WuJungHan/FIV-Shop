const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin');

module.exports = {
  publicPath: '/FIV5-Shop/dist/',
  configureWebpack: {
    plugins: [
      new GoogleFontsPlugin({
        fonts: [
          { family: 'Poppins', variants: ['500', '700'] },
        ],
      }),
    ],
  },
};
