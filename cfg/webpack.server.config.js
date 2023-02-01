const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { DefinePlugin } = require('webpack');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

module.exports = {
  // этот билд будет приготовлен исключительно для Node.js
  target: 'node',
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, '../src/server/server.js'),
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  // Отключаем добавление всех сторонних зависимостей в бандл
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                // Включаем систему модулей с локальными селекторами
                mode: 'local',
                // name - название css-файла; local - название селектора; hash - для уникальности селектора
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
              // Для того, чтобы css-loader не собирал глобальные стили на сервере и не пытался давать нам к ним доступ
              onlyLocals: true
            }
          },
          'sass-loader',
        ],
        exclude: GLOBAL_CSS_REGEXP
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ['css-loader']
      }
    ]
  },
  optimization: {
    minimize: false,
  },
  devtool: IS_DEV ? 'eval' : false,
  plugins: [ new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` }) ]
}
