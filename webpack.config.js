const path = require('path');
var webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

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
  output: {
    filename: '[name].[fullhash].js',
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
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.pug',
      filename: "./index.html",
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
    template: 'src/pages/website/landing-page/landing-page.pug',
    filename: "./landing-page.html",
    chunks: ['main', 'landingPage'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/website/sign-in/sign-in.pug',
      filename: "./sign-in.html",
      chunks: ['main', 'signIn'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/website/registration/registration.pug',
      filename: "./registration.html",
      chunks: ['main', 'registration'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/website/filter/filter.pug',
      filename: "./filter.html",
      chunks: ['main', 'filter'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/website/room-details/room-details.pug',
      filename: "./room-details.html",
      chunks: ['main', 'roomDetails'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/ui-kit/cards/cards.pug',
      filename: "./cards.html",
      chunks: ['main', 'cards'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/ui-kit/colors-type/colors-type.pug',
      filename: "./colors-type.html",
      chunks: ['main', 'colorsTypes'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/ui-kit/form-elements/form-elements.pug',
      filename: "./form-elements.html",
      chunks: ['main', 'formElements'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/pages/ui-kit/headers-footers/headers-footers.pug',
      filename: "./headers-footers.html",
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
      favicons: {
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          yandex: false
        }
      }
    }),
    new ESLintPlugin({
      extensions: ['.js'],
      exclude: 'node_modules'
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/assets/img/uikit", to: "assets/img/uikit" },
        { from: "src/assets/img/website", to: "assets/img/website" },
        { from: "src/assets/fonts/montserrat", to: "assets/fonts/montserrat" }
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
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
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
          filename: 'assets/fonts/montserrat/[name][ext]'
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
