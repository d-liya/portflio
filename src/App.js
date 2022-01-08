import { AiFillGithub } from "react-icons/ai";
import { useSpring, animated } from "react-spring";
import { useEffect, useRef, useState } from "react";
// { stiffness: 300, damping: 50 }
import { ResizeObserver } from "@juggle/resize-observer";
import useMeasure from "react-use-measure";
import Skills from "./components/Skills";
import skills, { academicProjects, projects } from "./data";
import Project from "./components/Project.jsx";
import { Slide } from "react-reveal";
import GameOfFocus from "./images/GameOfFocus.png";
import Modal from "./components/Modal";
import Image from "./components/Image";
function App() {
  const [open, setOpen] = useState(false);
  const [mainRef, bounds] = useMeasure({ polyfill: ResizeObserver });
  const scroller = useRef();
  const [secondRef, secondBounds] = useMeasure({ polyfill: ResizeObserver });
  const [scrollY, setScrollY] = useState();

  const _texttranslateX = useSpring({
    transform: !open ? "translate(0px,0px)" : "translate(-100px,-50px)",
  });
  const _translateY = useSpring({
    transform: !open ? "translateX(0px)" : `translateX(${bounds.width / 2}px)`,
  });
  const _translateYMain = useSpring({
    opacity: !open ? 0 : 1,
    bottom: 40,
  });
  const _styleIcon = useSpring({
    color: scrollY > bounds.height + 280 ? "" : "black",
  });

  useEffect(() => {
    function updateScrollPosition(evt) {
      const _scrollY = evt.pageY - evt.y;
      setScrollY(_scrollY);
      if (_scrollY <= 0) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    }

    if (scroller && scroller.current) {
      const node = scroller.current;
      node.addEventListener("wheel", updateScrollPosition, false);
      node.addEventListener("touchmove", updateScrollPosition, false);
      return function cleanup() {
        node.removeEventListener("wheel", updateScrollPosition, false);
        node.removeEventListener("touchmove", updateScrollPosition, false);
      };
    }
  }, []);

  return (
    <>
      <div ref={scroller} className="overflow-hidden">
        <header>
          <h1 className="font-semibold text-white z-10 absolute left-5 top-5">
            DILUM LIYANAGE
          </h1>
          <animated.a
            style={_styleIcon}
            href="https://github.com/d-liya"
            className="cursor-pointer fixed right-5 top-5 text-sky-500"
            target="_blank"
            rel="noreferrer"
            aria-label="Github profile"
          >
            <AiFillGithub size={25} />
          </animated.a>
        </header>
        <main>
          <section
            className="flex min-h-screen w-full font-sans fixed -z-10"
            style={{
              WebkitBackfaceVisibility: "hidden",
            }}
            ref={mainRef}
          >
            <div className="flex-1 bg-sky-500 relative">
              <div className="flex flex-1 bg-sky-500 absolute w-full h-full pl-10 pb-10">
                <animated.div
                  className="flex p-5 md:p-10 flex-1 justify-end flex-col max-w-lg z-10 fixed"
                  style={_translateYMain}
                >
                  <Slide bottom cascade when={open} duration={500}>
                    <div>
                      <p className="text-slate-900 font-bold text-lg ">
                        Hi, I am Dilum 👋
                      </p>
                      <p className="font-bold ">
                        I am third year computer science student who is
                        currently looking for an internship.
                      </p>
                      <p className="font-bold">
                        I am interested, and have some experience in frontend,
                        backend and mobile develpoment.
                      </p>
                      <p className="font-bold">
                        I am really excited that you visted my website, scroll
                        down to see some of my cool projects.✌️
                      </p>
                    </div>
                  </Slide>
                </animated.div>
              </div>
              <animated.div
                className="flex flex-1 bg-sky-500 absolute w-full h-full"
                style={_translateY}
              >
                <animated.h2
                  style={_texttranslateX}
                  className="font-black text-8xl  md:text-9xl bottom-1/2 -right-24 absolute"
                >
                  HE
                  <br />
                  LLO
                </animated.h2>
              </animated.div>
            </div>
            <div className="flex-1 bg-sky-50"></div>
          </section>
          <div className="w-full" style={{ height: bounds.height + 280 }} />
          <section
            className="bg-sky-50 flex md:p-20 lg:flex-nowrap flex-wrap"
            ref={secondRef}
          >
            <div className="p-10 pb-5 min-h-screen">
              <h1 className="font-black text-6xl  md:text-8xl text-sky-500 pb-20">
                <Slide bottom cascade duration={2000}>
                  <h3 className="flex flex-col">
                    <span>STA</span>
                    <span>CK &</span>
                    <span>EXPE</span>
                    <span>RIENCE</span>
                  </h3>
                </Slide>
              </h1>
              <Slide bottom cascade duration={500}>
                <div className="max-w-lg">
                  <h4 className="font-black text-lg ">
                    Junior Software Engineer <br /> @ Experity Inc.
                  </h4>
                  <ol className="list-disc pt-5 pl-5">
                    <li>
                      Built REST full APIs to integrate a React based client
                      side with a Swing boot (Java) server side.
                    </li>
                    <li>Created client facing React components.</li>
                    <li>
                      Designed relational database models to store data and
                      writing SQL/HQL queries to access it.
                    </li>
                    <li>
                      Maintained web applications written in older frameworks
                      such as Struts 2.0 and GWT.
                    </li>
                  </ol>
                </div>
              </Slide>
            </div>

            <Slide right>
              <div className="flex bg-slate-900 lg:bg-sky-50 w-full lg:max-w-xl lg:justify-center lg:items-center">
                <animated.div className="p-5 grid grid-cols-1 md:grid-cols-2  ">
                  {skills.map((skill) => (
                    <Skills
                      key={skill.title}
                      title={skill.title}
                      skills={skill.skills}
                    />
                  ))}
                </animated.div>
              </div>
            </Slide>
          </section>
          <section className={` bg-sky-50 p-10`}>
            <div className="flex flex-col md:ml-32 mt-5">
              <h1 className="font-black text-6xl  md:text-8xl text-sky-500 pb-20">
                <Slide bottom cascade duration={2000}>
                  <p className="flex flex-col">
                    <span>PRO</span>
                    <span>JECTS</span>
                  </p>
                </Slide>
              </h1>
              <div className="flex flex-wrap ">
                {projects.map((project) => (
                  <Project key={project.title} {...project} />
                ))}
              </div>
            </div>
          </section>
        </main>
        <footer className="md:px-10 bg-sky-50">
          <Slide bottom>
            <ul
              className=" bg-sky-500 flex justify-center items-center flex-col md:flex-row "
              style={{ height: 100 }}
            >
              <li>
                <a
                  href="https://www.linkedin.com/in/dilum-liyanage-947787197"
                  className="px-2 text-white font-bold hover:text-sky-100 cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="assets/dilum-liyanage-resume.pdf"
                  className="px-2 text-white font-bold hover:text-sky-100 cursor-pointer"
                  download
                >
                  Download My Resume
                </a>
              </li>
              <li>
                <a
                  className="px-2 text-white font-bold hover:text-sky-100 cursor-pointer"
                  href="mailto:ddelwakkadal@mun.ca"
                >
                  Email
                </a>
              </li>
            </ul>
          </Slide>
        </footer>
      </div>
    </>
  );
}

export default App;
