const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Serve static files (e.g., your HTML, CSS, and JS files)
app.use(express.static(path.join(__dirname)));

// Endpoint to save JSON data
app.post('/save-json', (req, res) => {
    const jsonData = req.body;

    // Write the JSON data to test.json
    fs.writeFile(path.join(__dirname, 'test.json'), JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
            console.error('Error saving JSON:', err);
            return res.status(500).send('Error saving JSON');
        }
        res.send('JSON data saved successfully');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});