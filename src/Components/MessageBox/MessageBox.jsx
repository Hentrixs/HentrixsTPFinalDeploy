import MessageBoxFooter from '../MessageBoxFooter/MessageBoxFooter';
import MessageBoxHeader from '../MessageBoxHeader/MessageBoxHeader';
import './MessageBox.css'

import React, { useState } from 'react'

export default function MessageBox() {
  const [messageBoxState,setmessageBoxState] = useState(true);
  return (
    <div className='messagebox-container'>
      <MessageBoxHeader />
      <div className='messagebox-container2'>
          {messageBoxState ? 
          <div>
            <p>Mensaje</p>
            <p>Mensaje</p>
            <p>Mensaje</p>
            <p>Mensaje</p>
            <p>Mensaje</p>
          </div> 
          : 
          <p>No hay chat seleccionado</p>}
      </div>
      <MessageBoxFooter />
    </div>
  )
}
