import React from "react";

import "./comments-style.css";
import { Cancel } from "@material-ui/icons";

export default function Modal({ children, CloseAction }) {
  return (
    <>
      <div className="overlay-style">
        <div className="modal-style">
          <div className="closeIcon" onClick={CloseAction}>
            <Cancel style={{ fontSize: "30px" }} />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
