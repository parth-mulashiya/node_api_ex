const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Temporary storage (replace with a database in a real application)
let todos = [
  { id: 1, title: 'Example Todo 1', description: 'Description of todo 1' },
  { id: 2, title: 'Example Todo 2', description: 'Description of todo 2' },
];

// Routes
app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { title, description } = req.body;
  const newTodo = { id: todos.length + 1, title, description };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.get('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description } = req.body;
  const todoIndex = todos.findIndex(todo => todo.id === id);
  if (todoIndex !== -1) {
    todos[todoIndex] = { id, title, description };
    res.json(todos[todoIndex]);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const deletedTodo = todos.find(todo => todo.id === id);
  todos = todos.filter(todo => todo.id !== id);
  if (deletedTodo) {
    res.json({ message: 'Deleted todo', todo: deletedTodo });
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
