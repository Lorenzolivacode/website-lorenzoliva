import { React, useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

import {
  SetLanguageContext,
  LanguageObjUsedContext,
} from "./../../Provider/LanguageContext";
import { PageContext } from "../../Provider/PageContext";

import "./../../css-library-utilities/library-import.css";
import "./defaultLayout.css";

import { socialNetwork } from "./../../data/socialNetwork";

import icoCode from "./../../assets/nav-icon/icon-code.png";
import icoHome from "./../../assets/nav-icon/icon-home.png";
import icoArt from "./../../assets/nav-icon/icon-art.png";
import itFlag from "./../../assets/nav-icon/flag-ico/IT-Flag.png";
import enFlag from "./../../assets/nav-icon/flag-ico/GB-Flag.png";
import ModalHamburger from "../ModalHamburger";
export function DefaultLayout() {
  const setLanguage = useContext(SetLanguageContext);
  const languageObjUsed = useContext(LanguageObjUsedContext);
  const pageSelected = useContext(PageContext);

  const navSections = [
    {
      name: languageObjUsed.nameCode,
      path: "/dev",
      icon: icoCode,
      id: "s-C",
    },
    {
      name: languageObjUsed.nameHome,
      path: "/",
      icon: icoHome,
      id: "s-H",
    },
    {
      name: languageObjUsed.nameArt,
      path: "/art",
      icon: icoArt,
      id: "s-A",
    },
  ];

  const pageHomeDev = pageSelected === "home" || pageSelected === "dev";
  const pageHomeArt = pageSelected === "home" || pageSelected === "art";
  const pageArt = pageSelected === "art";

  const [modalOn, setModalOn] = useState(false);

  const handleHamMenu = () => {
    console.log("click");
    console.log("modalOn", modalOn);
    modalOn ? setModalOn(false) : setModalOn(true);
  };

  const birthDate = "1992-08-13";

  function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();

    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  }

  const age = calculateAge(birthDate);

  const handleLanguageChange = (e) => {
    const languageSelected = e.target.value;
    setLanguage(languageSelected);
    console.log("changed: ", languageSelected);
  };

  return (
    <>
      <header className="flex-around flex-cross-center p-12px p-fixed-top w-full bg-primary-very-light shadow-light-minus10">
        {/* <button className="ham-menu" onClick={handleHamMenu}>
          <div className="ham__row"></div>
          <div className="ham__row"></div>
          <div className="ham__row"></div>
        </button> */}
        {modalOn && <ModalHamburger />}
        <ul className="section-list flex-center gap-30px">
          {navSections.map((section) => {
            return (
              <li key={section.id} className="list-item" title={section.name}>
                <NavLink
                  to={section.path}
                  className={({ isActive }) => {
                    return isActive ? "item-active" : "";
                  }}
                >
                  <img
                    src={section.icon}
                    alt={section.name}
                    className="w-30px"
                  />
                </NavLink>
              </li>
            );
          })}
        </ul>
        <label htmlFor="selectLanguage" className="diplay-none">
          {languageObjUsed.selectedLabel}
        </label>
        <select
          id="selectLanguage"
          name={languageObjUsed.languageLabel}
          title={languageObjUsed.selectedLabel}
          onChange={handleLanguageChange}
          className="bg-primary-very-light shadow-p-very-dark border-none radius-5px p-4px"
        >
          <option value="it" title={languageObjUsed.italianLabel}>
            {languageObjUsed.flagIt}
            {/*
            <img
              src={itFlag}
              alt={languageObjUsed.italianLabel}
              className="w-16px"
            />
            */}
          </option>
          <option value="en" title={languageObjUsed.englishLabel}>
            {languageObjUsed.flagEn}
          </option>
        </select>
      </header>
      <main className="main-w-screen flex-center m-auto mb-100px mt-100px  min-h-screen">
        <Outlet />
      </main>
      <footer className="flex-column gap-50px w-full bg-primary-very-light p-20px txt-c-primary-dark">
        <section
          id="section-contacts"
          className="sections-footer-direction-screen flex-around"
        >
          <div className="section-footer">
            <h3 className="f-bold">{languageObjUsed.contactsLabel}</h3>
            <ul>
              <li>
                {languageObjUsed.phoneLabel}
                {languageObjUsed.phoneNumber}
              </li>
              {pageHomeArt && (
                <li>
                  {languageObjUsed.mailArtLabel}
                  {languageObjUsed.mailArt}
                </li>
              )}
              {pageHomeDev && (
                <li>
                  {languageObjUsed.mailDevLabel}
                  {languageObjUsed.mailDev}
                </li>
              )}
              {pageArt && (
                <li>
                  <ul className="flex-center gap-20px p-10px p-b-0">
                    {socialNetwork.map((socialNetwork) => {
                      return (
                        <li key={socialNetwork.id}>
                          <a
                            href={socialNetwork.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={socialNetwork.icon}
                              alt={socialNetwork.label}
                              title={socialNetwork.label}
                              className="w-40px"
                            />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              )}
            </ul>
          </div>

          {/* <div className="section-footer">
            <h3 className="f-bold">Informazioni personali</h3>
            <ul>
              <li>Luogo: Palermo</li>
              <li>
                <p>Età: {age}</p>
              </li>
            </ul>
          </div> */}

          {/* <form className="section-footer">
            <h3 className="f-bold">{languageObjUsed.mailFormLabel}</h3>
            <input
              type="email"
              placeholder={languageObjUsed.emailPlaceholder}
              className="border-br-1-p-m-l radius-8px p-4px bg-primary-very-light txt-c-primary-dark"
            />
            <textarea
              name=""
              id=""
              placeholder={languageObjUsed.txtAreaPlaceholder}
              className="border-br-1-p-m-l radius-8px p-4px bg-primary-very-light txt-c-primary-dark"
            ></textarea>
            <button type="submit" className="btn radius-20px">
              {languageObjUsed.btnSend}
            </button>
          </form> */}
        </section>

        <section className="txt-center f-lighter txt-c-primary-dark">
          <p>{languageObjUsed.footerLabel1}</p>
          <p>{languageObjUsed.footerLabel2}</p>
        </section>
      </footer>
    </>
  );
}

export default DefaultLayout;
