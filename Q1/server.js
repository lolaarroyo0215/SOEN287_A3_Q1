const http = require("http");
const fs = require('fs').promises;
const url = require('url');
const path = require('path');
const PORT = process.env.PORT || 8000;

console.log(__filename, __dirname);

const server = http.createServer(async (req, res) => {
    try{
        //check if GET request
        if(req.method === 'GET'){
            let filePath;
            //creating a router
            if(req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html');
            } else if(req.url === '/about'){
                filePath = path.join(__dirname, 'public', 'about.html');
            } else {
                throw new Error('Not Found');
            }
            const data = await fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.end();
        } else {
            throw new Error('Method not allowed');
        }
    } catch (error){
        res.writeHead(500, {'Content-Type' : 'text/plain' });
        res.end('Server error');
    }
});

server.listen(8000, () => {
    console.log(`Server running on port ${PORT}`);
});
