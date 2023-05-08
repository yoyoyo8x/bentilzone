import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} activeClassName="active" />
          <Route path="/about" element={<About />} activeClassName="active" />
          <Route path="/menu" element={<Menu />} activeClassName="active" />
          <Route
            path="/service"
            element={<Service />}
            activeClassName="active"
          />
          <Route
            path="/contact"
            element={<Contact />}
            activeClassName="active"
          />
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
