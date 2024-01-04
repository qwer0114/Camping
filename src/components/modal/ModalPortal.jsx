import React from "react";
import ReactDom from "react-dom";

export default function ModalPortal({ children }) {
  const modalRoot = document.getElementById("modal-root");

  return ReactDom.createPortal(children, modalRoot);
}
