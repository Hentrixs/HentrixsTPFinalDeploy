import React, { useContext, useState } from 'react'
import './ContactList.css'
import { MessageBoxContext } from '../../Contexts/MessageBoxContext/MessageBoxContext';
import { ContactSidebarContext } from '../../Contexts/ContactSideBarContext/ContactSideBarContext';
import { Link, Outlet } from 'react-router';

export default function ContactList() {

    const { contactState, loadingContactsState } = useContext(ContactSidebarContext);
    const { setMessageBoxText, setMessageBoxMessages } = useContext(MessageBoxContext)

    const handleClick = (id) => {
        setMessageBoxText(id);
    }

    if (loadingContactsState) {
        return (
            <div>Cargando contactos...</div>
        )
    }

    if (contactState.length === 0) {
        return (
            <div>No hay contactos</div>
        )
    }

    return (
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
                                        <p>{"last_message_placeholder"}</p>
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
