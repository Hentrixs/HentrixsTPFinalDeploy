import sendMessageService from '../../services/messageService';
import messageService from '../../services/messageService';
import './MessageBoxMessages.css'
import { useParams } from 'react-router';
import { useEffect, useContext } from 'react';
import { MessageBoxContext } from '../../Contexts/MessageBoxContext/MessageBoxContext';
import { addMessageToChat } from '../../services/messageService';

export default function MessageBoxMessages() {

    const { id } = useParams();
    const contact = messageService(Number(id));

    const {
        MessageBoxMessages,
        setMessageBoxMessages,
        MessageBoxTextAndAvatar
    } = useContext(MessageBoxContext);

    useEffect(() => {
        setMessageBoxMessages([...contact.messages]);
        console.log("use effect funcionando");
    }, [id]);

    const loadmessages = () => {
        return MessageBoxMessages.map((message, index) => {
            return (
                <p
                    key={index}
                    style={message.send_by_me ?
                        { backgroundColor: "#154D36", alignSelf: 'end' } :
                        { backgroundColor: "#252726", alignSelf: 'start' }}
                >{message.send_by_me || message.user2} <span>{message.time || "(t placeholder)"}</span></p>
            );
        })
    }

    return (
        <div className='text'>
            {loadmessages()}
        </div>
    )
}
