import { useState, useEffect, createContext } from "react";

import { labelsIt, labelsEn } from "../data/labels";

export const LanguageContext = createContext();
export const SetLanguageContext = createContext();
export const LanguageObjUsedContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("it");
  const [languageObjUsed, setLanguageObjUsed] = useState(labelsIt);
  useEffect(() => {
    const selectedLanguage = language === "it" ? labelsIt : labelsEn;
    setLanguageObjUsed(selectedLanguage);
  }, [language]);
  return (
    <LanguageContext.Provider value={language}>
      <SetLanguageContext.Provider value={setLanguage}>
        <LanguageObjUsedContext.Provider value={languageObjUsed}>
          {children}
        </LanguageObjUsedContext.Provider>
      </SetLanguageContext.Provider>
    </LanguageContext.Provider>
  );
}
