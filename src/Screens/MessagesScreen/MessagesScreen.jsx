import React, { useEffect, useState } from 'react'
import MessageBox from '../../Components/MessageBox/MessageBox';
import { useParams } from 'react-router';
import { getContactById } from '../../services/contactService';
import './MessagesScreen.css';


export default function MessagesScreen() {
  const parametros_url = useParams(); //averiguar 
  const contact_id = parametros_url.contact_id;

  const [contactSelected,setContactSelected] = useState(null);
  const [loadingcontact,setLoadingContact] = useState(true);

  const loadContactById = () => {
    setLoadingContact(true);

    setTimeout(function() {
      const contact = getContactById(contact_id);
      setContactSelected(contact);
      setLoadingContact(false)

    }),
    2000
  };

  useEffect(
    loadContactById,
    [parametros_url.contact_id]
  )

  return (
    <div className='messages-screen'>
        {
          loadingcontact ? 
          <div className='loading-screen'>cargando...</div>
          :
          <div className='messages-screen'>
            <h1>Name: {contactSelected.contact_name}</h1>
            <h2>ID: {contactSelected.contact_id}</h2>
              {
              contactSelected.contact_messages ?
              contactSelected.contact_messages.map((m,index) => {
                return(<p key={index}>{m}</p>)
              })
              : <p>no hay mensajes aun</p>
              }
          </div>
        }
    </div>
  )
}
