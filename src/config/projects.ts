import airbnb from "public/projects/airbnb.png";
import social from "public/projects/airbnb.png";
import graphCMS from "public/projects/graph-cms.png";
import trello from "public/projects/trello.png";

const projects = [
  {
    name: "Airbnb Clone App",
    description:
      "Full Stack Airbnb clone app build with MongoDB, Prisma, Tailwind and NextJs",
    source: "https://github.com/AHTHneeuhl/Airbnb",
    techStack: ["TypeScript", "NextJs", "Zustand", "Prisma", "MongoDB"],
    picture: airbnb,
  },
  {
    name: "Social Media MERN App",
    description:
      "Full Stack Social Media Web App with MongoDB, ExpressJs and ReactJs",
    source: "https://github.com/AHTHneeuhl/social-frontend",
    techStack: [
      "JavaScript",
      "React",
      "Redux Toolkit",
      "Formik",
      "Yup",
      "ExpressJs",
      "MongoDB",
    ],
    picture: social,
  },
  {
    name: "GraphCMS Blog App",
    description: "A Blog Web App using GraphCMS, NextJS, and GraphQL",
    source: "https://github.com/AHTHneeuhl/cms-blog",
    techStack: [
      "TypeScript",
      "React",
      "Graph CMS",
      "GraphQL",
      "Sass",
      "NextJS",
    ],
    picture: graphCMS,
  },
  {
    name: "Trello Clone",
    description: "Trello Clone with FullStack React with TypeScript",
    source: "https://github.com/AHTHneeuhl/trello-clone",
    techStack: ["TypeScript", "React", "Styled-components", "React-DnD"],
    picture: trello,
  },
];

export default projects;
