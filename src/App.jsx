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
import WelcomeScreen from "./Components/WelcomeScreen/WelcomeScreen"

function App() {

  return (
    <Routes>
      <Route path="/" element={
        <MessageBoxContextProvider>
          <ContactSidebarContextProvider>

            <div className="app-container" data-theme="light">
              <div className="contact-list-container">

                <WhatsAppHeader />
                <ContactSidebar />
                <WhatsappFooter />

              </div>
              <div className="messagebox-outlet-container">
                <Outlet />
              </div>
            </div>

          </ContactSidebarContextProvider>
        </MessageBoxContextProvider>
      }>
        <Route index element={<WelcomeScreen />} />
        <Route path="chat/:id" element={
          <MessageBox data-theme="light" />
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

