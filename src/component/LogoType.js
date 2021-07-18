import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Method.css";

const LogoType = () => {
  const [state, setState] = useState("");
  return (
    <div className="method">
      <h2>Add Customisation</h2>
      <h3>4. Choose application type</h3>
      <div>
        <div>
          <input
            type="radio"
            value="logo"
            checked={state === "logo"}
            onChange={() => setState("logo")}
          />
          <label for="new">Logo</label>
        </div>
        <div>
          <input
            type="radio"
            value="text"
            checked={state === "text"}
            onChange={() => setState("text")}
          />
          <label for="new">Text</label>
        </div>
      </div>
      <Link to="/customisation/configure" className="continue_method">
        Continue
      </Link>
      <Link to="/customisation/artwork" className="backStep">
        Back a step
      </Link>
    </div>
  );
};

export default LogoType;
