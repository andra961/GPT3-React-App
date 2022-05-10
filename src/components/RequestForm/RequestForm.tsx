import React, { useState } from "react";
import { useAppDispatch } from "../../redux/store";
import CustomButton from "../CustomButton";
import { storeResponse } from "../../redux/responses";

import "./RequestForm.css";
import LoadingSpinner from "../LoadingSpinner";
import sendCompletionRequest from "../../services/GPT3completion";

function RequestForm() {
  const [requestBody, setRequestBody] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const processRequest = async () => {
    //server request
    setLoading(true);
    //await new Promise((r) => setTimeout(r, 2000));
    const answer = await sendCompletionRequest(requestBody);
    setLoading(false);
    dispatch(storeResponse({ prompt: requestBody, response: answer }));
  };

  return (
    <div className="formContainer">
      {!loading ? (
        <>
          <div className="description">Enter prompt</div>
          <textarea
            value={requestBody}
            onChange={(e) => setRequestBody(e.target.value)}
          />
          <div className="buttonWrapper">
            <CustomButton title="Submit" onClick={processRequest} />
          </div>
        </>
      ) : (
        <div style={{ alignSelf: "center" }}>
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
}

export default RequestForm;
