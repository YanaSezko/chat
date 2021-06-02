import React, { useReducer } from 'react';
import { ToJoin } from './components/ToJoin';
import reducer from './reducer'

function App() {
 const [state, dispatch]=useReducer(reducer, {
   isAuth:false
 })

 const onLogin = () => {
   dispatch({
     type: 'IS_AUTH',
     payload: true
   })
 }

 console.log(state)

  return (
    <div className="container">
      {!state.isAuth && <ToJoin onLogin={onLogin}/>}
    </div>
  );
}

export default App;
