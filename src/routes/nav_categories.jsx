import { ReactComponent as Portfolio } from "../assets/portfolio.svg";
import { ReactComponent as Contact } from "../assets/contact.svg";
import { ReactComponent as Feedback } from "../assets/feedback.svg";
import { ReactComponent as Vita } from "../assets/Vita.svg";

export const websiteTitle = "AaronChengヽ(゜▽゜　)－";
export const categories = [
  {
    title: "Vita",
    state: "vita",
    to: "/vita",
    component: Vita,
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
