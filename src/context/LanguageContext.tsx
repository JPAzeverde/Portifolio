import { createContext, useContext, useState } from "react";
import languages from "@/languages.json";

const validLanguages = ["br", "en", "es"] as const;
type LanguageKey = typeof validLanguages[number];

interface LanguageContextProps {
  language: LanguageKey;
  setLanguage: (lang: LanguageKey) => void;
  translations: typeof languages["br"];
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<LanguageKey>("br");

  const setLanguage = (lang: string) => {
    if (validLanguages.includes(lang as LanguageKey)) {
      setLanguageState(lang as LanguageKey);
    } else {
      console.warn(`Idioma inválido: ${lang}, definindo para 'br'`);
      setLanguageState("br");
    }
    console.log("Idioma atual no contexto:", language);
  };

  const value = {
    language,
    setLanguage,
    translations: languages[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
