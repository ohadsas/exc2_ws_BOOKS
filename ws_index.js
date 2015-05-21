var express = require('express');
var url = require('url');
var server = require('server');
var app = express();
var Book = require('./Book'); 
var Book = new Book; 

app.get('/', function(req, res) {
    res.send("Book Ws ROOT created");
});

app.get('/all_books', function(req, res) { //route /all_books
    var j = Book.getAllBooks();
    res.set ('X-header-one', 'all_books');
    res.json(j);
});

app.get('/id', function(req, res) { //route /id
    var j = Book.getAllBooks();
    var urlPart = url.parse(req.url, true);
    var query = urlPart.query;
    var j = Book.getBooksById(query.Id);
    res.set ('X-header-two', 'id');
    res.json(j);
});

app.get('/sell_date', function(req, res) { //route /sell_date
    var j = Book.getAllBooks();
    var urlPart = url.parse(req.url, true);
    var query = urlPart.query;
    var j = Book.getAllBestSellersByMonth(query.Sell_Date);
    res.set ('X-header-one', 'sell_date');
    res.json(j);
});

app.get('/author_month', function(req, res) { //route /author_month
    var j = Book.getAllBooks();
    var urlPart = url.parse(req.url, true);
    var query = urlPart.query;
    var j = Book.getBookByAuthorAndMonth((query.Author), (query.Month));
    res.set ('X-header-one', 'author_month');
    res.json(j);
});
//port 
app.listen(process.env.PORT || 3000);
console.log ("listening to Port 3000");

//methodes
Book.getAllBooks();
Book.getBookByAuthorAndMonth('Moshe', 'January');
Book.getAllBestSellersByMonth('May');
Book.getBooksById(10);