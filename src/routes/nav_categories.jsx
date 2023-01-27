import { ReactComponent as Portfolio } from "../assets/portfolio.svg";
import { ReactComponent as Contact } from "../assets/contact.svg";
import { ReactComponent as Feedback } from "../assets/feedback.svg";
import { ReactComponent as Home } from "../assets/Home.svg";

export const websiteTitle = 'AaronChengヽ(゜▽゜　)－';
export const categories = [
  {
    title: "Home",
    state: "home",
    to: "/",
    component: Home,
  },
  {
    title: "Portfolio",
    state: "portfolio",
    to: "/portfolio",
    component: Portfolio,
  },
  {
    title: "Contact Me",
    state: "contactme",
    to: "/contactme",
    component: Contact,
  },
  {
    title: "Feedback",
    state: "feedback",
    to: "/feedback",
    component: Feedback,
  },
];
