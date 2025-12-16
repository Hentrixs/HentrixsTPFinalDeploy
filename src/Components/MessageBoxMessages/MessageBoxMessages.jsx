import sendMessageService from '../../services/messageService';
import messageService from '../../services/messageService';
import './MessageBoxMessages.css'
import { useParams } from 'react-router';
import { useEffect, useContext } from 'react';
import { MessageBoxContext } from '../../Contexts/MessageBoxContext/MessageBoxContext';

export default function MessageBoxMessages() {

    const { id } = useParams();
    /*const contact = messageService(Number(id));*/
    const { MessageBoxMessages, setMessageBoxMessages } = useContext(MessageBoxContext);

    useEffect(() => {
        setMessageBoxMessages(
            [
                { send_by_me: false, user1: "hola", time: "12:00" },
                { send_by_me: true, user2: "hola", time: "12:00" }
            ]
        );

        console.log("use effect funcionando");
    }, []);

    const loadmessages = () => {
        return MessageBoxMessages.map((message, index) => {
            return (
                <p
                    key={index}
                    style={message.send_by_me ?
                        { backgroundColor: "#154D36", alignSelf: 'end' } :
                        { backgroundColor: "#252726", alignSelf: 'start' }}
                >{message.user1 || message.user2} <span>{message.time || "(t placeholder)"}</span></p>
            );
        })
    }

    return (
        <div className='text'>
            {loadmessages()}
        </div>
    )
}
