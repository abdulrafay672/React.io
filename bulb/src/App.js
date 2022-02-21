import React, { useState } from "react"
import './App.css';
import bluboff from "./offblub.jpg";
import blubon from "./blubon.jpg"


const App = () => {
  const[toggle,setToggle] = useState(false);

  const toggler = ()=>{
    toggle ? setToggle(false) : setToggle(true);
  }   

  return (
      <div className="App">
      <button onClick={toggler}>
      {toggle ? <span className="on">On</span>:<span className="off">OFF</span>}

      </button>
      {toggle ? <span><img src={blubon}/></span>:<span><img src={bluboff}/></span>}


    </div>
  );
}

export default App;
