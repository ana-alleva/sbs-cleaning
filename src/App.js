import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Navbar } from "./components/NavBar";
import "./App.css";
import "./index.css";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App container min-w-full">
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
