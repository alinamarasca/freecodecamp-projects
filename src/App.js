import "./css/App.css";
// import "./sass/App.scss";
import { FaFreeCodeCamp } from "react-icons/fa";
import Main from "./components/Main";
import Tribute from "./pages/tribute/Tribute";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import SurveyForm from "./pages/survey/SurveyForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header id="main-header">
          <Link to="/freecodecamp-projects" className="view-project-link">
            <h1 id="main-title">
              freeCodeCamp <FaFreeCodeCamp />{" "}
            </h1>
          </Link>

          <p>Projects made for freeCodeCamp.</p>
        </header>
        <Routes>
          <Route path="/freecodecamp-projects" element={<Main />} />
          <Route path="/ffc-html-tribute" element={<Tribute />} />
          <Route path="/ffc-html-landing" element={<LandingPage />} />
          <Route path="/ffc-html-survey" element={<SurveyForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
