import React from "react";
import { IResponse } from "../../redux/responses";

import "./Response.css";

const Row = ({ name, content }: { name: string; content: string }) => {
  return (
    <div className="row">
      <div className="nameText">{name}:</div>
      <div className="contentText">{content}</div>
    </div>
  );
};

function Response({ response: { prompt, response } }: { response: IResponse }) {
  return (
    <div className="responseContainer">
      <Row name="Prompt" content={prompt} />
      <Row name="Response" content={response} />
    </div>
  );
}

export default Response;
