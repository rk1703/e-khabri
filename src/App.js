import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 9;
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Enable DarkMode");

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnText("Enable LightMode");
      document.body.style.backgroundColor = "#063956";
    } else {
      setMode("light");
      setBtnText("Enable DarkMode");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <Navbar mode={mode} togglemode={togglemode} btnText={btnText} />
        <LoadingBar height={3} color="#f11946" progress={progress} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                mode={mode}
                key="general"
                topic="general"
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/NEWS-APP"
            element={
              <News
                setProgress={setProgress}
                mode={mode}
                key="general"
                topic="general"
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                mode={mode}
                key="business"
                topic="business"
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                mode={mode}
                key="entertainment"
                topic="entertainment"
                pageSize={pageSize}
              />
            }
            />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                mode={mode}
                key="health"
                topic="health"
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                mode={mode}
                key="science"
                topic="science"
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                mode={mode}
                key="sports"
                topic="sports"
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                mode={mode}
                key="technology"
                topic="technology"
                pageSize={pageSize}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
