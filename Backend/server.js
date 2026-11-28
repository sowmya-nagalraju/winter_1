
const express = require('express');
const dns = require('dns');

// Fix DNS resolution for MongoDB Atlas
dns.setServers(['8.8.8.8', '1.1.1.1']);

const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());

// API route
app.get('/api', (req, res) => {
    res.send('Get API working successfully!');
});

// Connect MongoDB
async function startServer() {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log('MongoDB connected successfully!');

        app.listen(3000, () => {
            console.log('Server running on port 3000');
        });

    } catch (error) {
        console.error('MongoDB connection failed:', error);
    }
}

startServer();
