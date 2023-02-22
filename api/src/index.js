const express = require('express');
const { host, port, db } = require('./configuration')
const { connectDb } = require('./helpers/db');

const app = express();

app.get('/test', (req, res) => {
    res.send('Our api server working! With new date' + (new Date()).toString());
});

const startServer = () => {
    app.listen(port, () => {
        console.log(`Starter api service: ${host}:${port}`)
        console.log(`Our db runned on ${db}`)
    });
}

connectDb()
    .on('error', console.log)
    .on('disconnect', connectDb)
    .once('open', startServer)