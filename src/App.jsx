import { Outlet, Route, Routes } from "react-router"
import MainLayout from "./Layouts/MainLayout"
import Communities from "./Components/Communities/Communities"
import Status from "./Components/Status/Status"
import WelcomeScreen from "./Components/WelcomeScreen/WelcomeScreen"
import MessageBox from "./Components/MessageBox/MessageBox"

import './global.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<WelcomeScreen />} />
        <Route path="chat/:id" element={<MessageBox data-theme="light" />} />
      </Route>
      <Route path="/status" element={<Status />} />
      <Route path="/communities" element={<Communities />} />
    </Routes>
  )
}

export default App

