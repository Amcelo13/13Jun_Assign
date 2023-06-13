import React from "react";
import "./List.css";
import { useNavigate } from "react-router-dom";
function List({ VALUE, isListEnabled, DATE, setComplete ,setDelete}) {
  const navigate = useNavigate();
  const mergedArray = VALUE.map((value, index) => {
    return {
      value: value,
      date: DATE[index],
    };
  });

  const handleComplete = (item) => {
      setComplete((old) => [...old, item]);
      console.log(item)
    };
    const handleDelete = (item) => {
        setDelete((oldq)=>[...oldq, item])
        // console.log(item)
    }

  return (
    <div style={{ marginTop: "2rem" }}>
      <p id="mus">Below are the items in TODO</p>
      {isListEnabled ? (
        <div className="container">
          {mergedArray.map((item, index) => (
            <div className="task" key={index}>
              <p className="value">{item.value}</p>

              <p className="date">{item.date}</p>

              <input type="checkBox" onClick={() => handleComplete(item)} />
              <button id="gh" onClick={()=>handleDelete(item)}>
                X
              </button>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default List;
