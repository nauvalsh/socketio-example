import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// socket
import { io } from 'socket.io-client';

// endpoint
// http://farm.co.id/socketserver
// http://localhost:4001/socketserver
const URL = 'http://farm.co.id/socketserver';
const ENDPOINT = '/socketserver';
const SOCKET_ENDPOINT = ENDPOINT + '/socketio';

let socket = null;

function App() {
  useEffect(() => {
    socket = io(URL, {
      path: SOCKET_ENDPOINT, //path for connect to socketio server
    });

    // listening message from server
    socket.on('welcomeMessage', (data) => console.log(data));
    socket.on('fromTest', (data) => console.log(data));
    socket.on('dataCreated', (data) => console.log(data));

    return () => socket.disconnect();
  }, []);

  const handleOnClick = () => {
    // emit to server
    socket.emit('fromClient', 'Hello From CLIENT!!!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleOnClick}>Emit to server</button>
      </header>
    </div>
  );
}

export default App;
