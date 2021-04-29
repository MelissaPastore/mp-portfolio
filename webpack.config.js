const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isDev = process.env.NODE_ENV === "development";

module.exports = {
  mode: isDev ? "development" : "production",
  entry: ["./src/index.js"],
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        exclude: /node_modules/,
        use: {
          loader: "url-loader?limit=100000",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      react: path.resolve("./node_modules/react"),
    },
  },

  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
};
