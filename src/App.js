import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFeedbackStream } from "./utils/firebase/firebase.utils";
import { loadedFeedbacks_action } from "./redux_manager/actions/auth.action";
import { loadFeedbackAction } from "./redux_manager/actions/feedbackRender.action";
import Navigation from "./routes/navigation.components";
import ContactMe from "./routes/contactme/contactme.component";
import Portfolio from "./routes/portfolio/portfolio.component";
import Feedback from "./routes/feedback/feedback.component";
import Home from "./routes/home/home.component";
import Vita from "./routes/vita/vita.component";
import Footer from "./routes/footer.component";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();

  const messageGiven = useSelector((state) => state.toggleMessageGiven);
  useEffect(() => {
    const getFeedbackMap = async () => {
      const feedbackMap = await getFeedbackStream();
      dispatch(loadFeedbackAction(feedbackMap));
      dispatch(loadedFeedbacks_action);
    };
    getFeedbackMap();
  }, [messageGiven, dispatch]);

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
        <Footer />
      </div>
    </div>
  );
};

export default App;
