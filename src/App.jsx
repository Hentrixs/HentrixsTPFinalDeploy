import { useState } from "react"
import ContactSidebar from "./Components/ContactSidebar/ContactSidebar"
import WhatsAppHeader from "./Components/WhatsappHeader/WhatsappHeader"
import WhatsappFooter from "./Components/WhatsappFooter/WhatsappFooter"

import './App.css'
import MessageBox from "./Components/MessageBox/MessageBox"
import { BrowserRouter } from "react-router"
import { Route, Routes } from "react-router"

function App (){

  return (
    <Routes>
      <Route path="/Whatsapp" element={
        <div className="app-container">
          <div className="contact-list-container">
              <div>
                <WhatsAppHeader />
                <ContactSidebar/>
              </div>
              <WhatsappFooter />
          </div>
          <div>
            <MessageBox />
          </div>    
        </div>
      }/>
    </Routes>    
  )
}

export default App

