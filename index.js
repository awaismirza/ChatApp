const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 3000;

server.listen(port, () => {
    console.log(`Server is listening on Port : ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    console.log('User Connected');
    socket.on('message', (msg) => {
        console.log(`message: ${msg}`);
        io.emit('message', msg);
    });

    socket.on('disconnect', () =>{
        console.log('User Disconnected');

        io.emit('message', 'user disconnected');
    })
});

