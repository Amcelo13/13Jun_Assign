import React, { useState } from "react";
import "./Add.css";
import { useNavigate } from "react-router-dom";

function Add({ setVALUE, setListEnabled, setDATE, complete, delete1 }) {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [err, seterr] = useState(false);
  const [date, setDate] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    //optimized
    {
      e.target.value ? seterr(false) : seterr(true);
    }
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value && date) {
      setVALUE((list) => [...list, value]);
      setDATE((tareekh) => [...tareekh, date]);
      setListEnabled(true);
    }
    //Setting empty on no value
    setValue("");
  };
  const handleHOME = () => {
    navigate("/");
  };
  const navigatetoComplete = () => {
    navigate("/completed", { state: { state1: complete } });
  };
  const navigatetoDelete = () => {
    navigate("/delete", {state: { state2: delete1 }});
  };
  return (
    <div>
      <center style={{ paddingTop: "2rem" }}>TODO LIST</center>
      <center style={{ paddingTop: "2rem" }}>
        <button style={{ cursor: "pointer" }} onClick={handleHOME}>
          HOME
        </button>
      </center>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => handleChange(e)}
          placeholder="Enter the task to add"
        />
        <input
          required
          type="date"
          value={date}
          onChange={(e) => handleDate(e)}
        />
        <button type="submit">Add</button> <br />
        {err ? (
          <p style={{ color: "red", fontSize: "12px", position: "fixed" }}>
            Enter Something
          </p>
        ) : (
          ""
        )}
      </form>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <button
          style={{ marginRight: "1rem", cursor: "pointer" }}
          onClick={navigatetoComplete}
        >
          Completed
        </button>
        <button onClick={navigatetoDelete} style={{ cursor: "pointer" }}>
          Deleted
        </button>
      </div>
    </div>
  );
}

export default Add;
