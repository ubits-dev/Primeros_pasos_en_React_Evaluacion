import './App.css';
import NavBar from './nav-bar';
import Footer from './footer';
import ComponenteReutilizable from "./componente-reutilizable";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ComponenteReutilizable nombre="Componente en App" />
      <Footer/>
    </div>
  );
}

export default App;
