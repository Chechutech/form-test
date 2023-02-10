import React from "react";
import "./FormStep1.css";
import cancelIcon from "../../assets/cancelIcon.png";
import okIcon from "../../assets/okIcon.png";

export default function FormStep1({ data, updateHandler }) {
  return (
    <div className="card-container">
      <h1>Avez-vous la fibre optique?</h1>
      <p>
        Cette information nous permet de mieux cerner votre bessoin in termes
        d'offre internet.
      </p>
      <div className="btn-confirmation">
        <label className="radio-container">
          <input
            type="radio"
            value="oui"
            name="confirmation"
            checked={data.confirmation === "oui"}
            onChange={(e) => updateHandler("confirmation", e.target.value)}
          />
          <img className="icon-ok" src={okIcon} />
          <p>Oui</p>
      
        </label>
        <label className="radio-container">
          <input
            type="radio"
            name="confirmation"
            value="non"
            checked={data.confirmation === "non"}
            onChange={(e) => updateHandler("confirmation", e.target.value)}
          />
          <img className="icon-cancel" src={cancelIcon} />
          <p>Non</p>
        </label>
      </div>
    </div>
  );
}
