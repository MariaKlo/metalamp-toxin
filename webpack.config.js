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
// const PATHS = {
//   // src must be src
//   src: path.join(__dirname, '../website/src'),
//   // dist to public
//   dist: path.join(__dirname, '../dist'),
//   // assets to static
//   assets: 'assets/'
// }
// const PAGES_DIR = `${PATHS.src}/pages/`
// const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js',
  },
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
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
    // ...PAGES.map(page => new HtmlWebpackPlugin({
    //   template: `${PAGES_DIR}/${page}`,
    //   filename: `./${page.replace(/\.pug/,'.html')}`
    // })),
    new HtmlWebpackPlugin({
    template: 'src/pages/landing-page/landing-page.pug',
    filename: "./index.html",
  }),
  new HtmlWebpackPlugin({
    template: 'src/pages/sign-in/sign-in.pug',
    filename: "./sign-in.html",
  }),
  new HtmlWebpackPlugin({
    template: 'src/pages/registration/registration.pug',
    filename: "./registration.html",
  }),
  new HtmlWebpackPlugin({
    template: 'src/pages/filter/filter.pug',
    filename: "./filter.html",
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
        test: /\.s[ac]ss$/i,
        use: [ "style-loader", "css-loader", "sass-loader", ],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        }
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
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