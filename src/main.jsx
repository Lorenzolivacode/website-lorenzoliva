import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LanguageProvider } from "./Provider/LanguageContext.jsx";

import { DefaultLayout } from "./Components/Layout/DefaultLayout.jsx";
import { CodePage } from "./Pages/CodePage/CodePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/dev", element: <CodePage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </React.StrictMode>
);
