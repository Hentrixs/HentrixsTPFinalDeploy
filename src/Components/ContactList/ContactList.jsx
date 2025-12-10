import React, { useContext, useState } from 'react'
import './ContactList.css'
import { MessageBoxContext } from '../../Contexts/MessageBoxContext/MessageBoxContext';
import { ContactSidebarContext } from '../../Contexts/ContactSideBarContext/ContactSideBarContext';

export default function ContactList(props) {

    //const [Messagelist,setMessagelist] = useState();

    const {contactState,loadingContactsState} = useContext(ContactSidebarContext);
    const {setMessageBoxText} = useContext(MessageBoxContext)

    const handleClick = (id) => {
        setMessageBoxText(id);
    } 
    
    if(loadingContactsState) {
        return (
            <div>Cargando contactos...</div>
        )
    }

    if(contactState.length === 0) {
        return (
            <div>No hay contactos</div>
        )
    }

  return (
    <div className='contact-container'>
        {
            contactState.map(
                function (contact){
                    return (
                        <a key={contact.contact_id}>
                            <div className='subdiv' onClick={() => {handleClick(contact.contact_id)}}>
                                <div>
                                    <img className='contact-avatar' src={contact.contact_avatar} alt={contact.contact_name} />
                                </div>
                                <div className='last-message'>
                                    <h3>{contact.contact_name}</h3>                                
                                    <p>{contact.last_message_content}</p>
                                    {/* <p>{contact.last_message_created_at}</p> */}
                                    {
                                        contact.contact_unseen_messages > 0 &&
                                        <span>{contact.contact_unseen_messages}</span>
                                    }                                             
                                </div>
                            </div>
                        </a>
                    )
                }
            )
        }
    </div>
  )
}
