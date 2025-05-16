import React from "react";
import { useId } from "react";

function CustomCheckBox({ label }) {
  const id = useId();
  console.log(id);
  return (
    <div>
      <label htmlFor={id}>{label} : </label>
      <input type="checkbox" id={id} />
      <br />
      <br />
    </div>
  );
}

export default CustomCheckBox;
