import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import Chat from './components/Chat';
import { ToJoin } from './components/ToJoin';
import reducer from './reducer';
import socket from './socket'


function App() {
 const [state, dispatch]=useReducer(reducer, {
   joined:false,
   roomId: null,
   userName: null,
   users: [],
   messages: []
 })

 const onLogin = async (obj) => {
   dispatch({
     type: 'JOINED',
     payload: obj,
  });
  socket.emit('ROOM:JOIN', obj);
  const { data } = await axios.get(`/rooms/${obj.roomId}`);
  dispatch({
    type: 'SET_DATA',
    payload: data,
  });
 };
 const setUsers = (users) => {
  dispatch({
    type: 'SET_USERS',
    payload: users,
  });
};

const addMessage = (message) => {
  dispatch({
    type: 'NEW_MESSAGE',
    payload: message,
  });
};
useEffect(() => {
  socket.on('ROOM:SET_USERS', setUsers);
  socket.on('ROOM:NEW_MESSAGE', addMessage);
}, []);

 window.socket = socket;
 
  return (
    <div className="container">
      {!state.joined 
      ? <ToJoin onLogin={onLogin}/> 
      : <Chat {...state} onAddMessage={addMessage}/>}
    </div>
  );
}

export default App;
