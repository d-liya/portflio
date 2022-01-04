import Box from "./Box";
import { useSpring, animated } from "react-spring";

export default function About() {
  return (
    <animated.div className="flex p-10 flex-1 justify-center items-center">
      <div>
        <p className="font-medium py-3">Hi, I am Dilum {" 👋 "}</p>
        <p className="text-white">
          I am third year computer science student who is currently looking for
          an internship. I am interested, and have some experience in frontend,
          backend and mobile develpoment. I am also interested in reinforcement
          learning and hoping to get into data science world as well. I am
          really trilled that you visted my website, scroll down to see some of
          my cool projects.
        </p>
      </div>
    </animated.div>
  );
}
