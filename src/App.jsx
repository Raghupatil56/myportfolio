import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Experience from "./components/Experience";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="pt-10 text-white font-serif">
        <Routes>
          <Route path="myportfolio/" element={<Home />} />  
          <Route path="myportfolio/Experience" element={<Experience />} />
          <Route path="myportfolio/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
