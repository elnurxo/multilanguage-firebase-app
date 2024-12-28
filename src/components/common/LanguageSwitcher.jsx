import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="relative inline-block">
      <select
        onChange={handleLanguageChange}
        value={i18n.language}
        className="bg-gray-800 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="az">Azərbaycan</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
