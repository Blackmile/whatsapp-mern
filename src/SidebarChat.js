import { Avatar } from '@mui/material';
import React from 'react';
import './SidebarChat.css';

function SidebarChat() {
    return (
        <div className='sidebarChat'>
            <Avatar />
            <div className='sidebarChat_info'>
                <h2>Roon Name</h2>
                <p>i'm in the room</p>
            </div>
        </div>
    )
}

export default SidebarChat
