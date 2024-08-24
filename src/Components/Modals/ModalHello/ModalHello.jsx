import { React, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import "./modal-hello.css";
import "./../../../css-library-utilities/library-import.css";
import "./../../Layout/defaultLayout.css";

import { LanguageObjUsedContext } from "../../../Provider/LanguageContext";

import imgHello from "./../../../assets/img-hello.jpg";

export function ModalHello({ isOpen, onClose }) {
  const languageObjUsed = useContext(LanguageObjUsedContext);

  const [displayedLetters, setDisplayedLetters] = useState("");
  const modalHelloLabel = languageObjUsed.modalHelloLabel;

  useEffect(() => {
    let currentIndex = 0;

    setDisplayedLetters("");

    const intervalId = setInterval(() => {
      if (currentIndex < modalHelloLabel.length) {
        const nextLetter = modalHelloLabel[currentIndex];

        setDisplayedLetters((prev) => prev + nextLetter);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      event.key === "Escape" && onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed backd-blur-5px top-0 w-full h-full bg-primary-very-dark-0d5"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute-center shadow-10xy-black8 flex-modal-hello-screen gap-20px main-w-screen radius-8px p-10px p-b-20px bg-secondary-very-light txt-c-primary-medium"
          >
            <button
              onClick={onClose}
              className="reset-default absolute-tr-10px l-height-1d5 f-size-1d5 txt-c-primary-medium f-bold opacity-h-6"
            >
              X
            </button>
            <img
              src={imgHello}
              alt=""
              className="relative w-40p shadow-rb-p-light radius-5px border3-p-sat-l"
            />
            <div className="display-inline flex-center w-full f-size-1d5">
              <p className="txt-center f-bold">
                {displayedLetters.split("").map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  );
}

export default ModalHello;
