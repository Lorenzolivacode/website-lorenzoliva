import React from "react";

import icoADown from "./../../../assets/nav-icon/icon-arrow-down.png";
import icoAUp from "./../../../assets/nav-icon/icon-arrow-up.png";
export function SectionDocs({ section, onClick, flagDoc, objDoc, language }) {
  return (
    <section className="flex-column flex-center border-b-1-p-m-l p-10px">
      <div className="flex-center gap-10px">
        <p className="f-bold f-size-1">
          {language.docsLabel} {section}
        </p>
        <button
          onClick={onClick}
          className="w-30px h-30px flex-center reset-default"
        >
          <img
            src={!flagDoc ? icoADown : icoAUp}
            alt={language.altTxtDocsLabel}
            className="w-70p"
          />
        </button>
      </div>
      {flagDoc &&
        objDoc.map((doc) => (
          <a key={doc.id} href={doc.doc} download className="reset-default">
            {doc.label()}
          </a>
        ))}
    </section>
  );
}

export default SectionDocs;
