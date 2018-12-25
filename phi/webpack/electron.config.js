const merge = require("webpack-merge")
const baseConfig = require("./base.config.js")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = merge(baseConfig, {
  target: "electron-renderer",
  mode: "production",
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Everything",
      template: "./src/electron.html",
      filename: "electron.html"
    }),
    new CopyWebpackPlugin([{ from: "./src/renderer.js", to: "./" }])
  ]
})
