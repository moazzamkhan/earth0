const path = require("path")

module.exports = {
  entry: {
    notes: "./notes/index.ts",
    thoughts: "./thoughts/index.ts"
  },
  output: {
    filename: "[name].js",
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
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"]
  }
}
