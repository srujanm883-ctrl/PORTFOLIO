import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ThumbnailCategory from './pages/ThumbnailCategory';
import Thumbnails from './pages/Thumbnails';
import ShortVideoThumbnails from './pages/ShortVideoThumbnails';
import ShortVideos from './pages/ShortVideos';
import Posters from './pages/Posters';
import Others from './pages/Others';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/thumbnail-category" element={<ThumbnailCategory />} />
            <Route path="/thumbnails" element={<Thumbnails />} />
            <Route path="/short-video-thumbnails" element={<ShortVideoThumbnails />} />
            <Route path="/short-videos" element={<ShortVideos />} />
            <Route path="/posters" element={<Posters />} />
            <Route path="/others" element={<Others />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
