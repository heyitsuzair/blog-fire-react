import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import ThemeSwitcher from "./components/commons/ThemeSwitcher";
import ModeState from "./context/modeState";
import BlogState from "./context/blogState";
import UserState from "./context/userState";
import BookmarkState from "./context/bookmarkState";
import BlogFormState from "./context/blogFormState";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";

import LoadingBar from "react-top-loading-bar";

function App() {
  // state for progress bar
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem("mode")) {
      localStorage.setItem("mode", "light");
    }
    if (!localStorage.getItem("blog-bookmarks")) {
      localStorage.setItem("blog-bookmarks", JSON.stringify([]));
    }

    //eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Router>
        <ModeState>
          <BlogState>
            <UserState>
              <BlogFormState>
                <BookmarkState>
                  <LoadingBar
                    color={
                      localStorage.getItem("mode") === "dark"
                        ? "var(--color-primary)"
                        : "var(--color-secondary)"
                    }
                    progress={progress}
                    height={3}
                  />
                  <ToastContainer
                    autoClose={2000}
                    position="top-right"
                    pauseOnHover={true}
                    draggable={true}
                    theme="dark"
                    toastClassName="toast-custom"
                  />
                  <ThemeSwitcher />
                  <Routes>
                    <Route
                      path="/"
                      element={<Home setProgress={setProgress} />}
                    />
                    <Route path="/auth" element={<Auth />} />
                    <Route
                      path="/blog"
                      element={<Blog setProgress={setProgress} />}
                    />
                    <Route
                      path="/blog/:slug"
                      element={<SingleBlog setProgress={setProgress} />}
                    />
                    <Route
                      path="/dashboard/*"
                      element={<Dashboard setProgress={setProgress} />}
                    />
                  </Routes>
                </BookmarkState>
              </BlogFormState>
            </UserState>
          </BlogState>
        </ModeState>
      </Router>
    </div>
  );
}

export default App;
