import { useState } from 'react'
import axios from 'axios'


export function ToJoin({onLogin}) {
    const [roomId, setRoomId] = useState('')
    const [userName, setUserName] = useState('')
    const [isLoading, setLoading] = useState(false)


    const onEnter = async() => {
        if(!roomId || !userName){
            alert('Все поля должны быть заполненны')
        }
        setLoading(true)
        await axios.post('/rooms', {
            roomId,
            userName
        })
        onLogin()
    }

    return (
        <div className="row">
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
                {isLoading?'ВХОД...':'ВОЙТИ'}
            </button>
        </div>
    )
}