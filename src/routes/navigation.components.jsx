import { Outlet, Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { categories, websiteTitle } from "./nav_categories";
import { useSelector } from "react-redux";
import { emotes } from "../assets/text-lists/emotes";

import "./navigation.styles.scss";

const Navigation = () => {
  const [selectedNav, setSelectedNav] = useState("home");
  const [kaomojiIndex, incrementKaomoji] = useState(0);
  const darkMode = useSelector((state) => state.toggleLight);
  return (
    <Fragment>
      <div className="navigation">
        <Link
          className="home-box"
          onClick={() => {
            setSelectedNav("home");
            kaomojiIndex + 1 > emotes.length - 1
              ? incrementKaomoji(0)
              : incrementKaomoji(kaomojiIndex + 1);
          }}
          to="/"
        >
          {websiteTitle + emotes[kaomojiIndex]}
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
                onClick={() => setSelectedNav(category.state)}
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
