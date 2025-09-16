import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import MissionVision from './pages/MissionVision';
import FacultyStaff from './pages/FacultyStaff';
import SplashScreen from './components/SplashScreen';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOutSplash, setFadeOutSplash] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if user has already seen splash screen in this session
    const hasSeenSplash = sessionStorage.getItem('hasSeenSplash');
    
    if (hasSeenSplash) {
      // Skip splash screen if already seen in this session
      setShowSplash(false);
      setShowContent(true);
      return;
    }

    // Show splash screen sequence
    const fadeTimer = setTimeout(() => {
      setFadeOutSplash(true);
      setShowContent(true);
    }, 1500);

    const removeSplashTimer = setTimeout(() => {
      setShowSplash(false);
      // Mark as seen for this session
      sessionStorage.setItem('hasSeenSplash', 'true');
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeSplashTimer);
    };
  }, []);

  return (
    <Router>
      {showSplash && <SplashScreen fadeOut={fadeOutSplash} />}
      {showContent && (
        <>
          <ScrollToTop />
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mission-vision" element={<MissionVision />} />
              <Route path="/faculty-staff" element={<FacultyStaff />} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
