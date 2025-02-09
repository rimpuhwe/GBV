import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import Contact from "./component/Contact/Contact";
import Header from "./component/header/header";
import ScrollToTop from "./component/ScrollToTop/ScrollToTop";
import About from "./component/About/About";
import GetStarted from "./component/GetStarted/GetStarted";
import Help from "./component/Help/Help";


function App() {
  return (
    <div className="App">
      
      <ScrollToTop />
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About-us" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Get Started" element={<GetStarted />} />
        <Route path="/Help" element={<Help />} />
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
            <li>
              <Link to="/About-us">About us</Link>
              </li>
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
