const fs = require('fs');

function routes(app) {
  fs.readdirSync(__dirname + '/')
    .filter(file => file.match(/\.js$/))
    .forEach(file => {
      if (file !== 'index.js') {
        let sp = file.split('.');
        app.use('/api/' + sp[0], require('./' + sp[0]));
      }
    });
}

module.exports = routes;