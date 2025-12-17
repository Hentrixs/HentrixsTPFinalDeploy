import messageService from '../../services/messageService';
import './MessageBoxMessages.css'
import { useParams } from 'react-router';
import { useEffect, useContext } from 'react';
import { MessageBoxContext } from '../../Contexts/MessageBoxContext/MessageBoxContext';
import { ContactSidebarContext } from '../../Contexts/ContactSidebarContext/ContactSidebarContext';

export default function MessageBoxMessages() {

    // Importar id y loadContactList()
    const { id } = useParams();
    const { loadContactList } = useContext(ContactSidebarContext);

    // Importar MessageBoxMessages, setMessageBoxMessages y MessageBoxTextAndAvatar
    const {
        MessageBoxMessages,
        setMessageBoxMessages,
        MessageBoxTextAndAvatar
    } = useContext(MessageBoxContext);

    // Seleccionar mensajes de chat
    const contact = messageService(Number(id));

    useEffect(() => { // Cuando cambia la id
        // setean mensajes
        setMessageBoxMessages([...contact.messages]);
        // actualizan la lista de contactos
        loadContactList();
    }, [id]);

    /*
    Flujo de ejecucion:
    Al montarse el componente se carga el loadmessages()
    se ejecuta el useeffect() al cambiar la id.
    se settean los mensajes en el state setMessagebox.
    se actualiza la lista de contactos.
    vuelve a renderizarse la pagina (por el cambio del setMessageboxMessages)
    y se ejecuta el loadmessages() de nuevo.
    */

    //cargar mensajes
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
