import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Lobby from "./Views/Lobby/LobbyView.tsx";
import NavBar from "./Components/Global/NavBar.tsx";

function App() {

  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path={'*'} element={<Lobby />} />
          <Route path={'/'} element={<Lobby />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
