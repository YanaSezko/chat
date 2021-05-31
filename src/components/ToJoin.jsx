import socket from '../socket'

export function ToJoin() {
    return (
        <div className="row">
            <input type="text" placeholder="Room ID" defaultValue="" />
            <input type="text" placeholder="Name" defaultValue="" />
            <button className="btn btn-success">ВОЙТИ</button>
        </div>
    )
}