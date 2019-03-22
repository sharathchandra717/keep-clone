const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const port = 3000 || process.env.PORT;

app.use(bodyparser.json({ limit: '5mb' }));

app.use((req, res, next) => {
    res.set('Content-Type', 'application/json')
    next()
})

require('./routes')(app)

const server = app.listen(port, '0.0.0.0', (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log('Server started');
    }
    
})

module.exports = app;
