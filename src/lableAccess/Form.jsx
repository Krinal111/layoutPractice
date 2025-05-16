import React from "react";
import CustomInput from "./CustomInput";

function Form() {
  return (
    <div style={{ margin: "100px" }}>
      <h5>
        Scenario 4: Accessibility Labels Q: You’re building a form where{" "}
        {"<label>"} must reference an input’s id. On SSR, your app throws
        hydration warnings due to mismatched IDs.
      </h5>
      <br />
      <br />
      <CustomInput label="First Name" />
      <CustomInput label="Last Name" />
    </div>
  );
}

export default Form;
