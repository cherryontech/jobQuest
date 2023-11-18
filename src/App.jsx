import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/Login/index";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
          </>
        </Routes>
      </Router>
    </>
  );
}

export default App;
