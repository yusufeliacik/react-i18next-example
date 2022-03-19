import "./App.css";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="App">
      <button onClick={() => changeLanguage("tr")}>Select TR Language</button>
      <button onClick={() => changeLanguage("en")}>Select EN Language</button>
      <button onClick={() => changeLanguage("de")}>Select DE Language</button>

      <div className="example-text">{t("example.paragraph")}</div>
    </div>
  );
};

export default App;
