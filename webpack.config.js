const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/viz.js',
  output: {
    filename: 'viz.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/config.json", to: "config.json" },
        { from: "src/manifest.json", to: "manifest.json" },
        { from: "src/styles.css", to: "styles.css" },
      ],
    }),
  ],
};
