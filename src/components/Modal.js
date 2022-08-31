import React from "react";
import ReactDOM from "react-dom";
import close from "../images/icon-close.svg";

const Modal = ({ toggle }) => {
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal__header">
          <h1>Rules</h1>
          <button onClick={toggle}>
            <img src={close} alt="Close" srcset="" />
          </button>
        </div>
        <p><center>1)Paper beats Rock</center></p>
        <p><center>2)Rock beats Scissors</center></p>
        <p><center>3)Scissors beats Paper</center></p>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
