import { Auth } from './components/auth';
    // <div className="App">
    //   <Auth />
    // </div>
import React from "react";
import { BrowserRouter as HashRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Landing from "./components/Landing/Landing";
import JoinUs from "./components/JoinUs/JoinUs";
import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
