const mongoose = require('mongoose');


const moongoURI = 'mongodb://127.0.0.1:27017/Bookstore';

mongoose.connect(moongoURI)
.then(res => {
    console.log("Connected to database");
})
.catch(err => {
    console.log("Not connected to database");
})

