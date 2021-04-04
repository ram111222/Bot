const express = require('express');
const server = express();
server.all('/', (req, res)=>{
    res.send('ayo I am ready!')
})
function keepAlive() {
  server.listen(0, () => {console.log("Server is ready.")})
}
module.exports = keepAlive; 

