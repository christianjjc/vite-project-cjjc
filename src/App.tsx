import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <>
      <header className="cabecera">
        <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>Contacto</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
