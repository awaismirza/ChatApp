const app = require('express')();
const server = require('http')(app);
const io = require('socket.io');
const port = 3000;

server.listen(port, () => {
    console.log(`Server is listening on Port : ${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    console.log('User Connected');
    socket.emit('message', {manny: 'Hey how are you '});
    socket.on('another Event', (data) => {
        console.log(data);
    })
});

