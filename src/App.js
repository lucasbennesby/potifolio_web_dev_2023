import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Projetos from "./Pages/Projetos/Projetos";
import Contato from "./Pages/Contato/Contato";
import Sobre from "./Pages/Sobre/Sobre";
import NavBar from "./Components/NavBar";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/projetos"
          element={<Projetos />}
        />
        <Route
          path="/contato"
          element={<Contato />}
        />
        <Route
          path="/sobre"
          element={<Sobre />}
        />
      </Routes>
    </Router>
  );
}

export default App;
