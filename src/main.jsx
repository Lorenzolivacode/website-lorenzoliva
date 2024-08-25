import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LanguageProvider } from "./Provider/LanguageContext.jsx";
import { PageProvider, PageContext } from "./Provider/PageContext.jsx";

import { DefaultLayout } from "./Components/Layout/DefaultLayout.jsx";
import { CodePage } from "./Pages/CodePage/CodePage.jsx";
import { ArtPage } from "./Pages/ArtPage/ArtPage.jsx";
import { PageViewer } from "./Pages/PageViewer/PageViewer.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        { path: "/", element: <App /> },
        { path: "/dev", element: <CodePage /> },
        { path: "/art", element: <ArtPage /> },
        { path: "/pdf", element: <PageViewer /> },
      ],
    },
  ]
  /* {
    basename: "/home", // Aggiungi questa riga
  } */
);

const LayoutBgColor = ({ children }) => {
  const pageSelected = useContext(PageContext);

  useEffect(() => {
    const body = document.querySelector("body");

    if (pageSelected === "art") {
      body.classList.add("art-bg");
    } else {
      body.classList.remove("art-bg");
    }
  }, [pageSelected]);

  return children;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <PageProvider>
        <LayoutBgColor>
          <RouterProvider router={router} />
        </LayoutBgColor>
      </PageProvider>
    </LanguageProvider>
  </React.StrictMode>
);
