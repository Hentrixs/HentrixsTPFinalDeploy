import { useContext } from 'react'
import './MessageBoxHeader.css'
import { getContactById } from '../../services/contactService'
import { MessageBoxContext } from '../../Contexts/MessageBoxContext/MessageBoxContext';
import { Link, useParams } from 'react-router';

export default function MessageBoxHeader() {

  const {id} = useParams();
  const {setMessageBoxText} = useContext(MessageBoxContext);
  const contact = getContactById(Number(id));
  
  return (
    <div className='messagebox-header'>
      <div className='messagebox-div-left'>
          <Link to={"/"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
            </svg>    
          </Link>
          <img src={contact.contact_avatar} alt="" />        
        {
          <div>
            <h3>{contact.contact_name}</h3>
            <p>Click here for contact info</p>
          </div>
        }
      </div>
      <div className='messagebox-div-right'>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-camera-video" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/>
          </svg>
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>    
        </span>   
        <span>         
          <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
          </svg>
        </span>
      </div>
    </div>
  )
}
