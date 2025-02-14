const http = require('http');
const fs = require('fs/promises');
const server = http.createServer(async (req, res) => {
  console.log(req.url)
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write("<h1>Hello, world!</h1>");
  const data = await fs.readFile("./home.html", 'utf8');
  res.end(data);
});
port = 3001;
server.listen(port, () => {
  // const a = server.address();
  console.log(`Server is running on port ${port}`);
});