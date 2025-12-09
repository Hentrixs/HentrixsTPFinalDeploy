import React from 'react'
import messageService from '../../services/messageService';
import './MessageBoxMessages.css'
import { useContext } from 'react';
import { MessageBoxContext } from '../../Contexts/MessageBoxContext';

export default function MessageBoxMessages() { // Aca debo hacer que funcione por id despues

    // Buscar forma de desempaquetar id
    const id = useContext(MessageBoxContext);
    const contact = messageService(id.MessageBoxTextAndAvatar); // aca debe ir la id tambien

    return (
    <div className='text'>

    {contact.messages.map((message,index) => {
        return(<p key={index}>{message.user1 || message.user2}</p>)
    })}
    
    </div>
    )
}
