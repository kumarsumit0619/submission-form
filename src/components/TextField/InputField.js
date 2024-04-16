import React from "react";

function InputField(props) {
  return (
    <div className={props.divClass}>
      <label for={props.forField}>{props.labelText}</label>
      <input type={props.inputType} className="" id={props.IdName} placeholder={props.placeHolderText} />
    </div>
  );
};

export default InputField;
