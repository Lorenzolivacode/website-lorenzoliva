import { React, useContext, useEffect } from "react";
import "./art-page.css";

import { LanguageObjUsedContext } from "../../Provider/LanguageContext";
import { PageContext, SetPageContext } from "../../Provider/PageContext";

import { socialNetwork } from "./../../data/socialNetwork";

import imgBgArtwork from "./../../assets/artPage/img-bg-workart.png";
import imgLO from "./../../../public/LO-img-3.3.png";

export function ArtPage() {
  const languageObjUsed = useContext(LanguageObjUsedContext);

  const pageSelected = useContext(PageContext);
  const setPageSelected = useContext(SetPageContext);

  useEffect(() => {
    if (pageSelected !== "art") {
      setPageSelected("art");
    }
  }, [pageSelected]);

  return (
    <div className="txt-c-primary-dark txt-center">
      <img src={imgBgArtwork} alt="" className="img-bg" />
      <h2>{languageObjUsed.maintenancePageLabel}</h2>
      <h3>{languageObjUsed.checkOutSocialLabel}</h3>
      <ul className="flex-center gap-20px p-10px">
        {socialNetwork.map((socialNetwork) => {
          return (
            <li key={socialNetwork.id}>
              <a href={socialNetwork.url} target="_blank" rel="noreferrer">
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
      <img
        src={imgLO}
        alt={`${languageObjUsed.imageLabel}${languageObjUsed.myName}`}
        className="w-80px"
      />
    </div>
  );
}

export default ArtPage;
