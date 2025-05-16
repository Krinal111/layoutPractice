import React from "react";
import { useId } from "react";

function CustomInput({ label }) {
  const id = useId();
  console.log(id);
  return (
    <div>
      <label htmlFor={id}>{label} : </label>
      <input type="text" id={id} />
      <br />
      <br />
    </div>
  );
}

export default CustomInput;
