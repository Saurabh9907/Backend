const http = require('http');
const fs = require('fs').promises;
const users = [{
    id:1, name: 'Ayush', email: 'ayshu@example.com',
},{
    id:2, name:'Suresh', email:'sure@asdfl.com',
},{
    id:3, name:'Rahul', email:'rahul@dkfljdsf.com'
}]

const server = http.createServer(async (req, res) =>
{
    //res.statusCode = 200;
    //res.setHeader('Content-Type','text/plain');
    res.writeHead(200, {'Content-Type':'application/json'});
    const jdata = await fs.readFile("./aa.json","utf8");
    const users = JSON.parse(jdata);
//const data = users.map((user) => {
  //  return user.name;
//});
let data = ""
users.forEach((user) => {
    data=data+user.name;
});
    res.end(JSON.stringify(users));
});
port = 3000;
server.listen(port, () => {
    console.log(`Server is running on ${port}`);
});