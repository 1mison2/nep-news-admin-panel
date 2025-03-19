const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Sample data
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Get all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Add a new user
app.post('/api/users', (req, res) => {
    const newUser  = { id: users.length + 1, ...req.body };
    users.push(newUser );
    res.status(201).json(newUser );
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});