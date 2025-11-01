import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
const StrategyPage = lazy(() => import('./pages/ServicesPage'));
const ArsenalPage = lazy(() => import('./pages/ProjectsPage'));
const TeamPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

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
        <Suspense fallback={<div className="container mx-auto px-4 py-24 text-center text-nexus-text-secondary">Loading…</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/strategy" element={<StrategyPage />} />
            <Route path="/services" element={<StrategyPage />} />
            <Route path="/arsenal" element={<ArsenalPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/schedule-session" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;

