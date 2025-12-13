import { useState } from "react"
import ContactSidebar from "./Components/ContactSidebar/ContactSidebar"
import WhatsAppHeader from "./Components/WhatsappHeader/WhatsappHeader"
import WhatsappFooter from "./Components/WhatsappFooter/WhatsappFooter"

import './global.css'
import MessageBox from "./Components/MessageBox/MessageBox"
import { Outlet, Route, Routes } from "react-router"
import MessagesScreen from "./Screens/MessagesScreen/MessagesScreen"
import MessageBoxContextProvider from "./Contexts/MessageBoxContext/MessageBoxContext"
import ContactSidebarContextProvider from "./Contexts/ContactSideBarContext/ContactSideBarContext"
import Communities from "./Components/Communities/Communities"
import Status from "./Components/Status/Status"

function App (){

  return (
    <Routes> {/* Nota= fijarse si lo del messagebox se puede hacer ocultando todo lo que no sea este*/}
      <Route path="/" element={
        <MessageBoxContextProvider>
          <div className="app-container">
            <div className="contact-list-container">
                  <WhatsAppHeader />
                  <ContactSidebarContextProvider>
                    <ContactSidebar />                    
                  </ContactSidebarContextProvider>
                  <WhatsappFooter />
            </div>
            <div className="messages-container"> {/* Aca tengo que ver como chota hacer para que esto se renderize
            Solamente por encima de los 768px (MessagesScreen) */}
              <Outlet />
            </div>
          </div>
        </MessageBoxContextProvider>
      }>
        <Route path="chat/:id" element={
          <MessageBoxContextProvider>
            <MessageBox />
          </MessageBoxContextProvider>
        } />
      </Route>      
        <Route path="/status" element={
          <Status />
          } />
        <Route path="/communities" element={
          <Communities />
          } />
    </Routes>
  )
}

export default App

