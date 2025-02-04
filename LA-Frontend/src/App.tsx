import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Lobby from "./Views/LobbyView.tsx";

function App() {

  return (
    <>
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
