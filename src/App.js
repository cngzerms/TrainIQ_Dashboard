import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TopSkills from "./components/TopSkills";
import Employees from "./components/Employees";
import Dashboard from "./components/Dashboard";
import ActivityHours from "./components/ActivityHours";
import UpcomingCourses from "./components/UpcomingCourses";
import Teams from "./components/Teams";
import { DataProvider } from "./context";

function App() {
  return (
    <DataProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/top-skills" element={<TopSkills />} />
            <Route path="/activity-hours" element={<ActivityHours />} />
            <Route path="/upcoming-courses" element={<UpcomingCourses />} />
            <Route path="/teams" element={<Teams />} />
          </Routes>
        </div>
      </Router>
    </DataProvider>
  );
}
export default App;
