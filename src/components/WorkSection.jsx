import React from "react";

export default function WorkSection(props) {
  return (
    <article className="text-white flex flex-col items-center p-5 sm:p-10 py-20">
      <h1 className=" font-semibold text-2xl">{props.title}</h1>
      <p className="text-systemGray text-xl pt-5 max-w-[800px]">
        {props.description}
      </p>
    </article>
  );
}
