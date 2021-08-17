import React from "react";
function strike() {
  //isDone =true;
  document.getElementById("root").style.textDecoration = "line-through";
}
function unstrike() {
  // isDone=false;

  document.getElementById("root").style.textDecoration = null;
}
function DoList() {
  return (
    <div>
      <p>Buy milk</p>

      <button onClick={strike}>change to the strike threw </button>
      <button onClick={unstrike}>change</button>
    </div>
  );
}

export default DoList;
