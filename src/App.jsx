import { useState, useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { LanguageObjUsedContext } from "../src/Provider/LanguageContext";
import { PageContext, SetPageContext } from "./Provider/PageContext";

import { ModalHello } from "./Components/Modals/ModalHello/ModalHello";

import "./App.css";
import "./css-library-utilities/library-import.css";
import phProfile from "./assets/Photo-Cartoon-prova2.png";
import imgLO from "./assets/LO-img-3.2.png";

function App() {
  const languageObjUsed = useContext(LanguageObjUsedContext);

  const pageSelected = useContext(PageContext);
  const setPageSelected = useContext(SetPageContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const classNameBaseBtn = "btn w-full p-12px  txt-center txt-decoration-none";

  const modalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (pageSelected !== "home") {
      setPageSelected("home");
    }
  }, [pageSelected]);

  return (
    <div className="home-main-direction-screen w-full flex-between flex-center gap-80px">
      <ModalHello isOpen={isModalOpen} onClose={modalClose} />
      <img src={imgLO} alt="" className="img-bg" />
      <div className="img-container" onClick={() => setIsModalOpen(true)}>
        <img src={phProfile} alt="" />
      </div>
      <div className="text-container flex-column flex-center gap-10px">
        <h1 className="f-bold">{languageObjUsed.myName.toUpperCase()}</h1>
        <h2 className="f-bold">{languageObjUsed.webDev}</h2>
        <h2 className="f-bold">{languageObjUsed.artist}</h2>
        <p className="f-size-1d5">{languageObjUsed.presentationTxt1}</p>
        <p className="f-size-1d5">{languageObjUsed.presentationTxt2}</p>
        <div className="w-full flex mt-30px btn-container">
          <NavLink
            to={"/dev"}
            className={`${classNameBaseBtn} radius-btn-code`}
          >
            {languageObjUsed.nameCode}
          </NavLink>
          <NavLink to={"/art"} className={`${classNameBaseBtn} radius-btn-art`}>
            {languageObjUsed.nameArt}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default App;
