import express, { json } from "express";
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(json());

// In-memory database (for learning)
let books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

let nextId = 3; // To keep track of the next book ID
// GET /api/books - Get all books
app.get("/api/books", (req, res) => {
  res.json({
    success: true,
    data: books,
    count: books.length,
  });
});


// GET /api/books/:id - Get single book
app.get('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find(b => b.id === bookId);
  
  if (!book) {
    return res.status(404).json({
      success: false,
      message: `Book with ID ${bookId} not found`
    });
  }
  
  res.json({
    success: true,
    data: book
  });
});

// POST /api/books - Create new book
app.post('/api/books', (req, res) => {
  const { title, author, year } = req.body;
  
  // Basic validation
  if (!title || !author) {
    return res.status(400).json({
      success: false,
      message: 'Title and author are required'
    });
  }
  
  const newBook = {
    id: nextId++,
    title,
    author,
    year: year || new Date().getFullYear(),
    createdAt: new Date().toISOString()
  };
  
  books.push(newBook);
  
  res.status(201).json({
    success: true,
    data: newBook
  });
});

// PUT /api/books/:id - Update entire book
app.put('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex(b => b.id === bookId);
  
  if (bookIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Book with ID ${bookId} not found`
    });
  }
  
  const { title, author, year } = req.body;
  
  // Validation
  if (!title || !author) {
    return res.status(400).json({
      success: false,
      message: 'Title and author are required'
    });
  }
  
  // Replace entire book
  books[bookIndex] = {
    id: bookId,
    title,
    author,
    year: year || books[bookIndex].year,
    createdAt: books[bookIndex].createdAt,
    updatedAt: new Date().toISOString()
  };
  
  res.json({
    success: true,
    data: books[bookIndex]
  });
});

// DELETE /api/books/:id - Delete book
app.delete('/api/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const bookIndex = books.findIndex(b => b.id === bookId);
  
  if (bookIndex === -1) {
    return res.status(404).json({
      success: false,
      message: `Book with ID ${bookId} not found`
    });
  }
  
  const deletedBook = books.splice(bookIndex, 1)[0];
  
  res.json({
    success: true,
    message: `Book "${deletedBook.title}" deleted successfully`,
    data: deletedBook
  });
});



// Basic route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my first API!",
    timestamp: new Date().toISOString(),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port 3000: http://localhost:${PORT}`);
});
