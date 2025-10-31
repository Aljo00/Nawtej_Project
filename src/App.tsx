import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DigitalModelPage from './pages/DigitalModelPage';
import AiPlatformPage from './pages/AiPlatformPage';
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';

function App() { 
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTopOnRouteChange />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/digital-model" element={<DigitalModelPage />} />
        <Route path="/ai-platform" element={<AiPlatformPage />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;