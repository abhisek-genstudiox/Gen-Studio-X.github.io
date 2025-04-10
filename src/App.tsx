import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AICreativeSuite from './pages/AICreativeSuite';
import ManagedServices from './pages/ManagedServices';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-creative-suite" element={<AICreativeSuite />} />
        <Route path="/managed-services" element={<ManagedServices />} />
      </Routes>
    </Router>
  );
}

export default App;
