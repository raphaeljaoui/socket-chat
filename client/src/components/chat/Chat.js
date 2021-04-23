import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../UserContext';
import { Link, useParams } from 'react-router-dom';
import io from 'socket.io-client'

let socket;
const Chat = () => {
    const ENDPT = 'localhost:5000'

     useEffect(() => {
        socket = io(ENDPT)
        return () => {
            socket.emit('disconnect')
            socket.off()
        }
    }, [ENDPT])
    const { user, setUser } = useContext(UserContext)
    let {room_id, room_name} = useParams()
    return (
        <div>
            <div>{room_id} {room_name}</div>
            <h1>Chat {JSON.stringify(user)}</h1>
            <Link to={'/'}>
                <button>go to home</button>
            </Link>
        </div>
    )
}

export default Chat
