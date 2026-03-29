
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import PublicBoard from "./pages/PublicBoard.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import {useAuth} from "./context/UserContext.jsx";



function App() {
    const {user} = useAuth()
    const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
        <Routes>
            <Route path='*' element={<PublicBoard />} />
            <Route path="/public-board" element={<PublicBoard/>} />
            <Route path="/login" element={user &&  token ? <PublicBoard/> : <Login/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
