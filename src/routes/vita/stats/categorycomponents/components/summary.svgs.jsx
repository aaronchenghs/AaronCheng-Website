const cubes = (
  <div className="cubes">
    <img
      src={"https://i.ibb.co/WPQccQk/Aaron-Cheng-Icon.png"}
      width="30px"
      height="30px"
      alt="cubes"
    />
    Cubes
  </div>
);
export const Left_Dialogue = (
  <p>
    I'm Aaron, a Brazilian-American student at Louisiana State University,
    running around programming with my {cubes}. Thanks for clicking on my
    website, and be sure to leave me a little note on the Feedback page when you
    get the chance. This is sort of a resume website for now but overtime it
    will become more of a personal site, have fun clicking around!
  </p>
);
export const Right_Dialogue = <p></p>;

export const AFK_Dialogue = (
  <p>
    When I'm AFK, you can catch me whipping it up in the kitchen, trying to
    build muscle, or playing one of my favorite retro RPG's
  </p>
);

const gameSVGs = {
  YGO: { src: "https://i.ibb.co/KrLs5Z6/Yugioh.png", name: "yugioh" },
  Catan: { src: "https://i.ibb.co/fMVJR9M/catan.png", name: "catan" },
};

export const Games = (
  <body className="list-body">
    Message me about:
    <ul className="game-list" style={{ listStyleType: "none" }}>
      <li>
        <img className="game-image" src={gameSVGs.YGO.src} />
      </li>
      <li>
        <img className="game-image" src={gameSVGs.Catan.src} />
      </li>
    </ul>
  </body>
);

export const primerImages = [
  {
    src: "https://i.ibb.co/P6nw8KN/IMG-4216.png",
    alt: "Me waiting for boba",
    imageName: "Waiting for Boba",
  },
  {
    src: "",
    alt: "Just a test really",
    imageName: "Test",
  },
];

export const AFKImages = {
  WorkinIt: { name: "WorkinIt", src: "" },
  CookinIt: { name: "CookinIt", src: "" },
  PlayinIt: { name: "PlayinIt", src: "" },
};

export const navArraySvgs = {
  left_arrow_light: (
    <svg
      viewBox="-19.04 0 75.803 75.803"
      xmlns="http://www.w3.org/2000/svg"
      fill="#87b1ac"
      stroke="#87b1ac"
      className="arrow"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g
          id="Group_64"
          data-name="Group 64"
          transform="translate(-624.082 -383.588)"
        >
          {" "}
          <path
            id="Path_56"
            data-name="Path 56"
            d="M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z"
            fill="#87b1ac"
          ></path>{" "}
        </g>{" "}
      </g>
    </svg>
  ),
  right_arrow_light: (
    <svg
      viewBox="-19.04 0 75.804 75.804"
      xmlns="http://www.w3.org/2000/svg"
      fill="#87b1ac"
      className="arrow"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g
          id="Group_65"
          data-name="Group 65"
          transform="translate(-831.568 -384.448)"
        >
          {" "}
          <path
            id="Path_57"
            data-name="Path 57"
            d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z"
            fill="#87b1ac"
          ></path>{" "}
        </g>{" "}
      </g>
    </svg>
  ),
  left_arrow_dark: (
    <svg
      viewBox="-19.04 0 75.803 75.803"
      xmlns="http://www.w3.org/2000/svg"
      fill="#d4eeff"
      stroke="#d4eeff"
      className="arrow"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g
          id="Group_64"
          data-name="Group 64"
          transform="translate(-624.082 -383.588)"
        >
          {" "}
          <path
            id="Path_56"
            data-name="Path 56"
            d="M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z"
            fill="#d4eeff"
          ></path>{" "}
        </g>{" "}
      </g>
    </svg>
  ),
  right_arrow_dark: (
    <svg
      viewBox="-19.04 0 75.804 75.804"
      xmlns="http://www.w3.org/2000/svg"
      fill="#d4eeff"
      stroke="#d4eeff"
      className="arrow"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g
          id="Group_65"
          data-name="Group 65"
          transform="translate(-831.568 -384.448)"
        >
          {" "}
          <path
            id="Path_57"
            data-name="Path 57"
            d="M833.068,460.252a1.5,1.5,0,0,1-1.061-2.561l33.557-33.56a2.53,2.53,0,0,0,0-3.564l-33.557-33.558a1.5,1.5,0,0,1,2.122-2.121l33.556,33.558a5.53,5.53,0,0,1,0,7.807l-33.557,33.56A1.5,1.5,0,0,1,833.068,460.252Z"
            fill="#d4eeff"
          ></path>{" "}
        </g>{" "}
      </g>
    </svg>
  ),
};
