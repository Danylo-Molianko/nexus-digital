import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  // Функція для автоматичної прокрутки вгору при зміні маршруту
  const ScrollToTop = () => {
    const { pathname } = React.useContext(React.__RouterContext);
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };
  
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

// Потрібно експортувати __RouterContext для роботи ScrollToTop
// Це невеличкий обхідний шлях, оскільки react-router-dom v6 не експортує його напряму
function AppWrapper() {
  const [RouterContext, setRouterContext] = React.useState(null);

  React.useEffect(() => {
    import('react-router-dom').then(module => {
      setRouterContext(module.UNSAFE_LocationContext);
    });
  }, []);

  if (!RouterContext) return null; // Показати завантажувач, якщо потрібно

  React.__RouterContext = RouterContext;

  return <App />;
}

export default AppWrapper;