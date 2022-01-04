const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
// when enabled will show graphcal analysis of the bundle after production build
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'none',
  entry: './src/index.js', // string | object | array
  module: {
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        // Conditions:
        test: /\.(ts|tsx|js|jsx)?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
      },
      {
        // Images
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        // Fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        // Json files
        test: /\.json$/,
        type: 'javascript/auto',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets',
            },
          },
        ],
      },
      {
        // CSS loaders
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        // SASS loaders
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      // Alias for shorter imports
      '@app': path.resolve(__dirname, 'src/'),
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: 'public/index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ["**/index.*"],
          },
        },
      ],
    }),
    // new BundleAnalyzerPlugin(),
  ],
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: 'lazy.[name].[contenthash].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          filename: 'vendors.[name].[contenthash].js',
          chunks: 'all',
        },
      },
    },
  },
}
