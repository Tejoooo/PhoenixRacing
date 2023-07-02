import React from "react";
import "./alumni.css";

function Connect({title,btnName}) {
  return (
    <div className="alumni-connect">
      <h2>{title}</h2>
      <form action="#">
        <button type="submit">{btnName}</button>
      </form>
    </div>
  );
}
export default Connect;
