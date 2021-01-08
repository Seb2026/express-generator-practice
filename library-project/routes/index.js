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
      res.render(`book-list`, {books: allBooks});
    })
    .catch(err => {
      console.log(`error while getting books due to ${err}`);
    })
});

module.exports = router;
