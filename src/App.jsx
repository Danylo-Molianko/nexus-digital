import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import StrategyPage from './pages/ServicesPage';
import ArsenalPage from './pages/ProjectsPage';
import TeamPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/strategy" element={<StrategyPage />} />
          <Route path="/arsenal" element={<ArsenalPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/schedule-session" element={<ContactPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
    
