import ScholalifyImg from "./images/scholalify.png";
import PaskImg from "./images/pask.png";

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
    ],
  },
];

export default skills;

export const projects = [
  {
    title: "Scholalify - A platform that connects students with tutors",
    description:
      "Scholalify is an ed-tech startup founded by me in 2021 with the aim of providing better learning experience for students in Sri Lanka. Our first product was an online quiz platform for students to practice for their exams.However, with the rise of online tutoring we decided to pivot our product to a platform that connects students with tutors.",
    title2:
      "The tech that helps scholalify run with minimal cost and high availability.",
    description2:
      "One of the biggest challenges we had was to find the right tech stack that can help us to scale with low cost but also have a high availability at the same time. After some research this what we ended up using. Our system was designed using a Microservices architecture with a database per service model. This does add a lot of complexity at the beginning but we felt like the pros outnumbered the cons. Next up, single table design. This is somewhat a newer data modeling paradigm but since we are using dynamodb we found out this approach reduces cost and latency.  One language system (I just came up with that term 😂 ). It's basically using one language in both the client and server side. In our case it's Typescript.",
    imageUrl: ScholalifyImg,
  },
  {
    title: "Pask - A mobile app focused on increasing developer productivity",
    imageUrl: PaskImg,
    description:
      "Pask is a mobile app that helps developers to increase their productivity by providing them with a set of tools that they can use to manage their tasks and projects in more efficient way. The app is available on iOS.",
    title2: "The tech used to build Pask",
    description2:
      "Since this was a fun side project, I wanted to build and run it completely using free methods. Since I was using React Native, I decided to use Expo to build the app. Expo is a free and open source toolchain built around React Native to help you build native iOS and Android projects using JavaScript and React. Since I have to save the data on a databse to make it persistent, I decided to use Google's Firebase since it has a generous free tier. now the only thing left was to host some servers. Since the server proccessing needed for this app is very minimal, I decided to use vercel edge functions to host the serverless functions.",
  },
];
