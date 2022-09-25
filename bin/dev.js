const webpack = require('webpack'),
      webpackConfig = require('../webpack.config'),
      nodemon = require('nodemon'),
      path = require('path');

const compiler = webpack(webpackConfig);

// "Холодный старт" нашего приложения
compiler.run((err) => {
  if (err) {
    console.log('Compilation failed: ', err);
  }

  // options + handler
  compiler.watch({}, (err) => {
    if (err) {
      console.log('Compilation failed: ', err);
    }
    console.log('Compilation was successfully');
  });

  nodemon({
    script: path.resolve(__dirname, '../dist/server/server.js'),
    watch: [
      path.resolve(__dirname, '../dist/server'),
      path.resolve(__dirname, '../dist/client'),
    ]
  })
});
