const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const getStyleLoaders = (IS_PRODUCTION) => [
  IS_PRODUCTION ? MiniCssExtractPlugin.loader : 'style-loader',
  {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: '[name]__[local]__[hash:base64:5]',
      },
      importLoaders: 1,
      esModule: true,
      sourceMap: IS_PRODUCTION,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: IS_PRODUCTION,
      config: {
        path: path.resolve(__dirname),
      },
    },
  },
];

const getPlugins = (IS_PRODUCTION) => {
  if (IS_PRODUCTION) {
    return [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        },
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
      new OptimizeCssAssetsWebpackPlugin(),
    ];
  }
  return [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      favicon: path.resolve(__dirname, '../src/assets/movie-searcher.ico'),
    }),
    new CleanWebpackPlugin(),
  ];
};

module.exports = (env) => {
  const IS_PROD = env.production;
  return {
    entry: {
      main: ['@babel/polyfill', './src/index.tsx'],
    },
    mode: IS_PROD ? 'production' : 'development',
    output: {
      path: path.resolve(__dirname, '../build'),
      filename: '[name].[hash].js',
      publicPath: '/',
    },
    devtool: IS_PROD ? null : 'inline-source-map',
    target: 'web',
    devServer: {
      open: true,
      compress: true,
      port: 8000,
      hot: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: getStyleLoaders(IS_PROD),
        },
        {
          test: /\.s[ac]ss$/,
          use: [
            ...getStyleLoaders(IS_PROD),
            {
              loader: 'sass-loader',
              options: {
                sourceMap: IS_PROD,
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)/,
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
    plugins: getPlugins(IS_PROD),
    optimization: IS_PROD
      ? {
          splitChunks: {
            chunks: 'all',
            minSize: 10000,
            automaticNameDelimiter: '_',
          },
        }
      : {},
  };
};
