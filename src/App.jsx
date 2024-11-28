import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./components/Home";
import InteractiveMap from "./components/InteractiveMap";
import { Footer } from "./components/Footer";

import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header backgroundColor="#E74029" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stands" element={<InteractiveMap />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
