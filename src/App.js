import "./styles/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieGrid from "./components/MovieGrid";

function App() {
  return (
    <div className="App">
      <header className="container">
        <Header />
        <MovieGrid />
      </header>

      <Footer />
    </div>
  );
}

export default App;
