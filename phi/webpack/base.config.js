const path = require("path")

module.exports = {
  entry: {
    app: "./src/index.tsx"
  },
  output: {
    filename: "epsilon.[name].bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  target: "web",
  mode: "development",
  devtool: "source-map",
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
      },
      {
        test: /\.(png|jpg|gif|mp4)$/,
        use: [
          {
            loader: "file-loader",
            options: {              
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"]
  }
}
