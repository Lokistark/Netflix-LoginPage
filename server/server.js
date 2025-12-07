const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock User Data
const MOCK_USER = {
    email: "test@netflix.com",
    password: "password123"
};

// Routes
app.post('/api/login', (req, res) => {
    console.log("Login attempt received:", req.body);
    const email = req.body.email ? req.body.email.trim() : '';
    const password = req.body.password ? req.body.password.trim() : '';

    // Simple validation
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    // Authentication check
    // Logic: 
    // 1. Matches the hardcoded 'test@netflix.com' with 'password123'
    // 2. OR matches 'loki@gmail.com' with 'loki123'
    const isValidUser = (email === MOCK_USER.email && password === MOCK_USER.password) ||
        (email === 'loki@gmail.com' && password === 'loki123');

    if (isValidUser) {
        return res.status(200).json({
            message: "Login successful",
            token: "mock-jwt-token-123456",
            user: { email: email }
        });
    } else {
        return res.status(401).json({ message: "Invalid email or password." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
