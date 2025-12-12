import React, { useState } from 'react'
import './ContactSearchForm.css'

export default function ContactSearchForm(props) {
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

  const handleClick = (id,name_request) => {

    if (name_request === "unread") {
      props.loadContactList("unread");
    } else if (name_request === "all") {
      props.loadContactList();
    } else if (name_request === "favourites") {
      props.loadContactList("favourites")
    }

    setButtonState((prev) => {
      return prev.map((item) => {
        return item.id === id ?
        {...item, name_value: true} :
        {...item, name_value: false}
      })
    })
  }
  
  return (
    <div className='contact-search-form'>
      <form action="#">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0">
            </path>
          </svg>         
        </span>
        <input type="text" placeholder='Search or start a new chat'/>
      </form>
      <div className='contact-buttons'>
        {ButtonState.map((button) => {
          return(
            <button key={button.id}
            // Arreglar el color aca (black)
            style={
              { backgroundColor: button.name_value ? "#113528" : "inherit",
                color: button.name_value ? "#D9FCB3" : "#A2A19F"
              }
            }
            onClick={() => handleClick(button.id,button.name)} 
            >{button.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
