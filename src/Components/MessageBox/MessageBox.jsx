import { useContext } from 'react';
import MessageBoxFooter from '../MessageBoxFooter/MessageBoxFooter';
import MessageBoxHeader from '../MessageBoxHeader/MessageBoxHeader';
import MessageBoxMessages from '../MessageBoxMessages/MessageBoxMessages';
import './MessageBox.css'
import { MessageBoxContext } from '../../Contexts/MessageBoxContext/MessageBoxContext';

export default function MessageBox() {
  
  const {MessageBoxTextAndAvatar} = useContext(MessageBoxContext);

  return (
    <div className='messagebox-container' style={{display: MessageBoxTextAndAvatar ? "flex" : "none"}}>
      <MessageBoxHeader />
      <MessageBoxMessages />
      <MessageBoxFooter />
    </div>

  )
}
