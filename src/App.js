import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <div className="min-w-screen min-h-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedin} />}
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedin} />}
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isLoggedin={isLoggedin}>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
