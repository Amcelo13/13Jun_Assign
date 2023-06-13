import React from "react";
import "./List.css";
import {  useLocation } from "react-router-dom";

function DeletedList(props) {
  const { state2 } = props;
  console.log(state2);

  return (
    <div style={{ marginTop: "2rem" }}>
      <p id="mus">Below are the items Deleted</p>

      <div className="container">
        {(state2 ?? []).map((item, index) => {
          return (
            <div className="task" key={index}>
              <p className="value">{item.value}</p>
              <p className="date">{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DeletedList;
