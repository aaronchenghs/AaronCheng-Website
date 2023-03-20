const flag_style = {
  "object-fit": "cover",
  height: "50px",
  width: "75px",
  verticalAlign: "middle",
  marginRight: "5px",
};
const food_style = {
  height: "55px",
  width: "60px",
  verticalAlign: "middle",
  marginRight: "8px",
  marginLeft: "7px",
};

export const story_svgs = {
  BR_flag: (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg"
      alt="BR flag"
      style={flag_style}
    />
  ),
  US_flag: (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
      alt="US flag"
      style={flag_style}
    />
  ),
  IA_flag: (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Flag_of_Iowa_%28variant%29.svg"
      alt="IA flag"
      style={flag_style}
    />
  ),
  corn: (
    <img
      src="https://img.icons8.com/emoji/48/null/ear-of-corn.png"
      alt="corn"
      style={food_style}
    />
  ),
  HI_flag: (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Hawaii.svg"
      alt="HI flag"
      style={flag_style}
    />
  ),
  FL_flag: (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg"
      alt="FL flag"
      style={flag_style}
    />
  ),
  LA_flag: (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_Louisiana.svg"
      alt="LA flag"
      style={flag_style}
    />
  ),
  crawfish: (
    <img
      src="https://img.icons8.com/external-flat-land-kalash/64/null/external-food-food-flat-land-kalash-12.png"
      alt="crawfish"
      style={food_style}
    />
  ),
};

export const story_text = {
  log: `Describing my background in-person is a 
        tangled verbiage; here's my solution :-)`,
  parents: `My parents immigrated from Brazil to the United States in the mid 90's`,
  born: `Then I was born in Ames, Iowa in 2002!`,
  moved: `We moved around a bit...`,
  louisiana: `Before settling in Louisiana where I've spent most of my life`,
};
