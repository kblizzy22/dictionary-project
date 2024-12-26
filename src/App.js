import "./App.css";
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          Welcome to My Dictionary
        </header>
        <main>
          <Dictionary defaultKeyword="winter"/>
        </main>
        <footer className="App-footer">Coded by Kelly Bailey-Alme</footer>
      </div>
    </div>
  );
}

export default App;
