import './MessageBox.css'

import React, { useState } from 'react'

export default function MessageBox() {
  const [messageBoxState,setmessageBoxState] = useState(false);
  return (
    <div>
        {messageBoxState ? 
        <p>--placeholder--box--state</p> 
        : 
        <p className='tempclass'>No hay chat seleccionado</p>}
    </div>
  )
}
