import MoreVert from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import './Chat.css'
import axios from './axios'

function Chat({ messages }) {

    const [input, setInput] = useState('')

    const sendMessage = (e) => {
        e.preventDefault();

        axios.post('/messages/new',{
            message: input,
            name: "demo guy",
            timestamp: `${new Date().toUTCString()}`,
            received: false,
        })
    }

    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar />
                <div className='chat_headerInfo'>
                    <h3>Room name</h3>
                    <p>last seen at ...</p>
                </div>
                <div className='chat_headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className='chat_body'>
                {messages.map((message, i) => (
                    <p key={i} className={`chat_message ${message.received && "chat_reciever"}`}>
                        <span className='chat_name'>{message.name}</span>
                            {message.message}
                        <span className='chat_time'>
                            {message.timestamp}
                        </span>
                    </p>
                ))}
            </div>

            <div className='chat_footer'>
                <InsertEmoticonOutlinedIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder='Type a message' type='text' />
                    <button onClick={sendMessage} type='submit'>
                        Send a message
                    </button>
                </form>
                <MicOutlinedIcon />
            </div>
        </div>
    )
}

export default Chat
