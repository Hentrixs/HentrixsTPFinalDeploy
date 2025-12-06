import React from 'react'
import { messageData } from '../data/messageData'

export default function messageService(id) {

    return messageData.find((message) => {
        return message.id === id;
    })

}
