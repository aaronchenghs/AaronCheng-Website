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
    id: 5,
    title: "Geaux Enroll",
    href: "https://github.com/aaronchenghs/geaux_enroll",
    imgPath: "https://i.ibb.co/GcNR7rR/Capture.png",
    description: `Geaux Enroll is my Interface Design course project. It is an interactive demo inspired by the
    poor quality of course scheduling software and workflows in university, representing a possible design improvement to this system. 
    A link to the deployed build is at the top of my repo's README, click the title bar.`,
    icons: [techLogos.TS, techLogos.REACT, techLogos.REDUX, techLogos.SASS],
  },
  {
    id: 6,
    title: "Youtube Sentiment Analyzer",
    href: "https://github.com/aaronchenghs/youtube-sentiment-analyzer-server",
    imgPath: "https://i.ibb.co/vB5K4xC/comment-sect.png",
    description: `This is a machine learning project with a complete front-end and back-end. It is built to analyze the comments of a user-inputted youtube
    video and predict the sentiment of the comments. The front-end is built with Next.js and the back-end is a Flask server. Pandas is the machine learning
    library of choice. Click the title bar to access the git repository 
    for the python backend whose README links to the front-end repo, with instruction on how to try this app out for yourself.`,
    icons: [
      techLogos.PYTHON,
      techLogos.PANDAS,
      techLogos.FLASK,
      techLogos.TS,
      techLogos.NEXT,
      techLogos.SASS,
    ],
  },
  {
    id: 7,
    title: "Palate Passport",
    href: "https://github.com/aaronchenghs/Code_Bros",
    imgPath: "https://i.ibb.co/h8wVkgn/Capture.png",
    description: `Palate Passport is a web app using the Yelp API to help users find restaurants based on a trip they are planning, and schedule meals for each day of the trip. This React app was 
    built for an LSU-hosted hackathon, which won first prize after the 24 hour time limit and presentation. Click the title bar to access the git repository and instruction on how to demo this app.`,
    icons: [
      techLogos.TS,
      techLogos.REACT,
      techLogos.REDUX,
      techLogos.MUI,
      techLogos.SASS,
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
    href: "https://www.exodusgbw.io/",
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
    href: "https://github.com/aaronchenghs/Akon",
    imgPath: "https://i.ibb.co/HDQ5xX1/Akon.png",
    description: `Akon is an awesome music-playing and utilities bot I designed one winter, based on my
    favorite Senegalese singer. Click this title bar to get it's source code!`,
    icons: [techLogos.PYTHON, techLogos.DISCORD],
  },
];
