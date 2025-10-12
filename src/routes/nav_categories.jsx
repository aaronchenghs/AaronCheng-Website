import { ReactComponent as Portfolio } from "../assets/nav-logos/portfolio.svg";
import { ReactComponent as Contact } from "../assets/nav-logos/contact.svg";
import { ReactComponent as Pencil } from "../assets/nav-logos/pencil.svg";

import { ReactComponent as PortfolioDark } from "../assets/nav-logos/portfolio-dark.svg";
import { ReactComponent as ContactDark } from "../assets/nav-logos/contact-dark.svg";
import { ReactComponent as PencilDark } from "../assets/nav-logos/pencil-dark.svg";

export const websiteTitle = "AaronCheng";
export const categories = [
  {
    title: "Portfolio",
    state: "portfolio",
    to: "/portfolio",
    component: Portfolio,
    darkcomponent: PortfolioDark,
  },
  {
    title: "Contact Me",
    state: "contactme",
    to: "/contactme",
    component: Contact,
    darkcomponent: ContactDark,
  },
  {
    title: "My Board",
    state: "feedback",
    to: "/feedback",
    component: Pencil,
    darkcomponent: PencilDark,
  },
];
