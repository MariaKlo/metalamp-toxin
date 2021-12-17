const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require('fs');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js',
    // landingPage: './src/pages/landing-page/landingPage.js',
    // signIn: './src/pages/sign-in/signIn.js',
    // registration: './src/pages/registration/registration.js',
    // filter: './src/pages/filter/filter.js',
    // roomDetails: './src/pages/room-details/roomDetails.js',
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
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
    template: 'src/pages/landing-page/landing-page.pug',
    filename: "./index.html",
    // chunks: ['landingPage'],
    inject: 'body',
    scriptLoading: 'defer'
  }),
  new HtmlWebpackPlugin({
    template: 'src/pages/sign-in/sign-in.pug',
    filename: "./sign-in.html",
    // chunks: ['signIn'],
    inject: 'body',
    scriptLoading: 'defer'
  }),
  new HtmlWebpackPlugin({
    template: 'src/pages/registration/registration.pug',
    filename: "./registration.html",
    // chunks: ['registration'],
    inject: 'body',
    scriptLoading: 'defer'
  }),
  new HtmlWebpackPlugin({
    template: 'src/pages/filter/filter.pug',
    filename: "./filter.html",
    // chunks: ['filter'],
    inject: 'body',
    scriptLoading: 'defer'
  }),
  new HtmlWebpackPlugin({
    template: 'src/pages/room-details/room-details.pug',
    filename: "./room-details.html",
    // chunks: ['roomDetails'],
    inject: 'body',
    scriptLoading: 'defer'
  }),
    new HtmlWebpackExternalsPlugin({
      externals: [
        {
          module: 'jquery',
          entry: 'dist/jquery.min.js',
          global: 'jQuery',
        },
      ],
    }),
    new webpack.ProvidePlugin( {
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new FaviconsWebpackPlugin({
      logo: '/metalamp/website/src/img/Group.png',
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
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
    ]
  }
};