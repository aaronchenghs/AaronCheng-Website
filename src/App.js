import { useEffect, useState } from "react";
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

  const [showLegacyModal, setShowLegacyModal] = useState(() => {
    if (typeof window === "undefined") return false;
    return !window.sessionStorage.getItem("legacyModalDismissed");
  });

  const handleDismissLegacyModal = () => {
    setShowLegacyModal(false);
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("legacyModalDismissed", "1");
    }
  };

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

      {showLegacyModal && (
        <div
          className="legacy-modal-backdrop"
          onClick={handleDismissLegacyModal}
        >
          <div className="legacy-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="legacy-modal-close"
              onClick={handleDismissLegacyModal}
              aria-label="Dismiss legacy site notice"
            >
              &times;
            </button>

            <h2 className="legacy-modal-title">
              You’re viewing my legacy site
            </h2>

            <p className="legacy-modal-body">
              This is the older version of my personal website. You’re welcome
              to keep browsing here, but you can find the current, fully updated
              version at:
            </p>

            <a
              href="https://aaroncheng.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="legacy-modal-link"
            >
              Visit the current site
            </a>

            <button
              type="button"
              className="legacy-modal-continue"
              onClick={handleDismissLegacyModal}
            >
              Continue on legacy site
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
