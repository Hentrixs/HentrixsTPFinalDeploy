import { useState } from "react"
import ContactSidebar from "./Components/ContactSidebar/ContactSidebar"
import WhatsAppHeader from "./Components/WhatsappHeader/WhatsappHeader"
import WhatsappFooter from "./Components/WhatsappFooter/WhatsappFooter"

import './global.css'
import MessageBox from "./Components/MessageBox/MessageBox"
import { BrowserRouter } from "react-router"
import { Route, Routes } from "react-router"
import MessagesScreen from "./Screens/MessagesScreen/MessagesScreen"
import TestComponent from "./Components/TestComponents/TestComponent"

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
          <div className="messages-container"> {/* Aca tengo que ver como chota hacer para que esto se renderize
          Solamente por encima de los 768px (MessagesScreen)*/}
            <MessageBox />
          </div>   
        </div>
      }/>
      <Route path="/messages/:contact_id" element={
        <MessagesScreen />
      } />
      <Route path="/testcomponent" element={
        <TestComponent />
      }/>
    </Routes>     /* TODO= Borrar /testcomponent al finalizar */
  )
}

export default App

