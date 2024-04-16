import React from "react";

function RadioInput(props) {
  return (
    <>
      <input
        type={props.inputType}
        id={props.IdName}
        className=""
        for={props.forField}
        name="gender"
      />
      <span>{props.spanText}</span>
    </>
  );
}

export default RadioInput;
