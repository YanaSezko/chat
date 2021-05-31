import React from 'react';
import { ToJoin } from './components/ToJoin';
import socket from './socket'

function App() {
 
  return (
    <div className="container">
      <ToJoin/>
    </div>
  );
}

export default App;
