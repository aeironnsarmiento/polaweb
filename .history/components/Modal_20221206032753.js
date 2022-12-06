import React from "react";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);
  return <div>Modal</div>;
}

export default Modal;
