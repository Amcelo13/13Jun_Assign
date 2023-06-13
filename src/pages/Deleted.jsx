import React from "react";
import Add from "../components/Add";
import DeletedList from "../components/DeletedList";
import { useLocation } from "react-router-dom";

function Deleted() {
  const {state} = useLocation()
  const state2 = state ? state.state2 : [];
  return (
    <div>
      <Add />
      <DeletedList  state2={state2} />
    </div>
  );
}

export default Deleted;
