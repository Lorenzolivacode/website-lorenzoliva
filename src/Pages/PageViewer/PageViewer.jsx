import React from "react";
import { PdfViewer } from "./../../Components/PdfViewer/PdfViewer.jsx";
export function PageViewer() {
  pdfUrl = "/src/assets/doc/dev-doc/CV-Lorenzo-Oliva.pdf";
  return (
    <div>
      <PdfViewer url={pdfUrl} />
    </div>
  );
}

export default PageViewer;
