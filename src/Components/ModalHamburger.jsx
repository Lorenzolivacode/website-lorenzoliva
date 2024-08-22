import { React, useState } from "react";
import "./../css-library-utilities/library-import.css";

export function ModalHamburger() {
  const [docDev, setDocDev] = useState(false);
  const [docArt, setDocArt] = useState(false);
  return (
    <div className=" absolute top-70px bg-primary-very-light">
      <section className="flex">
        <p>Documents dev</p>
        <button>{">"}</button>
        {/* <iframe src="" frameborder="0" width="auto" height="auto">
          View CV
        </iframe> */}
        <a href="" download>
          Download CV
        </a>
      </section>
      {/* <details>
        <summary>Documents dev</summary>
        <iframe src="" frameborder="0" width="auto" height="auto">
          View CV
        </iframe>
        <a href="" download>
          Download CV
        </a>
      </details> */}
      <section>
        <p>Documents art</p>
        <button>{">"}</button>
        {/* <iframe src="" frameborder="0" width="auto" height="auto">
          View CV Art
        </iframe> */}
        <a href="" download>
          Download CV Art
        </a>
        {/* <iframe src="" frameborder="0" width="auto" height="auto">
          View Artistic Portfolio
        </iframe> */}
        <a href="" download>
          Download Artistic Portfolio
        </a>
      </section>
    </div>
  );
}

export default ModalHamburger;
