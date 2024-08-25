import React, { useState, useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.entry";

export function PdfViewer({ url }) {
  const [pdf, setPdf] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadPdf = async () => {
      const loadingTask = pdfjsLib.getDocument(url);
      const loadedPdf = await loadingTask.promise;
      setPdf(loadedPdf);
    };

    loadPdf();
  }, [url]);

  useEffect(() => {
    const renderPage = async () => {
      if (pdf) {
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        await page.render(renderContext).promise;
      }
    };

    renderPage();
  }, [pdf, pageNum]);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
      {pdf && (
        <div>
          <button
            onClick={() => setPageNum(pageNum - 1)}
            disabled={pageNum <= 1}
          >
            Pagina precedente
          </button>
          <button
            onClick={() => setPageNum(pageNum + 1)}
            disabled={pageNum >= pdf.numPages}
          >
            Pagina successiva
          </button>
        </div>
      )}
    </div>
  );
}

export default PDFViewer;
