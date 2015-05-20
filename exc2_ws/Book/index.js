 var BookList = require('./BookStock.json');

 function Book() {
     this.books = [];
     for (var i = 0; i < BookList.Book.length; i++) {
         this.books.push({
             "Name ": BookList.Book[i].Name,
             "ID ": BookList.Book[i].Id,
             "Author ": BookList.Book[i].Author,
             "Sell Date ": BookList.Book[i].Sell_Date
         });
     }
 }

 /*Get all Book Stock*/
 Book.prototype.getAllBooks = function() {
 		console.log("===============" + "\n" + "All Books:" +"\n" + "===============");
     if (BookList.Book.length == 0) {
         console.log("There Are No Books Exist!!");
         return 0;
     }
     console.log("Books In Stock :");
     for (var i = 0; i < BookList.Book.length; i++) {
         console.log("Name :" + BookList.Book[i].Name + " ");
         console.log("ID :" + BookList.Book[i].Id + " ");
         console.log("Author :" + BookList.Book[i].Author + "\n");
     }
     return BookList;
 }

 /*Get Best seller book by Month*/
 Book.prototype.getAllBestSellersByMonth = function(_month) {
 	     console.log("===============" + "\n" + "Book by Month:" + _month + "\n" + "===============");
     var exist = false;
     var Stack = [];
     for (var i = 0; i < BookList.Book.length; i++) {
         if (BookList.Book[i].Sell_Date == _month) {
             console.log("Best selling Books In : " + _month);
             console.log("Name : " + BookList.Book[i].Name + " ");
             console.log("Author : " + BookList.Book[i].Author + " ");
             console.log("ID : " + BookList.Book[i].Id + "\n");
             exist = true;
             Stack.push(this.books[i]);
         }

     }
     if (exist == false) {
         console.log("No Matches found  for this Month Better Luck Next Time");
     }
     return Stack;
 }

 /*Get Book By ID*/
 Book.prototype.getBooksById = function(_id) {
     console.log("===============" + "\n" + "Book by Id:" + _id + "\n" + "===============" + &#178);
     var exist = false;
     var Stack = [];
     for (var i = 0; i < BookList.Book.length; i++) {
         if (BookList.Book[i].Id == _id) {
             console.log("Book By ID : " + _id);
             console.log("Name : " + BookList.Book[i].Name + " ");
             console.log("Name : " + BookList.Book[i].Sell_Date + "\n");
             exist = true;
             Stack.push(this.books[i]);
         }
     }
     if (exist == false) {
         console.log("No Matches found for this ID Better Luck Next Time");
     }
     return Stack;
 }

 /*Get Books By Author and month*/
 Book.prototype.getBookByAuthorAndMonth = function(_author, _month) {
 	 console.log("===========================" + "\n" + "Book by : " + _author + " in : "+ _month + "\n" + "===========================");
     var Stack = [];
     var exist = false;
     for (var i = 0; i < BookList.Book.length; i++) {
         if ((BookList.Book[i].Sell_Date == _month) && (BookList.Book[i].Author == _author)) {
             console.log("\n" + "==============" + "\n" + "Books that has been sold on :" + _month + "\n");
             console.log("By The Author : " + _author + "\n");
             console.log("ID : " + BookList.Book[i].Id + "\n");
             console.log("Name : " + BookList.Book[i].Name + "\n");
             exist = true;
             Stack.push(this.books[i]);
         }
     }
     if (exist == false) {
         console.log(" No Matches found Better Luck Next Time");
     }
     return Stack;
 }
 module.exports = Book;