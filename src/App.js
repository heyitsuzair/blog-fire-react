import Header from "./components/commons/Header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ThemeSwitcher from "./components/commons/ThemeSwitcher";
import ModeState from "./context/modeState";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("mode")) {
      localStorage.setItem("mode", "light");
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <ModeState>
        <Router>
          <ThemeSwitcher />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ModeState>
    </div>
  );
}

export default App;
