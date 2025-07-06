import { createContext, useContext, useState, useCallback } from "react";
import languages from "@/languages.json";

const validLanguages = ["br", "en", "es"] as const;

type LanguageKey = string; // Still allowing string for flexibility in input

interface LanguageContextProps {
  language: LanguageKey;
  setLanguage: (lang: LanguageKey) => void;
  // This type definition is precise, expecting the structure of languages["br"]
  translations: typeof languages["br"];
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<LanguageKey>("br");

  const setLanguage = useCallback((lang: LanguageKey) => {
    // Asserting the type for `includes` check
    if (validLanguages.includes(lang as (typeof validLanguages)[number])) {
      setLanguageState(lang);
    } else {
      console.warn(`Invalid language "${lang}" provided. Reverting to "br".`);
      setLanguageState("br");
    }
  }, []);

  const value = {
    language,
    setLanguage,
    // THE FIX IS HERE: Explicitly assert that 'language' is one of the valid keys
    // to ensure 'translations' matches the expected object type.
    translations: languages[language as "br" | "en" | "es"],
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