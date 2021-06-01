import { useState } from 'react'
import socket from '../socket'

export function ToJoin() {
    const[roomId, setRoomId] = useState('')
    const[userName, setUserName] = useState('')
    
    return (
        <div className="row">
            <input type="text" placeholder="Room ID" value={roomId} />
            <input type="text" placeholder="Name" value={userName} />
            <button className="btn btn-success">ВОЙТИ</button>
        </div>
    )
}