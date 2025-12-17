import ContactSidebar from "./Components/ContactSidebar/ContactSidebar"
import WhatsAppHeader from "./Components/WhatsappHeader/WhatsappHeader"
import WhatsappFooter from "./Components/WhatsappFooter/WhatsappFooter"

import './global.css'
import MessageBox from "./Components/MessageBox/MessageBox"
import { Outlet, Route, Routes } from "react-router"
import MessageBoxContextProvider from "./Contexts/MessageBoxContext/MessageBoxContext"
import ContactSidebarContextProvider from "./Contexts/ContactSidebarContext/ContactSidebarContext"
import Communities from "./Components/Communities/Communities"
import Status from "./Components/Status/Status"

function App() {

  return (
    <Routes>
      {/* Nota= fijarse si lo del messagebox se puede hacer ocultando todo lo que no sea este*/}
      <Route path="/" element={
        <MessageBoxContextProvider>
          <ContactSidebarContextProvider>

            <div className="app-container">
              <div className="contact-list-container">

                <WhatsAppHeader />
                <ContactSidebar />
                <WhatsappFooter />

              </div>
              {/* TODO = ver como hacer para que esto se renderize solamente por encima de los 768px (MessagesScreen) */}
              <>
                <Outlet />
              </>
            </div>

          </ContactSidebarContextProvider>
        </MessageBoxContextProvider>
      }>
        <Route path="chat/:id" element={
          <MessageBox />
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

