// app.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// In-memory data storage (for demonstration purposes)
let users = [
  { id: 1, firstName: 'John', lastName: 'Doe', age: 30, email: 'john.doe@example.com', city: 'New York', country: 'USA', isActive: true },
  { id: 2, firstName: 'Jane', lastName: 'Smith', age: 25, email: 'jane.smith@example.com', city: 'Los Angeles', country: 'USA', isActive: false },
];

// Routes
app.get('/api/users', (req, res) => {
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

app.post('/api/users', (req, res) => {
  const newUser = req.body;
  // Generate unique ID for new user (this is a simplified approach)
  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  let updatedUser = req.body;
  const index = users.findIndex(user => user.id === userId);
  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users[index] = { ...users[index], ...updatedUser };
  res.json(users[index]);
});

app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === userId);
  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  const deletedUser = users.splice(index, 1)[0];
  res.json(deletedUser);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
