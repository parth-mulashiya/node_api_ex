const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// In-memory data storage (simulate complex data structure)
let users = [
  { id: '1', name: 'John Doe', email: 'john@example.com', posts: [] },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', posts: [] },
];

let posts = [
  { id: '1', userId: '1', title: 'First Post', content: 'Content of the first post' },
  { id: '2', userId: '2', title: 'Second Post', content: 'Content of the second post' },
];

// Routes for users
app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: uuidv4(), name, email, posts: [] };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get('/users/:userId', (req, res) => {
  const { userId } = req.params;
  const user = users.find(user => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.put('/users/:userId', (req, res) => {
  const { userId } = req.params;
  const { name, email } = req.body;
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], name, email };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.delete('/users/:userId', (req, res) => {
  const { userId } = req.params;
  const deletedUser = users.find(user => user.id === userId);
  users = users.filter(user => user.id !== userId);
  if (deletedUser) {
    res.json({ message: 'Deleted user', user: deletedUser });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Routes for posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

app.post('/posts', (req, res) => {
  const { userId, title, content } = req.body;
  const newPost = { id: uuidv4(), userId, title, content };
  posts.push(newPost);
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex !== -1) {
    users[userIndex].posts.push(newPost.id);
    res.status(201).json(newPost);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.get('/posts/:postId', (req, res) => {
  const { postId } = req.params;
  const post = posts.find(post => post.id === postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

app.put('/posts/:postId', (req, res) => {
  const { postId } = req.params;
  const { userId, title, content } = req.body;
  const postIndex = posts.findIndex(post => post.id === postId);
  if (postIndex !== -1) {
    posts[postIndex] = { ...posts[postIndex], userId, title, content };
    res.json(posts[postIndex]);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

app.delete('/posts/:postId', (req, res) => {
  const { postId } = req.params;
  const deletedPost = posts.find(post => post.id === postId);
  posts = posts.filter(post => post.id !== postId);
  if (deletedPost) {
    const userIndex = users.findIndex(user => user.id === deletedPost.userId);
    if (userIndex !== -1) {
      users[userIndex].posts = users[userIndex].posts.filter(id => id !== postId);
    }
    res.json({ message: 'Deleted post', post: deletedPost });
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
