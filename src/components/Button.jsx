import React from "react";

export default function Button(props) {
  return (
    <button
      className={`hover:bg-systemGray5 text-white px-5 py-2 rounded-lg ${[
        props.isPressed ? "bg-systemGray5" : "",
      ]}`}
      {...props}
    >
      {props.children}
    </button>
  );
}
