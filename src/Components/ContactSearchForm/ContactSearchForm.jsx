import React from 'react'
import './ContactSearchForm.css'

export default function ContactSearchForm() {
  return (
    <div className='contact-search-form'>
      <form action="#">
        <input type="text" placeholder='Search or start a new chat'/>
      </form>
      <div className='contact-buttons'>
        <button>All</button>
        <button>Unread</button>
        <button>Favourites</button>
        <button>Groups</button>
      </div>
    </div>
  )
}
