import React, { useState } from "react";
import CustomButton from "../CustomButton";

import "./RequestForm.css";

function RequestForm() {
  const [requestBody, setRequestBody] = useState<string>("");
  return (
    <div className="formContainer">
      <div className="description">Enter prompt</div>
      <textarea></textarea>
      <div className="buttonWrapper">
        <CustomButton title="Submit" onClick={() => console.log(1)} />
      </div>
    </div>
  );
}

export default RequestForm;
