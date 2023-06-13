import React from "react";
import "./List.css";
import { useNavigate, useLocation } from "react-router-dom";

function CompleteList(props) {
  const { state1 } = props;

  const navigate = useNavigate();
  console.log(state1);
  return (
    <div style={{ marginTop: "2rem" }}>
      <p id="mus">Below are the items Completed</p>

      <div className="container">
        {(state1 ?? []).map((item, index) => {
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

export default CompleteList;
