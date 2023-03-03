const path = require('path');
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_CSS_REGEXP = /\.global\.css$/;
const DEV_PLUGINS = [
  // Т.к. после каждого изменения в коде Вебпак будет генерировать новый чанк, это новый JS-файл,
  // а таких файлов у нас будет очень много, их нужно удалять из папки
  new CleanWebpackPlugin(),
  // Добавит в бандл необходимые ключи и будет компилировать необходимые чанки для того, чтобы HMR работал
  new HotModuleReplacementPlugin(),
];
const COMMON_PLUGINS = [ new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` }) ];

function setupDevTool() {
  if (IS_DEV) return 'eval';
  if (IS_PROD) return false;
}

module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    // Когда мы реквайрим конкретную зависимость, вместо неё реквайрится другая зависимость
    alias: {
      'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
    }
  },
  entry: [
    path.resolve(__dirname, '../src/client/index.jsx'),
    // Настраиваем запросы к серверу, который будет нам отдавать данные с HMR
    'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr',
  ],
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js',
    publicPath: '/static/',
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                // Включаем систему модулей с локальными селекторами
                mode: 'local',
                // name - название css-файла; local - название селектора; hash - для уникальности селектора
                localIdentName: '[name]__[local]--[hash:base64:5]',
              }
            }
          },
          'sass-loader',
        ],
        // Таким образом, мы говорим Вебпаку, чтобы он матчил все CSS-файлы,
        // кроме тех, что указаны в GLOBAL_CSS_REGEXP, и превращал их в CSS-модули
        exclude: GLOBAL_CSS_REGEXP
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: ['style-loader', 'css-loader']
      }
  ]
  },
  devtool: setupDevTool(),
  plugins: IS_DEV
    ? DEV_PLUGINS.concat(COMMON_PLUGINS)
    : COMMON_PLUGINS,
};
