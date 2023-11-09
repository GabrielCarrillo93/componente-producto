import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Producto from './components/Producto/Producto';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
          <Producto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
