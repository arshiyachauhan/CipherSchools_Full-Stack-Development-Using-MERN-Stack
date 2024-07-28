// creating a server with node 
const http = require("http");
const server = http.createServer((req,res) => {
    res.write("This is the response from your first node.js server");
    res.end();
})
server.listen(3000, ()=> {
    console.log(`Server is running`);
});
