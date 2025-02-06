import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import Contact from "./component/Contact/Contact";
import Header from "./component/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <footer>
        <blockquote>
          " Your voice matters. Together, we can make a difference. "
        </blockquote>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>About us</li>
            <li>Get Help</li>
            <li>Resources</li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default App;
