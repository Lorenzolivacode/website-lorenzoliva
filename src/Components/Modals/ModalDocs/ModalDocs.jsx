import { React, useState } from "react";
import "./../../../css-library-utilities/library-import.css";

import { SectionDocs } from "./SectionDocs.jsx";

import cvDev from "./../../../../public/doc/dev-doc/CV-Lorenzo-Oliva.pdf";
import cvArt from "./../../../../public/doc/art-doc/Cv-Artistico.pdf";
import portfolioArt from "./../../../../public/doc/art-doc/Portfolio-artistico-Oliva-Lorenzo.pdf";

export function ModalDocs({ pageSelected, language }) {
  const [docDev, setDocDev] = useState(false);
  const [docArt, setDocArt] = useState(false);

  const handleDocDev = () => {
    !docDev ? setDocDev(true) : setDocDev(false);
    /* console.log("docDev", docDev); */
  };

  const handleDocArt = () => {
    !docArt ? setDocArt(true) : setDocArt(false);
  };

  const objDocDev = [
    {
      id: crypto.randomUUID(),
      doc: cvDev,
      title: language.myCv,
      label: function () {
        return `${this.section} | ${language.viewCvLabel}`;
      },
      section: language.sectionDev,
    },
  ];

  const objDocArt = [
    {
      id: crypto.randomUUID(),
      doc: cvArt,
      title: language.myCv,
      label: function () {
        return `${this.section} | ${language.viewCvLabel}`;
      },
      section: language.sectionArt,
    },
    {
      id: crypto.randomUUID(),
      doc: portfolioArt,
      title: language.myPortfolio,
      label: function () {
        return `${this.section} | ${language.viewPortfolioLabel}`;
      },
      section: language.sectionArt,
    },
  ];

  const pageHomeDev = pageSelected === "home" || pageSelected === "dev";
  const pageHomeArt = pageSelected === "home" || pageSelected === "art";

  return (
    <div className=" absolute bottom-minus10px left-20px translate-y-100 flex-column gap-20px radius-20px-3s4-1 shadow-light-small p-20px p-y-30px bg-primary-very-light txt-c-primary-dark border1-p-d">
      {pageHomeDev && (
        <SectionDocs
          section={"dev"}
          onClick={handleDocDev}
          flagDoc={docDev}
          objDoc={objDocDev}
          language={language}
        />
      )}
      {pageHomeArt && (
        <SectionDocs
          section={"art"}
          onClick={handleDocArt}
          flagDoc={docArt}
          objDoc={objDocArt}
          language={language}
        />
      )}
    </div>
  );
}

export default ModalDocs;
