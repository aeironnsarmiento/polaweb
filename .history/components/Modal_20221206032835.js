import React from "react";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);
  return <div>{open && <h1>I am a modal</h1>}</div>;
}

export default Modal;
