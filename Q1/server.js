const http = require("http");
const fs = require('fs').promises;
const url = require('url');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

console.log(__filename, __dirname);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public' , 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});