import { techLogos } from "../../assets/tech-logos";
const ElapsedBackground = "https://i.ibb.co/tx3tPMQ/Elapsed-BGImage.png";

export const projects = [
  {
    id: 1,
    title: "Elapsed",
    href: "https://github.com/pfranz1/swim_timer",
    imgPath: ElapsedBackground,
    alt: "Elapsed-BGImage",
    description: `Elapsed is a mobile app developed by myself and peers for our software development class.\n
      Compatible with iOS and Android, it is designed to improve the lives of swimming coaches by streamlining
      and simplifying the time tracking, record keeping, and record analysis process. Click the title bar to access
      the git repository and try a demo linked in the readme!`,
    icons: [
      techLogos.DART,
      techLogos.FLUTTER,
      techLogos.FIREBASE,
      techLogos.FIGMA,
    ],
  },
  {
    id: 2,
    title: "ARC: This Website!",
    href: "https://github.com/aaronchenghs/AaronCheng-Website",
    imgPath: "https://i.ibb.co/QJxx9dG/webLogo.png",
    description: `My personal website that you are viewing right now ;) 
      Click this title bar to view the site's source code.`,
    icons: [
      techLogos.JS,
      techLogos.HTML5,
      techLogos.SASS,
      techLogos.REACT,
      techLogos.MUI,
      techLogos.FIREBASE,
    ],
  },
  {
    id: 3,
    title: "Exodus",
    href: "https://blog.exodusgbw.io/",
    imgPath: "https://i.ibb.co/nscswNs/Thumb6.jpg",
    description: `Exodus is a web-hosted RPG metaverse game on the Decentraland platform. I worked remotely
    on this game during my first internship as a front-end programmer, functionalizing 2D-interfaces 
    using TypeScript and the Decentraland SDK. It's recieved a quarter-million grant from it's community! 
    Click this title bar to view it's webpage for more details.`,
    icons: [techLogos.TS, techLogos.NODE, techLogos.DCL],
  },
  {
    id: 4,
    title: "Akon",
    href: "https://github.com/Andrivite/CSC-3380-Project/tree/main",
    imgPath: "https://i.ibb.co/HDQ5xX1/Akon.png",
    description: `Akon is an awesome music-playing and utilities bot I designed one winter, based on my
    favorite Senegalese singer. Click this title bar to get it's source code!`,
    icons: [techLogos.PYTHON, techLogos.DISCORD],
  },
];
