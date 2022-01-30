const path = require('path');
var webpack = require('webpack');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js',
    landingPage: './src/pages/landing-page/landingPage.js',
    signIn: './src/pages/sign-in/signIn.js',
    registration: './src/pages/registration/registration.js',
    filter: './src/pages/filter/filter.js',
    roomDetails: './src/pages/room-details/roomDetails.js',
  },
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
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
    template: 'src/pages/landing-page/landing-page.pug',
    filename: "./main.html",
    chunks: ['main', 'landingPage'],
  }),
  new HtmlWebpackPlugin({
    template: 'src/pages/sign-in/sign-in.pug',
    filename: "./sign-in-dev.html",
    chunks: ['main', 'signIn'],
  }),
  new HtmlWebpackPlugin({
    template: 'src/pages/registration/registration.pug',
    filename: "./registration-dev.html",
    chunks: ['main', 'registration'],
  }),
  new HtmlWebpackPlugin({
    template: 'src/pages/filter/filter.pug',
    filename: "./filter-dev.html",
    chunks: ['main', 'filter'],
  }),
  new HtmlWebpackPlugin({
    template: 'src/pages/room-details/room-details.pug',
    filename: "./room-details-dev.html",
    chunks: ['main', 'roomDetails'],
  }),
    new webpack.ProvidePlugin( {
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new FaviconsWebpackPlugin({
      logo: './src/img/Group.png',
      cache: true,
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
  }
};
