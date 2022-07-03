const path = require('path');
var webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    landingPage: './src/pages/website/landing-page/landingPage.js',
    signIn: './src/pages/website/sign-in/signIn.js',
    registration: './src/pages/website/registration/registration.js',
    filter: './src/pages/website/filter/filter.js',
    roomDetails: './src/pages/website/room-details/roomDetails.js',
    colorsTypes: './src/pages/ui-kit/colors-type/colorsType.js',
    cards: './src/pages/ui-kit/cards/cards.js',
    formElements: './src/pages/ui-kit/form-elements/formElements.js',
    headersFooters: './src/pages/ui-kit/headers-footers/headersFooters.js',
  },
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[hash][ext]',
    clean: true,
  },
  resolve: {
    modules: ['node_modules'],
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  },
  plugins: [
    new MiniCssExtractPlugin(
      {
      filename: isDev ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDev ? '[id].css' : '[id].[hash].css',
    }
    ),
    new HtmlWebpackPlugin({
      template: 'src/index.pug',
      filename: "./index.html",
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
    template: 'src/pages/website/landing-page/landing-page.pug',
    filename: "./landing-page-dev.html",
    chunks: ['main', 'landingPage'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/website/sign-in/sign-in.pug',
      filename: "./sign-in-dev.html",
      chunks: ['main', 'signIn'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/website/registration/registration.pug',
      filename: "./registration-dev.html",
      chunks: ['main', 'registration'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/website/filter/filter.pug',
      filename: "./filter-dev.html",
      chunks: ['main', 'filter'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/website/room-details/room-details.pug',
      filename: "./room-details-dev.html",
      chunks: ['main', 'roomDetails'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/ui-kit/cards/cards.pug',
      filename: "./cards-dev.html",
      chunks: ['main', 'cards'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/ui-kit/colors-type/colors-type.pug',
      filename: "./colors-type-dev.html",
      chunks: ['main', 'colorsType'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/ui-kit/form-elements/form-elements.pug',
      filename: "./form-elements-dev.html",
      chunks: ['main', 'formElements'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/ui-kit/headers-footers/headers-footers.pug',
      filename: "./headers-footers-dev.html",
      chunks: ['main', 'headersFooters'],
    }),
    new webpack.ProvidePlugin( {
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new FaviconsWebpackPlugin({
      logo: './src/assets/favicon/group.png',
      cache: true,
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/img/uikit", to: "assets/img/uikit" },
        { from: "src/assets/img/website", to: "assets/img/website" },
      ],
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  }, 
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
            ('development') ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      "postcss-preset-env",
                    ],
                  ],
                },
              },
            },
          "sass-loader",
        ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]'
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }, 
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svgo-loader',
          }
        ]
      },
    ]
  },
  stats: {
    errorDetails: true,
  },
};
