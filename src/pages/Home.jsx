import React, { useState } from "react";
import Add from "../components/Add";
import List from "../components/List";
function Home() {
  const [VALUE, setVALUE] = useState([]);
  const [isListEnabled, setListEnabled] = useState(false);
  const [DATE, setDATE] = useState([])
  const [complete, setComplete] = useState([])
  const [delete1, setDelete] = useState([])

  return (
    <div>
       
      <Add setVALUE={setVALUE} setListEnabled={setListEnabled} setDATE={setDATE} complete={complete} delete1={delete1}/>
      <List VALUE={VALUE} isListEnabled={isListEnabled} DATE ={DATE} setComplete={setComplete} setDelete={setDelete}/>
    </div>
  );
}

export default Home;
