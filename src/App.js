import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MissionVision from './pages/MissionVision';
import FacultyStaff from './pages/FacultyStaff';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/faculty-staff" element={<FacultyStaff />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
