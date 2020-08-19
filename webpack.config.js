const path = require("path");
require("babel-register");

const config = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./public/"),
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins: [],
};

module.exports = config;
