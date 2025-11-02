const express = require('express');
const path = require('path');

const app = express();

// Serve static files from root
app.use(express.static('.'));

// Serve core package static files
app.use('/packages/core/public', express.static(path.join(__dirname, 'packages/core/public')));
app.use('/packages/core/dist', express.static(path.join(__dirname, 'packages/core/dist')));
app.use('/packages/core/examples', express.static(path.join(__dirname, 'packages/core/examples')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('Visit http://localhost:3000');
});
