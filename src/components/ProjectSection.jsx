import React from "react";
export default function ProjectSection(props) {
  return (
    <article className="text-white flex flex-col items-center p-10 pt-20">
      <div className="flex flex-1 flex-wrap justify-center">
        <section className="p-10 max-w-[800px] lg:max-w-[450px] md:p-0 md:pr-10">
          <h1 className=" font-semibold text-2xl">{props.title}</h1>
          <p className="text-systemGray text-xl pt-5">{props.description}</p>
        </section>
        <section className="">
          <a href="www.scholalify.com" target="_blank" rel="noreferrer">
            <img
              src={props.imageUrl}
              className="md:max-w-[500px]  rounded-2xl p-1 border-4 border-systemGray hover:border-white cursor-pointer"
              alt={props.title}
            />
          </a>
        </section>
      </div>
      <section className="bg-systemGray6 px-10 py-5 max-w-[800px] rounded-xl mt-10">
        <h2 className="font-semibold text-lg">{props.title2}</h2>
        <p className=" text-systemGray pt-2">{props.description2}</p>
      </section>
    </article>
  );
}
