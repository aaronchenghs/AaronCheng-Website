import { Fragment, useState, useMemo } from "react";
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { categories, websiteTitle } from "./nav_categories";
import { emotes } from "../assets/text-lists/emotes";

import "./navigation.styles.scss";

const Navigation = () => {
  const dispatch = useDispatch();
  const location = useLocation(); // Use useLocation hook to access current route
  const [kaomojiIndex, setKaomojiIndex] = useState(0);
  const darkMode = useSelector((state) => state.toggleLight);

  const iconSrc = useMemo(
    () =>
      darkMode
        ? "https://i.ibb.co/QYg1k53/Aaron-Cheng-Icon-Dark.png"
        : "https://i.ibb.co/WPQccQk/Aaron-Cheng-Icon.png",
    [darkMode]
  );

  const handleKaomojiIncrement = () => {
    setKaomojiIndex((prevIndex) => (prevIndex + 1) % emotes.length);
  };

  const renderLink = (category) => {
    const isActive = location.pathname === category.to;
    const Component = darkMode ? category.darkcomponent : category.component;

    return (
      <div
        className={isActive ? "selected-box" : "box"}
        key={category.title}
        onClick={() => !isActive && dispatch(category.action())}
      >
        <Link className="logo-container" to={category.to}>
          <Component className="logo" />
          <div className="logo-title">{category.title}</div>
        </Link>
      </div>
    );
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link
          className="home-box"
          onClick={handleKaomojiIncrement}
          to="/"
          aria-label="Go to home"
        >
          <img
            src={iconSrc}
            alt="Aaron-Cheng-Icon"
            border="0"
            height="50px"
            width="50px"
          />
          {websiteTitle}
          <label className="kaomoji">{emotes[kaomojiIndex]}</label>
        </Link>
        <div className="nav-container">{categories.map(renderLink)}</div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default React.memo(Navigation);
