import { useCallback, useRef } from "react";
import Button from "./components/Button";
import ScrollDOwnAnimation from "./images/scroll-down.json";
import { useLottie } from "lottie-react";
import ProjectSection from "./components/ProjectSection";
import { projects } from "./data";
import WorkSection from "./components/WorkSection";
import ContactAnimation from "./images/contact.json";
function App() {
  const { View: ScrollDOwnView } = useLottie({
    animationData: ScrollDOwnAnimation,
    loop: true,
  });
  const { View: ContactView } = useLottie({
    animationData: ContactAnimation,
    loop: true,
  });
  const homeRef = useRef();
  const projecrRef = useRef();
  const workRef = useRef();

  const naviagteTo = useCallback(
    (ref) => () => {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
    []
  );

  return (
    <>
      <div className="overflow-hidden">
        <header className="flex w-full justify-center sm:justify-between items-center p-5 px-10 fixed bg-black">
          <h1 className="font-semibold text-white ">DILUM LIYANAGE</h1>
          {/* <animated.a
            style={_styleIcon}
            href="https://github.com/d-liya"
            className="cursor-pointer fixed right-5 top-5 text-sky-500"
            target="_blank"
            rel="noreferrer"
            aria-label="Github profile"
          >
            <AiFillGithub size={25} />
          </animated.a> */}
          <div className="hidden sm:block">
            <Button onClick={naviagteTo(homeRef)}>Home</Button>
            <Button onClick={naviagteTo(projecrRef)}>Projects</Button>
            <Button onClick={naviagteTo(workRef)}>Work</Button>
          </div>
        </header>
        <main>
          <section
            ref={homeRef}
            className="flex min-h-screen justify-center bg-black text-white items-center flex-col text-center"
          >
            <h1 className="font-semibold text-6xl py-5 p-4">
              Hello friendly human <br />I am Dilum
            </h1>
            <h2 className="text-systemGray p-4 text-lg">
              I am a software engineer who loves to build things that live on
              the internet. <br /> Scroll down to see a glipse of my work.
            </h2>
            <div>{ScrollDOwnView}</div>
          </section>
          <section ref={projecrRef}>
            <div className="p-4 pt-10 text-center">
              <h3 className="font-semibold text-white text-6xl py-5 ">
                Projects
              </h3>
              <p className="text-systemGray ">
                I have worked on a variety of projects from web apps to mobile
                apps and here are a my favorite ones.
              </p>
            </div>
            {projects.map((project) => (
              <ProjectSection {...project} key={project.title} />
            ))}
          </section>
          <section ref={workRef}>
            <div className="p-4  pt-20 text-center">
              <h4 className="font-semibold text-white text-6xl py-5 ">Work</h4>
              <p className="text-systemGray ">
                Here is my most recent work experiences.
              </p>
              <WorkSection
                title="Software Engineer | Experity Inc"
                description="I have been working as a software engineer at Experity Inc. for the past 3 years. My work involve around building highly scalable and maintainable web application using Java, Spring Boot, React, Redux, Typescript, and many more. As the company maintains a lot of legacy code, I also have experience in maintaining and refactoring legacy code written in older web frameworks such as Struts. During my work at Experity, I was able to write client libraries that help increase the productivity of the team by 30%."
              />
            </div>
          </section>
          <section>
            <div className="p-4 pt-20 flex flex-col items-center justify-center">
              <h4 className="font-semibold text-white text-6xl py-5 ">
                Contact
              </h4>{" "}
              <p className="text-systemGray max-w-[500px] text-center">
                I am currently looking for new opportunities. If you have any
                questions or just want to say hi, feel free to send me an email.
              </p>
              <div className="flex justify-center flex-wrap items-center">
                <div className="max-w-[500px]">{ContactView}</div>
                <div className="animate-bounce">
                  <a
                    className="cursor-pointer text-white bg-systemGray6 px-10 rounded py-3 hover:bg-systemGray5 "
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:dilum14@gmail.com"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="md:px-10 text-systemGray ">
          <ul
            className="flex justify-center items-center flex-col md:flex-row "
            style={{ height: 100 }}
          >
            <li>
              <a
                href="https://github.com/d-liya"
                className="px-2 cursor-pointer hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dilum-liyanage"
                className="px-2 cursor-pointer hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="px-2 cursor-pointer hover:text-white"
                target="_blank"
                rel="noreferrer"
                href="mailto:dilum14@gmail.com"
              >
                Email
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default App;
