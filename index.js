const express = require('express');
const app = express();

const mongoose = require('mongoose');
const url =  'mongodb://localhost/AlienDBex'
const port = 9000;
// Connect application with Database
mongoose.connect(url, {useNewUrlParser: true});
const conn = mongoose.connection;

conn.on('open', () => {
    console.log('Connected!!!');
});

app.use(express.json())

// Craete a Router
const alienRouter = require('./Routes/aliens')
// Create a middleware
app.use('/aliens', alienRouter);

// Listening to the specified port
app.listen(port, () => {
    console.log(`Server listening at port: ${port}`)
});