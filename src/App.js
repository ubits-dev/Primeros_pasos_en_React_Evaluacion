import "./App.css";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import ComponenteReutilizable from "./components/componente-reutilizable/componente-reutilizable";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ComponenteReutilizable nombre="Componente en App" />
      <Footer />
    </div>
  );
}

export default App;
