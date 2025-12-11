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

  )
}
