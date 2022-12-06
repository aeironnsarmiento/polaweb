import React from "react";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import { Dialog, Transition } from "@headlessui/react";

function Modal() {
  const [open, setOpen] = useRecoilState(modalState);
  
  return (
  <Transition.Root show={open} as={Fragment}>
    <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={setOpen}>
        </Transition.Root>)

}  

export default Modal;
