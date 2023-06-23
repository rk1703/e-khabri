import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_API_KEY;
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
                apiKey={apiKey}
                key="news"
                topic="news"
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
                apiKey={apiKey}
                key="news"
                topic="news"
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/beauty"
            element={
              <News
                setProgress={setProgress}
                mode={mode}
                apiKey={apiKey}
                key="beauty"
                topic="beauty"
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
                apiKey={apiKey}
                key="business"
                topic="business"
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/economics"
            element={
              <News
                setProgress={setProgress}
                mode={mode}
                apiKey={apiKey}
                key="economics"
                topic="economics"
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/energy"
            element={
              <News
                setProgress={setProgress}
                mode={mode}
                apiKey={apiKey}
                key="energy"
                topic="energy"
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
                apiKey={apiKey}
                key="entertainment"
                topic="entertainment"
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/finance"
            element={
              <News
                setProgress={setProgress}
                mode={mode}
                apiKey={apiKey}
                key="finance"
                topic="finance"
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/food"
            element={
              <News
                setProgress={setProgress}
                mode={mode}
                apiKey={apiKey}
                key="food"
                topic="food"
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/gaming"
            element={
              <News
                setProgress={setProgress}
                mode={mode}
                apiKey={apiKey}
                key="gaming"
                topic="gaming"
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/music"
            element={
              <News
                setProgress={setProgress}
                mode={mode}
                apiKey={apiKey}
                key="music"
                topic="music"
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/politics"
            element={
              <News
                setProgress={setProgress}
                mode={mode}
                apiKey={apiKey}
                key="politics"
                topic="politics"
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
                apiKey={apiKey}
                key="science"
                topic="science"
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/sport"
            element={
              <News
                setProgress={setProgress}
                mode={mode}
                apiKey={apiKey}
                key="sport"
                topic="sport"
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/tech"
            element={
              <News
                setProgress={setProgress}
                mode={mode}
                apiKey={apiKey}
                key="tech"
                topic="tech"
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/travel"
            element={
              <News
                setProgress={setProgress}
                mode={mode}
                apiKey={apiKey}
                key="travel"
                topic="travel"
                pageSize={pageSize}
              />
            }
          />
          <Route
            exact
            path="/world"
            element={
              <News
                setProgress={setProgress}
                mode={mode}
                apiKey={apiKey}
                key="world"
                topic="world"
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