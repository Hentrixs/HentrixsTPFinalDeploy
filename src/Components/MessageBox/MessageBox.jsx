import { useContext } from 'react';
import { MessageBoxContext } from '../../Contexts/MessageBoxContext/MessageBoxContext';
import MessageBoxFooter from '../MessageBoxFooter/MessageBoxFooter';
import MessageBoxHeader from '../MessageBoxHeader/MessageBoxHeader';
import MessageBoxMessages from '../MessageBoxMessages/MessageBoxMessages';
import './MessageBox.css'

export default function MessageBox() {

  const { MessageBoxTextAndAvatar } = useContext(MessageBoxContext);

  // si no hay texto o avatar, no mostramos el chat
  return (
    <div className='messagebox-container'
      style={{ display: MessageBoxTextAndAvatar ? "flex" : "none" }}
    >
      <MessageBoxHeader />
      <MessageBoxMessages />
      <MessageBoxFooter />
    </div>

  )
}
