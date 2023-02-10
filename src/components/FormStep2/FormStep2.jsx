import React from "react";
import "./FormStep2.css";
import cancelIcon from "../../assets/cancelIcon.png";
import okIcon from "../../assets/okIcon.png";

export default function FormStep2({ data, updateHandler }) {
  return (
    <div className="card-container">
      <h1>Plus d'un chez votre opérateur?</h1>
      <div className="btn-confirmation">
        <label className="radio-container2">
          <input
            type="radio"
            value="oui"
            name="fiberChoice"
            checked={data.fiberChoice === "oui"}
            onChange={(e) => updateHandler("fiberChoice", e.target.value)}
          />
          <img className="icon-ok" src={okIcon} />
          <p>Oui, plus d'un on</p>
        </label>
        <label className="radio-container2">
          <input
            type="radio"
            value="non1"
            name="fiberChoice"
            checked={data.fiberChoice === "non1"}
            onChange={(e) => updateHandler("fiberChoice", e.target.value)}
          />
          <img className="icon-cancel" src={cancelIcon} />
          <p>Non, entre 9 et 12 mais</p>
        </label>
        <label className="radio-container2">
          <input
            type="radio"
            value="non2"
            name="fiberChoice"
            checked={data.fiberChoice === "non2"}
            onChange={(e) => updateHandler("fiberChoice", e.target.value)}
          />
          <img className="icon-cancel" src={cancelIcon} />
          <p>Non, moins de 9 mais</p>
        </label>
      </div>
    </div>
  );
}
