import React from "react";
import EIMZO from "./e-imzo/Eimzo";

const Button = (props) => {
  return (
    <button
      className={`btn btn--${props.kind} CTA`}
      data-id={props.id}
      type={props.type}
      name={props.name}
      value={props.value}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <h4>{props.label}</h4>
    </button>
  );
};

export default Button;
