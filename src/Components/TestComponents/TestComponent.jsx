import React from 'react'
import { getContactById } from '../../services/contactService'
import messageService from '../../services/messageService';

export default function TestComponent(id) { // Aca debo hacer que funcione por id despues
    
    const contact = messageService(1); // aca debe ir la id tambien
    console.log(contact); // borrar esto despues

    return (
    <div>TestComponent and {contact.messages.map((message,index) => {
        return(<div key={index}>{message.user1 || message.user2}</div>)
    })}</div>
    )
}
