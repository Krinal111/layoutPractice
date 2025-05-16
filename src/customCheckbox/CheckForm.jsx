import React from "react";
import CustomCheckBox from "./CustomCheckBox";

function CheckForm() {
  return (
    <div style={{ paddingLeft: "50px", marginTop: "100px" }}>
      {Array.from({ length: 5 }).map((_, index) => (
        <CustomCheckBox label={`lable ${index + 1}`} key={index} />
      ))}
    </div>
  );
}

export default CheckForm;
