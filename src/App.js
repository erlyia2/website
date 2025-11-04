import About from './pages/About.js';
import Navbar from './components/Navbar.js';
import { HashRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    
    <HashRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<About/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    </HashRouter>
    </>
  );
}

export default App;
