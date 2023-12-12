const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set up file storage using Multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.static('public'));

// Handle file upload and streaming start
app.post('/start-streaming', upload.single('video'), (req, res) => {
    // Process the uploaded video, start streaming, and return a response
    const streamUrl = req.body.streamUrl;
    const streamKey = req.body.streamKey;

    // Implement your streaming logic here, use streamUrl and streamKey

    // Return a response to the client
    res.json({ success: true, message: 'Stream started successfully' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
