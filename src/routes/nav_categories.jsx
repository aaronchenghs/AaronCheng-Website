import { ReactComponent as Portfolio } from "../assets/nav-logos/portfolio.svg";
import { ReactComponent as Contact } from "../assets/nav-logos/contact.svg";
import { ReactComponent as Feedback } from "../assets/nav-logos/feedback.svg";
import { ReactComponent as Vita } from "../assets/nav-logos/vita.svg";

import { ReactComponent as VitaDark } from "../assets/nav-logos/vita-dark.svg";
import { ReactComponent as PortfolioDark } from "../assets/nav-logos/portfolio-dark.svg";
import { ReactComponent as FeedbackDark } from "../assets/nav-logos/feedback-dark.svg";
import { ReactComponent as ContactDark } from "../assets/nav-logos/contact-dark.svg";

import {
  vita,
  portfolio,
  contactme,
  feedback,
} from "../redux_manager/actions/nav.action";

export const websiteTitle = "AaronCheng";
export const categories = [
  {
    title: "Vita",
    state: "vita",
    to: "/vita",
    action: vita,
    component: Vita,
    darkcomponent: VitaDark,
  },
  {
    title: "Portfolio",
    state: "portfolio",
    to: "/portfolio",
    action: portfolio,
    component: Portfolio,
    darkcomponent: PortfolioDark,
  },
  {
    title: "Contact Me",
    state: "contactme",
    to: "/contactme",
    action: contactme,
    component: Contact,
    darkcomponent: ContactDark,
  },
  {
    title: "Feedback",
    state: "feedback",
    to: "/feedback",
    action: feedback,
    component: Feedback,
    darkcomponent: FeedbackDark,
  },
];
