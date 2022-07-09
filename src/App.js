import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbarfiles/Navbar";
import Home from "./component/Pages/Home";
import Footer from "./component/footerfiles/Footer";
import Login from "./component/Loginfiles/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
