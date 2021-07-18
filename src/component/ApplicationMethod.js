import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Method.css";

const ApplicationMethod = () => {
  const [state, setState] = useState("");
  return (
    <div className="method">
      <h2>Add Customisation</h2>
      <h3>2. Choose application method</h3>
      <div>
        <div>
          <input
            type="radio"
            value="Embroidery"
            checked={state === "Embroidery"}
            onChange={() => setState("Embroidery")}
          />
          <label for="Embroidary">Embroidery(Stitching)</label>
        </div>
        <div>
          <input
            type="radio"
            value="Print"
            checked={state === "Print"}
            onChange={() => setState("Print")}
          />
          <label for="Print">Print</label>
        </div>
      </div>
      <Link to="/customisation/artwork" className="continue_method">
        Continue
      </Link>
      <Link to="/choose_position" className="backStep">
        Back a step
      </Link>
    </div>
  );
};

export default ApplicationMethod;
