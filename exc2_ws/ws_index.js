var express = require('express');
var url = require('url');
var app = express();
var Book = require('./Book');
var Book = new Book;

app.get('/', function(req, res) {
    res.send("Book Ws ROOT created");
});

app.get('/all_books', function(req, res) {
    var j = Book.getAllBooks();
    res.json(j);
    res.send("List of Book");
});

app.get('/id', function(req, res) {
    var urlPart = url.parse(req.url, true);
    var query = urlPart.query;
    var j = Book.getBooksById(query.Id);
    res.json(j);
});

app.get('/sell_date', function(req, res) {
    var urlPart = url.parse(req.url, true);
    var query = urlPart.query;
    var j = Book.getAllBestSellersByMonth(query.Sell_Date);
    res.json(j);
});


app.get('/author_month', function(req, res) {
    var urlPart = url.parse(req.url, true);
    var query = urlPart.query;
    var j = Book.getBookByAuthorAndMonth((query.Author), (query.Month));
    res.json(j);
});

app.listen(process.env.PORT || 3000);
console.log ("listening to Port 3000")

Book.getAllBooks();
Book.getBookByAuthorAndMonth('Moshe', 'Januar');
Book.getAllBestSellersByMonth('May');
Book.getBooksById(10);