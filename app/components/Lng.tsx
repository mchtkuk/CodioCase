import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Lng = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event: any) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('selectedLanguage', selectedLanguage);
  };

  // Use useEffect to set the language when the component mounts
  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    i18n.changeLanguage(storedLanguage);
  }, []);

  return (
    <div>
      <select onChange={handleLanguageChange} value={i18n.language}>
        <option value="en">English</option>
        <option value="tr">Türkçe</option>
      </select>
    </div>
  );
};

export default Lng;