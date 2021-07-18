import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Method.css";

const ArtWork = () => {
  const [state, setState] = useState("");
  return (
    <div className="method">
      <h2>Add Customisation</h2>
      <h3>3. Choose artwork</h3>
      <p>Add your logo/text</p>
      <div>
        <div>
          <input
            type="radio"
            value="new"
            checked={state === "new"}
            onChange={() => setState("new")}
          />
          <label htmlFor="new">Add a new customisation</label>
        </div>
      </div>
      <Link to="/customisation/type" className="continue_method">
        Continue
      </Link>
      <Link to="/customisation/method" className="backStep">
        Back a step
      </Link>
    </div>
  );
};

export default ArtWork;
