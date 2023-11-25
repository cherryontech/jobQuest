// import finalHomepage from './assets/finalHomepage.png'
// import yellowBanner from './assets/yellowBanner.svg'
import './App.css'
import React from 'react'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { SignUp } from "./pages/SignUp";

export const App = () => {

  return (
    <>
      <Router>
        <div>
          <Routes>
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}
