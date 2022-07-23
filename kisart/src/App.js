import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Drawings from "./components/pages/Drawings";
import Pottery from "./components/pages/Pottery";
import Paintings from "./components/pages/Paintings";
import Contact from "./components/pages/Contact";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drawings" element={<Drawings />} />
          <Route path="/pottery" element={<Pottery />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
