import React, { useState } from 'react'
import './ContactSearchForm.css'

export default function ContactSearchForm() {
  const [ButtonState,setButtonState] = useState([
    {
      id:1,
      name:"all",
      name_value:true
    },
    {
      id:2,
      name:"unread",
      name_value:false
    },
    {
      id:3,
      name:"favourites",
      name_value:false
    },
    {
      id:4,
      name:"groups",
      name_value:false
    }
  ]);

  const handleClick = (id) => {

    setButtonState((prev) => {
      return prev.map((item) => {
        return item.id === id ?
        {...item, name_value: true} :
        {...item, name_value: false}
      })
    })
  }
  
  console.log(ButtonState);

  return (
    <div className='contact-search-form'>
      <form action="#">
        <input type="text" placeholder='Search or start a new chat'/>
      </form>
      <div className='contact-buttons'>
        {ButtonState.map((button) => {
          return(
            <button key={button.id}
            // Arreglar el color aca (black)
            style={{backgroundColor: button.name_value ? "green" : "black"}}
            onClick={() => handleClick(button.id)} 
            >{button.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
