import './MessageBoxFooter.css'
import { useParams } from 'react-router'
import { useState, useContext } from 'react'
import { MessageBoxContext } from '../../Contexts/MessageBoxContext/MessageBoxContext'
import { addMessageToChat } from '../../services/messageService'
import { ContactSidebarContext } from '../../Contexts/ContactSidebarContext/ContactSidebarContext'

export default function MessageBoxFooter() {

  const [message, setMessage] = useState('');
  const { id } = useParams();
  const { MessageBoxMessages, setMessageBoxMessages } =
    useContext(MessageBoxContext);
  const { loadContactList } = useContext(ContactSidebarContext);

  const handleSubmit = (e) => {
    // previene funcionamiento default del formulario
    e.preventDefault();

    // funcion para obtener la hora actual
    const obtenerHoraActual = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');

      return `${hours}:${minutes}`;
    }

    // mensaje nuevo
    const nuevoMensaje = {
      message: message,
      send_by_me: message,
      time: obtenerHoraActual(),
    };

    // poner mensaje en el chat
    addMessageToChat(Number(id), nuevoMensaje);

    // actualizar mensajes en el state
    setMessageBoxMessages((prev) => {
      return [...prev, nuevoMensaje]
    });

    // limpiar el input
    setMessage('');

    loadContactList();
  }

  // al escribir se carga el mensaje en el state
  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  return (
    <div className='messagebox-footer'>
      <form action="#" onSubmit={handleSubmit}>
        <div>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-emoji-laughing" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M12.331 9.5a1 1 0 0 1 0 1A5 5 0 0 1 8 13a5 5 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5" />
            </svg>
          </span>
        </div>
        <input
          type="text" placeholder='Type a message...'
          value={message} onChange={handleChange}
        />
      </form>
    </div>
  )
}
