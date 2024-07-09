// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // or any other port you prefer

// Middleware to parse JSON request body
app.use(bodyParser.json());

// Sample data (can be stored in memory or replaced with database logic)
let books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
  { id: 3, title: 'Book 3', author: 'Author 3' }
];

// GET API to retrieve all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// POST API to add a new book
app.post('/api/books', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };

  books.push(newBook);
  res.json({ message: 'Book added', book: newBook });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

