const skills = [
  {
    title: "Front End Development",
    skills: [
      {
        name: "HTML/CSS",
        percentage: 0.6,
      },
      {
        name: "JavaScript",
        percentage: 0.7,
      },
      {
        name: "React",
        percentage: 0.8,
      },
      {
        name: "Three.js",
        percentage: 0.4,
      },
      {
        name: "TypeScript",
        percentage: 0.7,
      },
    ],
  },
  {
    title: "Back End Development",
    skills: [
      {
        name: "Node.js",
        percentage: 0.6,
      },
      {
        name: "Java",
        percentage: 0.8,
      },
      {
        name: "Spring Boot",
        percentage: 0.6,
      },
      {
        name: "SQL",
        percentage: 0.5,
      },
      {
        name: "GraphQL",
        percentage: 0.3,
      },
      {
        name: "Ruby",
        percentage: 0.2,
      },
      {
        name: "Python",
        percentage: 0.5,
      },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      {
        name: "React Native",
        percentage: 0.7,
      },
      {
        name: "Expo",
        percentage: 0.8,
      },
    ],
  },
  {
    title: "Other",
    skills: [
      {
        name: "AWS",
        percentage: 0.5,
      },
      {
        name: "Blender",
        percentage: 0.4,
      },
      {
        name: "Git",
        percentage: 0.8,
      },
      {
        name: "Reinforcement Learning",
        percentage: 0.5,
      },
    ],
  },
];

export default skills;

export const projects = [
  {
    title: "Pask (Personal Project)",
    description:
      "This is a task management app which is integrateed with a github. So when a user commit's a messages to their github account the tasks gets updated. \n Reasons for this project: I have a lot of unfinished projects in my github and created this to find a way to keep track of each project.",
    info: [
      "Developed using React Native.",
      "Used  nosql database (Firestore) by firebase.",
      "Used servel functions written in Node.js.",
      "Used Github Actions to trigger server requests.",
    ],
    link: " Visit the official website for more info.",
    linkHref: "https://pask-6f72b.web.app",
  },
  {
    title: "Mun Mobile (Personal Project)",
    description:
      "A re-design of the existing Mun mobile (one of the mobile apps used by students at Memorial University) app focused on the user interface and the user experience.",
    info: [
      "Developed using React Native.",
      "Used  animation libraries to create a smooth user experience.",
    ],
    link: " Visit the expo store to download.",
    linkHref: "https://expo.io/@dliya/mun-mobile",
  },
  {
    title: "NL-Life (Hackthon Runner's Up Project)",
    description:
      "This is a prototype of a web application which was created as a part of a hackathon to help small business.",
    info: ["Developed using React."],
    link: " Visit the website here",
    linkHref: "https://nl-life.vercel.app",
  },
  {
    title: "Game Of Forcus (Collaborative Project)",
    description:
      "This is a game which was created as a part of course work for a course on Software Engineering",
    info: [
      "Uses Object Oriented design patterns.",
      "Developed using Java.",
      "Uses Swing.",
    ],
    link: " Download a runnable jar here",
    linkHref: "assets/GameOfFocus.jar",
    download: true,
    preview: true,
  },
  {
    title: "Collection Of AI Projects (Academic Project)",
    description:
      "This is a collection of AI projects which was created as a part of course work for a course on Artificial Intelligence. Due to future course offerings, we are not allowed to post the project code publicly.",
    info: [
      "Path finding using BFS/DFS and A*.",
      "Connect 4 game using minimax with alpha beta pruning (Won the connect4 AI class competition/smartest AI).",
      "Solving Sudoku using genetic algorithms.",
      "Finding the shortest path in a maze using reinforcement learning.",
    ],
    preview: true,
  },
];
