import { Fade, Slide } from "react-reveal";
import { GrClose } from "react-icons/gr";

export default function Modal({ open, images, title, onClose }) {
  return (
    <div className={`fixed min-h-screen w-full ${open ? "z-100" : "-z-1"}`}>
      <Fade when={open}>
        <div className="p-10  min-h-screen flex justify-center items-center">
          <div
            className="flex justify-center items-center bg-sky-100 p-10 rounded-xl relative"
            style={{ minHeight: "80vh" }}
          >
            <GrClose
              className="absolute top-10 right-10"
              size={30}
              onClick={onClose}
            />
            <Slide bottom cascade duration={1000} when={open}>
              <div className="flex flex-wrap justify-center items-center">
                <img
                  src={require("../images/GameOfFocus.png")}
                  alt="game of focus"
                  className="sm:max-w-sm  lg:max-w-lg rounded-lg shadow-lg mx-4 my-2"
                />
                <img
                  src={require("../images/GameOfFocus1.png")}
                  alt="game of focus"
                  className="sm:max-w-sm  lg:max-w-lg rounded-lg shadow-lg mx-4 my-2"
                />
                <img
                  src={require("../images/GameOfFocus2.png")}
                  alt="game of focus"
                  className="sm:max-w-sm  lg:max-w-lg rounded-lg shadow-lg mx-4 my-2"
                />
              </div>
            </Slide>
          </div>
        </div>
      </Fade>
    </div>
  );
}
