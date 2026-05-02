import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/common/WhatsAppFloat';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ManufacturingPage from './pages/ManufacturingPage';
import GalleryPage from './pages/GalleryPage';
import TeamPage from './pages/TeamPage';
import CertificatePage from './pages/CertificatePage';
import ContactPage from './pages/ContactPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import './styles/responsive.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/manufacturing" element={<ManufacturingPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/certificates" element={<CertificatePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
