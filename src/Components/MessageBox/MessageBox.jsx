import messageService from '../../services/messageService';
import MessageBoxFooter from '../MessageBoxFooter/MessageBoxFooter';
import MessageBoxHeader from '../MessageBoxHeader/MessageBoxHeader';
import MessageBoxMessages from '../MessageBoxMessages/MessageBoxMessages';
import './MessageBox.css'

import React, { useState } from 'react'

export default function MessageBox({component_id}) {
  
  console.log('ID EN MESSAGEBOX = ' + component_id)

  return (
    <div className='messagebox-container'>
      <MessageBoxHeader MessageBoxAvatar={component_id} />
      <MessageBoxMessages id={component_id} />
      <MessageBoxFooter />
    </div>

    /*
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
    */
  )
}
