const express = require('express')
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', (socket) => {
  console.log('Web Socket') 
  socket.on('New Message',(message)=>{
    console.log (`Message:${message}`)
    io.emit('Hey New Message', message)
  })
});

app.get ('/', (req, res, next)=>{
  res.sendFile(__dirname+'/index.html')
})
const PORT = process.env.PORT ||3000;
server.listen (PORT, ()=>{console.log(`Listening at Port: ${PORT}`)})