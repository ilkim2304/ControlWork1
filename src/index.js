import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Arr from "./Arr.js";

const arr = ["1", "2", "3", "4"];

ReactDOM.render(
  <div>
    <div className="arr">
    {arr.map(val => <Arr txt={val} />)}
    </div>
  </div>,
  document.querySelector(".app")
);
