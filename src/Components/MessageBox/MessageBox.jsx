import MessageBoxFooter from '../MessageBoxFooter/MessageBoxFooter';
import MessageBoxHeader from '../MessageBoxHeader/MessageBoxHeader';
import MessageBoxMessages from '../MessageBoxMessages/MessageBoxMessages';
import './MessageBox.css'

export default function MessageBox() {
  
  return (
    <div className='messagebox-container'>
      <MessageBoxHeader />
      <MessageBoxMessages />
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
