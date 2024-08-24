import { useState, useEffect, createContext } from "react";

export const PageContext = createContext();
export const SetPageContext = createContext();

export function PageProvider({ children }) {
  const [pageSelected, setPageSelected] = useState("home");

  useEffect(() => {
    console.log("log Provider", pageSelected);
  }, [pageSelected]);
  return (
    <PageContext.Provider value={pageSelected}>
      <SetPageContext.Provider value={setPageSelected}>
        {children}
      </SetPageContext.Provider>
    </PageContext.Provider>
  );
}
