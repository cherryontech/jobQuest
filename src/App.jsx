import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/Login/index";
import { RoadmapPage } from "./pages/RoadmapPage/RoadmapPage";
import TaskCard from "./pages/TaskCard/TaskCard"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/taskcard" element={<TaskCard />} />
          </>
        </Routes>
      </Router>
    </>
  );
}

export default App;
