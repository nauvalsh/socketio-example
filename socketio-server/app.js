require('dotenv').config();

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const ENDPOINT = '/socketserver';
const SOCKET_ENDPOINT = ENDPOINT + '/socketio';

const port = process.env.PORT || 4001;

const app = express();

const server = http.createServer(app);

app.use(express.json());
app.use(cors());
app.options('*', cors());

// initiate socket io
const io = socketIo(server, {
  cors: {
    origin: '*',
    credentials: false,
  },
  path: SOCKET_ENDPOINT, //path for connect to socketio server
});

// namespace
// https://socket.io/docs/v3/namespaces/#Custom-namespaces
const nsp = io.of(ENDPOINT);

nsp.on('connection', (socket) => {
  console.log('New client connected');

  // emit to socket client
  socket.emit('welcomeMessage', 'Hello from SERVER !!!');

  // listen from client
  socket.on('fromClient', (data) => console.log(data));

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

app.route(ENDPOINT + '/').get((req, res, next) => res.send('Hello world!'));

// Socket with express router
// https://stackoverflow.com/questions/29334800/express-js-4-and-sockets-with-express-router
app.route(ENDPOINT + '/test').get((req, res, next) => {
  nsp.emit('fromTest', 'You has been accessing test route');

  res.send('Test 1');
});
app.route(ENDPOINT + '/message').post((req, res, next) => {
  const { type, data } = req.body;

  nsp.emit(type, data);

  res.send('success_1');
});

server.listen(port, () => console.log(`Listening on port ${port}`));
