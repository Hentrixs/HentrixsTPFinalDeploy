import { useContext } from 'react'
import './ContactList.css'
import { MessageBoxContext } from '../../Contexts/MessageBoxContext/MessageBoxContext';
import { ContactSidebarContext } from '../../Contexts/ContactSidebarContext/ContactSidebarContext';
import { Link } from 'react-router';

export default function ContactList() {

    // import state de lista de contactos, y estado de carga de lista de contactos 
    const { contactState, loadingContactsState } = useContext(ContactSidebarContext);

    // import state de mensaje de chat
    const { setMessageBoxText } = useContext(MessageBoxContext)

    // Cuando hacemos click sobre algun mensaje
    // seteamos el id del contacto en el state de mensaje de chat
    const handleClick = (id) => {
        setMessageBoxText(id);
        // Flujo de ejecucion al hacer click en un contacto =
        // react router cambia la URL a /chat/${id}
        // esto cambia el messageboxtext
        // y el useEffect de MessageList se ejecuta
        // cargando los mensajes del contacto.
    }

    //Codigo de abajo optimizado con IA. [reduccion de lineas de codigo]

    return loadingContactsState ? <div>Cargando contactos...</div> :
        contactState.length === 0 ? <div>No hay contactos</div> :
            (
                <div className='contact-container'>
                    {
                        contactState.map(
                            function (contact) {
                                return (
                                    <Link to={`/chat/${contact.contact_id}`} key={contact.contact_id} className='Link'>
                                        <div className='subdiv' onClick={() => { handleClick(contact.contact_id) }}>
                                            <div>
                                                <div>
                                                    <img className='contact-avatar' src={contact.contact_avatar} alt={contact.contact_name} />
                                                </div>
                                                <div className='last-message'>
                                                    <h3>{contact.contact_name}</h3>
                                                    <p>{contact.last_message_content}</p>
                                                </div>
                                            </div>
                                            <div className='last-time'>
                                                <p>{contact.last_message_time}</p>
                                                <div>
                                                    {
                                                        contact.contact_unseen_messages > 0 &&
                                                        <span className='unseen-badge'>{contact.contact_unseen_messages}</span>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }
                        )
                    }
                </div>
            )
}
