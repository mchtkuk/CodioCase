import { useEffect, useState } from 'react';
import "../../globals.css"
import { useTranslation } from 'react-i18next';
import {MdDarkMode} from "react-icons/md"

const Lng = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      const storedDarkMode = localStorage.getItem('isDarkMode') === 'true';
      return storedDarkMode;
    }
    return false;
  });
  const { t, i18n } = useTranslation();


  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }

    setIsDarkMode(!isDarkMode);
  };

  const handleLanguageChange = (event: any) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('selectedLanguage', selectedLanguage);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    i18n.changeLanguage(storedLanguage);

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [i18n, isDarkMode]);

  useEffect(() => {
    localStorage.setItem('isDarkMode', isDarkMode.toString());
  }, [isDarkMode]);
  

  return (
    <div style={{display: "flex", gap: "1rem"}}>
       <button style={{backgroundColor: "transparent", border: "none", cursor: "pointer"}} onClick={toggleDarkMode}><MdDarkMode /></button>
      <select onChange={handleLanguageChange} value={i18n.language}>
        <option value="en">{t("en")}</option>
        <option value="tr">{t("tr")}</option>
      </select>
    </div>
  );
};

export default Lng;