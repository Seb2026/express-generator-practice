const express = require('express');
const router  = express.Router();

const Book = require(`../models/Book.model.js`);

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get(`/books`, (req,res,next) => {
  Book.find()
    .then(allBooks => {
      res.render(`books-list`, {books: allBooks});
    })
    .catch(err => {
      console.log(`error while getting books due to ${err}`);
    })
});

router.get(`/books/:bookId`, (req,res,next) => {
  const { bookId } = req.params;

  Book.findOne(bookId)
    .then(theBook => {
      res.render(`book-details`, {book: theBook})
    })
    .catch(err => {
      console.log(`error while getting books due to ${err}`);
    })
});

module.exports = router;
