import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="" element={<Home />} activeClassName="active" />
        <Route path="/about" element={<About />} activeClassName="active" />
        <Route path="/menu" element={<Menu />} activeClassName="active" />
        <Route path="/service" element={<Service />} activeClassName="active" />
        <Route path="/contact" element={<Contact />} activeClassName="active" />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
