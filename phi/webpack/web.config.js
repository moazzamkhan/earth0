const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const Dotenv = require("dotenv-webpack")
const merge = require("webpack-merge")
const baseConfig = require("./base.config.js")

module.exports = merge(baseConfig, {
  target: "web",
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Everything",
      template: "./src/index.html"
    }),
    new Dotenv()
  ]
})
