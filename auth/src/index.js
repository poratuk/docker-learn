const express = require('express');
const mongoose = require('mongoose')
const { host, port, db } = require('./configuration')
const { connectDb } = require('./helpers/db');

const app = express();
const postSchema = new mongoose.Schema({
    name: String
})
const Posts = mongoose.model("Posts", postSchema);

app.get('/test', (req, res) => {
    res.send('Our AUTH server working! With new date' + (new Date()).toString());
});

const startServer = () => {
    app.listen(port, () => {
        console.log(`Starter AUTH service: ${host}:${port}`)
        console.log(`Our AUTH_DB runned on ${db}`)
        console.log(`======================++++++++++============================`); 
    });

    const posts = new Posts({ name: 'Silence'})
    posts.save((err, res) => {
        if (err) return console.error(err)
        console.log('result Post: ', res)
    })
}

connectDb()
    .on('error', console.log)
    .on('disconnect', connectDb)
    .once('open', startServer)