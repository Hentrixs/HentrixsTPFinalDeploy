import messageService from '../../services/messageService';
import './MessageBoxMessages.css'
import { useParams } from 'react-router';

export default function MessageBoxMessages() { // Aca debo hacer que funcione por id despues

    const {id} = useParams();
    const contact = messageService(Number(id)); // aca debe ir la id tambien

    return (
    <div className='text'>

    {contact.messages.map((message,index) => {
        return(
            <p 
                key={index} 
                style={message.send_by_me ? 
                    {backgroundColor: "#154D36",alignSelf:'end'} : 
                    {backgroundColor: "#252726",alignSelf:'start'}}
            >{message.send_by_me || message.user2} <span>{message.time || "(t placeholder)"}</span></p>
        );
    })}
    
    </div>
    )
}
