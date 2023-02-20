import Summary from "./categorycomponents/summary.component";
import Skills from "./categorycomponents/skills.component";
import Experience from "./categorycomponents/experience.component";
import Story from "./categorycomponents/story.component";

export const statsCategories = [
  {
    title: "Summary",
    state: "summary",
    component: Summary(),
  },
  {
    title: "Skills",
    state: "skills",
    component: Skills(),
  },
  {
    title: "Experience",
    state: "experience",
    component: Experience(),
  },
  {
    title: "Story",
    state: "story",
    component: Story(),
  },
];
