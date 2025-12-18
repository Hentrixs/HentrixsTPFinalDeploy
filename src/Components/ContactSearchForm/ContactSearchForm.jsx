import React, { useContext, useState } from 'react'
import './ContactSearchForm.css'
import { ContactSidebarContext } from '../../Contexts/ContactSidebarContext/ContactSidebarContext';

export default function ContactSearchForm() {

  const { updateFilter, filterState }
    = useContext(ContactSidebarContext);

  const handleClick = (id, name_request) => {
    //cambio de estado de botones y carga de contactos
    updateFilter(id, name_request);
  }

  return (
    <div className='contact-search-form'>
      <form action="#">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0">
          </path>
          </svg>
        </span>
        <input type="text" placeholder='Search or start a new chat' />
      </form>
      <div className='contact-buttons'>
        {filterState.map((button) => {
          return (
            <button
              key={button.id}
              style={
                {
                  backgroundColor: button.name_value ? "#113528" : "inherit",
                  color: button.name_value ? "#D9FCB3" : "#A2A19F"
                }
              }
              onClick={() => handleClick(button.id, button.name)}
            >{button.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
