import React from "react";
import Add from "../components/Add";
import CompleteList from "../components/CompleteList";
import { useLocation } from "react-router-dom";

function Completed() {
  const { state } = useLocation();
  const state1 = state ? state.state1 : [];
 
  return (
    <div>
      <Add />
      <CompleteList state1={state1} />
    </div>
  );
}

export default Completed;
