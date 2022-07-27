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
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        parallel: true,
      }),
      new HtmlWebpackPlugin({
        template: 'src/pages/website/landing-page/landing-page.pug',
        filename: "./landing-page.html",
        chunks: ['main', 'landingPage'],
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      new HtmlWebpackPlugin({
        template: 'src/pages/website/sign-in/sign-in.pug',
        filename: "./sign-in.html",
        chunks: ['main', 'signIn'],
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      new HtmlWebpackPlugin({
        template: 'src/pages/website/registration/registration.pug',
        filename: "./registration.html",
        chunks: ['main', 'registration'],
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      new HtmlWebpackPlugin({
        template: 'src/pages/website/filter/filter.pug',
        filename: "./filter.html",
        chunks: ['main', 'filter'],
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      new HtmlWebpackPlugin({
        template: 'src/pages/website/room-details/room-details.pug',
        filename: "./room-details.html",
        chunks: ['main', 'roomDetails'],
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      new HtmlWebpackPlugin({
        template: 'src/pages/ui-kit/cards/cards.pug',
        filename: "./cards.html",
        chunks: ['main', 'cards'],
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      new HtmlWebpackPlugin({
        template: 'src/pages/ui-kit/colors-type/colors-type.pug',
        filename: "./colors-type.html",
        chunks: ['main', 'colorsType'],
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      new HtmlWebpackPlugin({
        template: 'src/pages/ui-kit/form-elements/form-elements.pug',
        filename: "./form-elements.html",
        chunks: ['main', 'formElements'],
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      new HtmlWebpackPlugin({
        template: 'src/pages/ui-kit/headers-footers/headers-footers.pug',
        filename: "./headers-footers.html",
        chunks: ['main', 'headersFooters'],
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
    ],
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