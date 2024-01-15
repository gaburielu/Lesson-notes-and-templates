const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    a: "./src/pages/page-a/a.js", //page template, amend to use or delete if youre not using it
    b: "./src/pages/page-b/b.js",
    c: "./src/pages/page-c/c.js", //so on and so forth
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/main.html", // The path to your HTML template file
      filename: "index.html", // The name of the output HTML file
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/page-a/a.html",
      filename: "a.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/page-b/b.html",
      filename: "b.html",
    }),
  ],
  devtool: "inline-source-map", //For error log
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
