const http = require("http")
const express = require("express")
const path = require("path")
const {Server} = require("socket.io")
const app = express()

const server = http.createServer(app);
// socket.io
const io = new Server(server);
io.on('connection',socket=>{
    socket.on('user-message',(message) =>{
        io.emit("message",message);
    })
    
})

app.use(express.json());
app.use(express.static(path.resolve('./public')));
app.get('/',(req,res)=>{
    return res.sendFile("../public/index.html")
})
server.listen(700,()=>console.log(`Server started`))