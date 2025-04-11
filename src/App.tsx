import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AICreativeSuite from './pages/AICreativeSuite';
import ManagedServices from './pages/ManagedServices';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', width: '100%' }}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-creative-suite" element={<AICreativeSuite />} />
          <Route path="/managed-services" element={<ManagedServices />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
