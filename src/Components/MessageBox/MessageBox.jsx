import './MessageBox.css'

import React, { useState } from 'react'

export default function MessageBox() {
  const [messageBoxState,setmessageBoxState] = useState(true);
  return (
    <div className='messagebox-container'>
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
  )
}
