import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { StatusIcon } from "../common/Icons";
import cross from "../../assets/img/png/cross.png";
import StatusChat from "./StatusChat";
import StatusTab from "./StatusTab";
function Status() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button className="ml-8 cursor-pointer" onClick={openModal}>
        <StatusIcon />
      </button>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-dark    transition-opacity" />
            </Transition.Child>

            <span className="inline-block " aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full  min-h-screen  overflow-hidden   transition-all transform  ">
                <div className="flex h-screen w-full  bg-light_black">
                  <StatusTab />
                  <StatusChat />
                </div>
                <div>
                  <button
                    type="button"
                    className="inline-flex fixed top-4 right-2 justify-center px-4 py-2 text-sm font-medium text-white"
                    onClick={closeModal}
                  >
                    <img className="w-6" src={cross} alt="cross" />
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Status;
