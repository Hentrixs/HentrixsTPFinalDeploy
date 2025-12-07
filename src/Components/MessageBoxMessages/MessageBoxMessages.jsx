import React from 'react'
import messageService from '../../services/messageService';
import './MessageBoxMessages.css'

export default function MessageBoxMessages({id}) { // Aca debo hacer que funcione por id despues

    // Buscar forma de desempaquetar id
    
    const contact = messageService(id); // aca debe ir la id tambien

    return (
    <div className='text'>

    {contact.messages.map((message,index) => {
        return(<p key={index}>{message.user1 || message.user2}</p>)
    })}
    
    </div>
    )
}
