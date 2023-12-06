import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LoginPage } from "./pages/Login/index";
import { RoadmapPage } from "./pages/RoadmapPage/index";
import TaskCard from "./pages/TaskCard/TaskCard";
import Articles from "./pages/Articles/index";
import { SignupPage } from "./pages/SignUp/index";
import { NavigationBar } from "./components/NavigationBar";
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/:path/:task" element={<TaskCard />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/signup" element={<SignupPage />} />
        </>
      </Routes>
    </Router>
  );
}

export default App;
