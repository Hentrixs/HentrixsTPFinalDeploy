import { Outlet, Route, Routes } from "react-router"
import Communities from "./Components/Communities/Communities"
import Status from "./Components/Status/Status"
import WelcomeScreen from "./Components/WelcomeScreen/WelcomeScreen"
import MessageBox from "./Components/MessageBox/MessageBox"
import { ThemeContextProvider } from "./Contexts/ThemeContext/ThemeContext"
import './global.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<ThemeContextProvider />}>
        <Route index element={<WelcomeScreen />} />
        <Route path="chat/:id" element={<MessageBox />} />
      </Route>
      <Route path="/status" element={<Status />} />
      <Route path="/communities" element={<Communities />} />
    </Routes>
  )
}

export default App

