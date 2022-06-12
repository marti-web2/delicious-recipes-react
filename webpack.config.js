const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports ={
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: "svg-inline-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/(node_modules|bower_components)/],
        use: "babel-loader",
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
      inject: 'head',
      filename: path.resolve(__dirname, './dist/index.html'),
      template: path.resolve(__dirname, "./public/index.html"),
      favicon: "./public/favicon-32.ico"
    },
    ),
  ],
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
}