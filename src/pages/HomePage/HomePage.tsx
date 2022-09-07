import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CustomButton from "../../components/CustomButton";
import CustomHeader from "../../components/CustomHeader";
import RequestForm from "../../components/RequestForm";
import Response from "../../components/Response";
import { RootState, useAppDispatch } from "../../redux/store";
import {
  fetchResponses,
  clearResponses,
  storeResponse,
} from "../../redux/responses";
import "./HomePage.css";

function HomePage() {
  const { responses } = useSelector((state: RootState) => state.responses);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchResponses());
  }, []);

  return (
    <div className="pageContainer">
      <CustomHeader title="Fun with AI" />
      <RequestForm />
      {responses.length > 0 && (
        <>
          <div className="responseTitle">Responses</div>
          {responses.map((res, i) => (
            <Response response={res} key={i} />
          ))}
          <div className="buttonWrapper">
            <CustomButton
              title="Clear"
              onClick={() => dispatch(clearResponses())}
            />
          </div>
        </>
      )}
      <div className="emptySpace" />
    </div>
  );
}

export default HomePage;
