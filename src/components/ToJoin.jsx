import { useState } from 'react'
import axios from 'axios'


export function ToJoin({ onLogin }) {
    const [roomId, setRoomId] = useState('')
    const [userName, setUserName] = useState('')
    const [isLoading, setLoading] = useState(false)


    const onEnter = async () => {
        if (!roomId || !userName) {
            alert('Все поля должны быть заполненны')
        }
        const obj = {
            roomId,
            userName
        };
        setLoading(true)
        await axios.post('/rooms', obj);
        onLogin(obj)
    }

    return (
        <div className="row join-block">
            <input
                type="text"
                placeholder="Room ID"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
            />
            <input
                type="text"
                placeholder="Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button disabled={isLoading} onClick={onEnter} className="btn btn-success">
                {isLoading ? 'ВХОД...' : 'ВОЙТИ'}
            </button>
        </div>
    )
}