const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            loader: 'eslint-loader',
            options: {
              cache: true,
              fix: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 画像のファイルサイズが 8 KB（8 * 1024 = 8192）以上だったら DataURL に変換せずに出力する
              limit: 8192,
              // 出力する DataURL に変換しなかった画像の名前
              // [name].[ext]　は [バンドル前のファイル名].[バンドル前のファイルの拡張子] なので
              // 今回は background.jpg が出力される
              name: '[name].[ext]',
              // DataURL に変換しなかった画像の出力先
              // デフォルトでは output.path に指定したパス（今回は public/js）に出力される
              // 今回は dist/images に出力させたいため、dist からの相対パスを指定する
              outputPath: './images/',
              // 出力されるファイルからの画像の読み込み先
              // 今回 dist/index.html から dist/images の画像を読み込みたいため、以下の指定になる
              publicPath: (path) => './images/' + path,
            },
          },
          {
            loader: 'img-loader',
            options: {
              plugins: [
                require('imagemin-gifsicle')({}),
                require('imagemin-mozjpeg')({}),
                require('imagemin-optipng')({}),
              ],
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist/'),
  },
};
