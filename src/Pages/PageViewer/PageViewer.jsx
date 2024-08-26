import React from "react";
import { PdfViewer } from "./../../Components/PdfViewer/PdfViewer.jsx";

import cvLO from "./../../../public/doc/dev-doc/CV-Lorenzo-Oliva.pdf";
export function PageViewer() {
  /* const pdfUrl = "/src/assets/doc/dev-doc/CV-Lorenzo-Oliva.pdf"; */
  return (
    <div>
      {/* <PdfViewer url={cvLO} /> */}
      <a href={cvLO} target="__blank">
        CV Lore
      </a>
    </div>
  );
}

export default PageViewer;
