import { Outlet, Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { categories, websiteTitle } from "./nav_categories";
import { useDispatch, useSelector } from "react-redux";
import { emotes } from "../assets/text-lists/emotes";
import { home } from "../redux_manager/actions/nav.action";

import "./navigation.styles.scss";

const Navigation = () => {
  const dispatch = useDispatch();
  const [kaomojiIndex, incrementKaomoji] = useState(0);
  //darkmode toggle for icon SVGs
  const darkMode = useSelector((state) => state.toggleLight);
  //embedded icon state
  const selectedNav = useSelector((state) => state.navReducer);

  const iconSrc = darkMode
    ? "https://i.ibb.co/QYg1k53/Aaron-Cheng-Icon-Dark.png"
    : "https://i.ibb.co/WPQccQk/Aaron-Cheng-Icon.png";

  return (
    <Fragment>
      <div className="navigation">
        <Link
          className="home-box"
          onClick={() => {
            dispatch(home);
            incrementKaomoji(
              (kaomojiIndex - 1 + emotes.length) % emotes.length
            );
          }}
          to="/"
        >
          <img
            src={iconSrc}
            alt="Aaron-Cheng-Icon"
            border="0"
            height="45px"
            width="45px"
          />
          {websiteTitle}
          {emotes[kaomojiIndex]}
        </Link>

        <div className="nav-container">
          {categories.map((category) => {
            return selectedNav === category.state ? (
              <div className="selected-box" key={category.title}>
                <Link className="logo-container" to={category.to}>
                  {darkMode ? (
                    <category.darkcomponent className="logo" />
                  ) : (
                    <category.component className="logo" />
                  )}
                  <div className="logo-title">{category.title}</div>
                </Link>
              </div>
            ) : (
              <div
                className="box"
                key={category.title}
                onClick={() => dispatch(category.action)}
              >
                <Link className="logo-container" to={category.to}>
                  {darkMode ? (
                    <category.darkcomponent className="logo" />
                  ) : (
                    <category.component className="logo" />
                  )}
                  <div className="logo-title">{category.title}</div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};
export default Navigation;
