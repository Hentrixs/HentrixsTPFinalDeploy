import React from 'react'
import messageService from '../../services/messageService';
import './MessageBoxMessages.css'
import { useContext } from 'react';
import { MessageBoxContext } from '../../Contexts/MessageBoxContext/MessageBoxContext';
import { useParams } from 'react-router';

export default function MessageBoxMessages() { // Aca debo hacer que funcione por id despues

    const {id} = useParams();
    const contact = messageService(Number(id)); // aca debe ir la id tambien

    return (
    <div className='text'>

    {contact.messages.map((message,index) => {
        return(<p key={index}>{message.user1 || message.user2}</p>)
    })}
    
    </div>
    )
}
