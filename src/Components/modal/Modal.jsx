import React from "react";
import ModalPortal from "./ModalPortal";

export default function Modal({ children, closeModal, visibility }) {
  return (
    <>
      {visibility ? (
        <ModalPortal>
          <div onClick={closeModal} className="modal">
            <div onClick={(e) => e.stopPropagation()}>{children}</div>
          </div>
        </ModalPortal>
      ) : null}
    </>
  );
}
