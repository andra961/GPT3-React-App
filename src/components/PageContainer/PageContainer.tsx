import React from "react";
import CustomHeader from "../CustomHeader";
import RequestForm from "../RequestForm";

import Response from "../CustomButton/Response";

import "./PageContainer.css";

export interface IResponse {
  prompt: string;
  response: string;
}

function PageContainer() {
  const fakeResponses: IResponse[] = [
    { prompt: "Hi", response: "hello" },
    {
      prompt: "Hi1",
      response:
        "È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal contenuto testuale se questo è leggibile. Lo scopo dell’utilizzo del Lorem Ipsum è che offre una normale distribuzione delle lettere (al contrario di quanto avviene se si utilizzano brevi frasi ripetute, ad esempio “testo qui”), apparendo come un normale blocco di testo leggibile. Molti software di impaginazione e di web design utilizzano Lorem Ipsum come testo modello. Molte versioni del testo sono state prodotte negli anni, a volte casualmente, a volte di proposito (ad esempio inserendo passaggi ironici).",
    },
    { prompt: "Hi2", response: "hello2" },
  ];

  return (
    <div className="pageContainer">
      <CustomHeader />
      <RequestForm />
      <div className="responseTitle">Responses</div>
      {fakeResponses.map((res, i) => (
        <Response response={res} key={i} />
      ))}
    </div>
  );
}

export default PageContainer;
