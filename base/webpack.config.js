const path = require("path")

module.exports = {
  entry: {
    base: "./index.ts"
  },
  output: {
    filename: "epsilon.[name].bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  target: "web",
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts"]
  }
}
