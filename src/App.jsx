import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/Login";
import { RoadmapPage } from "./pages/RoadmapPage";

function App() {
  return (
      <Router>
        <Routes>
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
          </>
        </Routes>
      </Router>
  );
}

export default App;
