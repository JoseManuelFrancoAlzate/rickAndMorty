
const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routes/index')
const morgan = require('morgan')
const cors = require('cors')
server.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});

server.use(express.json())
server.use(morgan("dev"))
server.use(cors())

server.use('/', router)

module.exports = router



 





















/*const http = require('http')
const {getCharById} = require('./controllers/getCharById')
const {getCharDetail} = require('./controllers/getCharDetail')
http.createServer((req,res)=>{
   res.setHeader('Access-Control-Allow-Origin', '*'); 
   const {url} = req
 

   if(url.includes('onsearch')){
      const id= Number(url.split('/').at(-1))
getCharById(res,id);
   }

   if(url.includes('detail')){
      const id= Number(url.split('/').at(-1))
getCharDetail(res,id)
   }
   
   //res.writeHead(200,{'Content-Type': 'text/plain'})   
   //res.end('Hola') 
}).listen(3001,'localhost');*/

