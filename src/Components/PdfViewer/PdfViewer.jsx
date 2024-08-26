import React from "react";

export const PdfViewer = ({ pdfUrl }) => {
  return (
    <iframe
      src={pdfUrl}
      width="100%"
      height="750px"
      style={{ border: "none" }}
      title="PDF Viewer"
    />
  );
};

export default PdfViewer;
