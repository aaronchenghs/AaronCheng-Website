import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Navigation from "./routes/navigation.components";
import ContactMe from "./routes/contactme/contactme.component";
import Portfolio from "./routes/portfolio/portfolio.component";
import Feedback from "./routes/feedback/feedback.component";
import Home from "./routes/home/home.component";
import Vita from "./routes/vita/vita.component";
import BottomBar from "./routes/bottombar.components";

import "./App.scss";

const App = () => {
  const darkMode = useSelector((state) => state.toggleLight);
  return (
    <div className={"theme " + (darkMode ? "theme--dark" : "theme--light")}>
      <div className="website">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="vita" element={<Vita />} />
            <Route path="contactme" element={<ContactMe />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="feedback" element={<Feedback />} />
          </Route>
        </Routes>
        <BottomBar />
      </div>
    </div>
  );
};

export default App;
