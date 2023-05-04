import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Nav from "./components/NavBar/Nav";
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
    <div className="font-sans flex flex-col min-h-screen overflow-x-hidden">
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
