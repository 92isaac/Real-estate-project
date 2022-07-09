import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbarfiles/Navbar";
import Home from "./component/Pages/Home";
import Footer from "./component/footerfiles/Footer";
import Login from "./component/Loginfiles/Login";
import Product from "./component/Pages/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Product />} />

      </Routes>
    </Router>
  );
}

export default App;
