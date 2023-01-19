// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// Project files
import "./style.css";

export default function App() {
  return (
    <div className="App">
      <h1>Fontawesome Icons!</h1>
      <FontAwesomeIcon icon={solid("square-check")} />

      <button>
        <FontAwesomeIcon icon={solid("coffee")} /> Buy me a coffee
      </button>
    </div>
  );
}
