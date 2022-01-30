const path = require("path");
const config = require("./webpack.config.js");
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(config, {
  mode: "production",
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: 'src/pages/landing-page/landing-page.pug',
        filename: "./index.html",
        chunks: ['main', 'landingPage'],
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      new HtmlWebpackPlugin({
        template: 'src/pages/sign-in/sign-in.pug',
        filename: "./sign-in.html",
        chunks: ['main', 'signIn'],
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      new HtmlWebpackPlugin({
        template: 'src/pages/registration/registration.pug',
        filename: "./registration.html",
        chunks: ['main', 'registration'],
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      new HtmlWebpackPlugin({
        template: 'src/pages/filter/filter.pug',
        filename: "./filter.html",
        chunks: ['main', 'filter'],
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      new HtmlWebpackPlugin({
        template: 'src/pages/room-details/room-details.pug',
        filename: "./room-details.html",
        chunks: ['main', 'roomDetails'],
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files
          "css-loader", //2. Turns css into commonjs
          "sass-loader" //1. Turns sass into css
        ]
      }
    ]
  }
});