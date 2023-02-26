const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { urlencoded } = require('body-parser');
const cors = require('cors');

const novels = require('./data/novels');
const poetry = require('./data/poetry');
const gk = require('./data/gk');
const history = require('./data/history');
const horror = require('./data/horror');
const biographies = require('./data/biographies');
const miscellaneous = require('./data/data');
const mythology = require('./data/mythology');
const story = require('./data/story');
const science = require('./data/science');

const { json, request } = require('express');
const e = require('express');

const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());

// ---------mongodb connection-----------------

// mongoose.connect('mongodb://127.0.0.1:27017/BookStore', function () {
//     console.log("connected to database");
// })
// const Defaultdata = require('./defultdata');

const moongoURI = 'mongodb://127.0.0.1:27017/Bookstore';
mongoose.connect(moongoURI)
.then(res => {
    console.log("Connected to database");
})
.catch(err => {
    console.log("Not connected to database");
})

//Defaultdata();

// -------------schema-------------------------

var bookSchema = new mongoose.Schema({
    book: Object,
})

var orderSchema = new mongoose.Schema({
    userId: String,
    items: Array,
    status: {
        type: String,
        default: "Completed"
    }
});

bookSchema.index({ '$**': 'text' });

var Book = new mongoose.model('book', bookSchema);

var Orders = new mongoose.model('order', orderSchema);

// app.get('/', (req, res) => {
//     res.send('hello');
// });


app.get("/books", function (req, res) {
    let requestedGenre = req.query.genere;
    if (requestedGenre === "home") {
        let products = JSON.stringify(miscellaneous);
        res.status(200).send(products);
    } else if (requestedGenre === "novels") {
        let products = JSON.stringify(novels);
        res.status(200).send(products);
    } else if (requestedGenre === "poetry") {
        let products = JSON.stringify(poetry);
        res.status(200).send(products);
    } else if (requestedGenre === "gk") {
        let products = JSON.stringify(gk);
        res.status(200).send(products);
    } else if (requestedGenre === "mythology") {
        let products = JSON.stringify(mythology);
        res.status(200).send(products);
    } else if (requestedGenre === "history") {
        let products = JSON.stringify(history);
        res.status(200).send(products);
    } else if (requestedGenre === "horror") {
        let products = JSON.stringify(horror);
        res.status(200).send(products);
    } else if (requestedGenre === "biographies") {
        let products = JSON.stringify(biographies);
        res.status(200).send(products);
    } else if (requestedGenre === "story") {
        let products = JSON.stringify(story);
        res.status(200).send(products);
    } else if (requestedGenre === "science") {
        let products = JSON.stringify(science);
        res.status(200).send(products);
    };
});


app.get("/orders/:userName", function (req, res) {
    try {
        const userName = req.params.userName;
        Orders.find({ userId: userName }, function (err, result) {
            if (err) {
                console.log("Error getting order", err);
            } else {
                console.log("result", result);
                res.send(result);
            }
        });
    } catch (error) {
        console.log(error);
    }
});

app.get("/search", function (req, res) {
    try {
        let searchItem = req.query.item;
        console.log(searchItem);
        Book.find({ $text: { $search: searchItem } }).exec(function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                    res.status(200).send(result);
            }
        })
    } catch (error) {
        console.log("Error fetching data")
    }
})


app.post("/orders", function (req, res) {
    try {
        const findUser = req.body.userId;
        console.log(findUser);
        Orders.find({ userId: findUser }, function (err, doc) {
            if (doc.length !== 0) {
                let prevArr = doc[0].items;
                let updatedArr = [...prevArr, ...req.body.order];
                Orders.updateOne({ userId: findUser }, { $set: { items: updatedArr } }, function (err, success) {
                    if (!err) {
                        res.send("Items saved");
                    } else {
                        res.send("Error updating order");
                    }
                })
            } else {
                const order = new Orders({
                    userId: req.body.userId,
                    items: req.body.order,
                });
                order.save();
                res.status(200).send("Data recieved");
            }
        });
    } catch (error) {
        console.log("Error saving order", error);
        res.status(400).send("Error saving order");
    }
});

app.listen(PORT, function () {
    console.log(`Server is running on ${PORT}`);

    Book.find({}, function (err, result) {
        if (result.length === 0) {
            for (let i = 0; i < biographies.length; i++) {
                let book = new Book({
                    book: biographies[i],
                })
                book.save();
            }
            for (let i = 0; i < novels.length; i++) {
                let book = new Book({
                    book: novels[i],
                })
                book.save();
            }
            for (let i = 0; i < mythology.length; i++) {
                let book = new Book({
                    book: mythology[i],
                })
                book.save();
            }
            for (let i = 0; i < history.length; i++) {
                let book = new Book({
                    book: history[i],
                })
                book.save();
            }
            for (let i = 0; i < horror.length; i++) {
                let book = new Book({
                    book: horror[i],
                })
                book.save();
            }
            for (let i = 0; i < gk.length; i++) {
                let book = new Book({
                    book: gk[i],
                })
                book.save();
            }
            for (let i = 0; i < poetry.length; i++) {
                let book = new Book({
                    book: poetry[i],
                })
                book.save();
            }
            for (let i = 0; i < story.length; i++) {
                let book = new Book({
                    book: story[i],
                })
                book.save();
            }
            for (let i = 0; i < science.length; i++) {
                let book = new Book({
                    book: science[i],
                })
                book.save();
            }
            for (let i = 0; i < miscellaneous.length; i++) {
                let book = new Book({
                    book: miscellaneous[i],
                })
                book.save();
            }
        }
    })
});