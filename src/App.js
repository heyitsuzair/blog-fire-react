import Header from "./components/commons/Header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ThemeSwitcher from "./components/commons/ThemeSwitcher";
import ModeState from "./context/modeState";
import BlogState from "./context/blogState";
import { useEffect } from "react";
import Footer from "./components/commons/Footer";

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
        <BlogState>
          <Router>
            <ThemeSwitcher />
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
          </Router>
        </BlogState>
      </ModeState>
    </div>
  );
}

export default App;
