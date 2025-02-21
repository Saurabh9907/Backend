const http = require('http');
const axios = require('axios');
const port = 3000;
const server = http.createServer(async(req, res) => {
    console.log('Hello from the server!');
    res.writeHead(200, { "Content-Type": "text/html" });

    // const response = await fetch("https://dummyjson.com/products");
    // const data = await response.json();

    const response = await axios.get("https://api.github.com/search/users",{
        params: {
            q: "location:ghaziabad"
        }
    }

    );
    const productsdata = response.data.items;
    let frontdata = `<html><head></head><body>`;
    productsdata.forEach((product) => {
        frontdata+=`<div><img src="${product.avatar_url}"></div>`;
    });
    frontdata += `</body></html>`;
    // res.end(JSON.stringify(productsdata));
    res.end(frontdata);
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});