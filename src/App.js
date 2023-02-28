import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Navbar } from "./components/nav-bar";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <div>Footer</div>
      </Router>
    </div>
  );
}

export default App;
