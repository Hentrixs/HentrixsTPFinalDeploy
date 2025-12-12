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

function App (){

  return (
    <Routes>
      
      <Route path="/" element={
        <MessageBoxContextProvider>
          <div className="app-container">

            <div className="contact-list-container">
                <div className="contact-sidebar-container">
                  <WhatsAppHeader />
                  <ContactSidebarContextProvider>
                    <ContactSidebar />
                  </ContactSidebarContextProvider>
                </div>
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
            <ContactSidebarContextProvider>
              <div className="messages-container">
                <MessageBox />
              </div>
            </ContactSidebarContextProvider>
          </MessageBoxContextProvider>
        } />
      </Route>      
    </Routes>       
  )
}

export default App

