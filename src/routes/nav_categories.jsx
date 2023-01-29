import { ReactComponent as Portfolio } from "../assets/nav-logos/portfolio.svg";
import { ReactComponent as Contact } from "../assets/nav-logos/contact.svg";
import { ReactComponent as Feedback } from "../assets/nav-logos/feedback.svg";
import { ReactComponent as Vita } from "../assets/nav-logos/Vita.svg";

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
