import React from "react";
import "./Hero.css";
import FormStep1 from "../FormStep1/FormStep1";
import FormStep2 from "../FormStep2/FormStep2";
import Confirmation from "../Confirmation/Confirmation";
import { useState } from "react";

const userForm = {
  confirmation: "",
  fiberChoice: "",
};
export default function Hero() {
  const [page, setPage] = useState(0);
  const [data, setData] = useState(userForm);

  const updateHandler = (key, value) => {
    setData((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const FormDisplay = () => {
    if (page === 0) {
      return <FormStep1 data={data} updateHandler={updateHandler} />;
    } else if (page === 1) {
      return <FormStep2 data={data} updateHandler={updateHandler} />;
    } else {
      return <Confirmation />;
    }
  };

  return (
    <div className="main-container">
      <div className="hero-container"></div>
      {/* ======== FORM ========== */}
      <div className="card-hero">
        <button
          className="btn-back"
          disabled={page == 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          <i class="ri-arrow-left-line"></i>Retour
        </button>

        <div className="form">
          <div className="progress-bar">
            <div
              style={{
                width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
              }}
            ></div>
          </div>
          <div className="form-container">
            <div>{FormDisplay()}</div>
            {page < 2 ? (
              <button
                className="btn-next"
                onClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
              >
                {page >= 1 ? "Soumettre" : "Siuvantt"}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
