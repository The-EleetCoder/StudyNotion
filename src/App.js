import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {

  const [isLoggedin, setIsLoggedin] = useState(false)

  return (
    <div>
      <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </div>
  )
}

export default App;
