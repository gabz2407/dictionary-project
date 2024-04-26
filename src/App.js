import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary default="meaning" />
      </div>
      <footer>
        This project was coded by{" "}
        <a href="https://www.linkedin.com/in/gabriela-agostinho-378b67207/">
          Gabriela Agostinho
        </a>{" "}
        and it is open-sourced on{" "}
        <a href="https://github.com/gabz2407">GitHub</a>.
      </footer>
    </div>
  );
}
