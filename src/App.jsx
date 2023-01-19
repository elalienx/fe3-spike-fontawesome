// Node modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

// Project files
import "./style.css";

export default function App() {
  return (
    <div className="App">
      <h1>Fontawesome Icons!</h1>
      <h2>Follow me on social media</h2>
      <ul>
        <li>
          <FontAwesomeIcon icon={brands("facebook")} beat /> Facebook
        </li>
        <li>
          <FontAwesomeIcon icon={brands("twitter")} fade /> Twitter
        </li>
        <li>
          <FontAwesomeIcon icon={brands("instagram")} bounce /> Instagram
        </li>
      </ul>

      <button className="fa">
        <FontAwesomeIcon icon={solid("solar-panel")} size="xl" spin />
        Buy me a coffee
      </button>
    </div>
  );
}
