import logo from './logo.svg';
import { Suspense, useState } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next, Trans } from "react-i18next";
import "./App.css";

const translationsEn = {
  welcome: "React is cool!",
  "sample-text": "Dear Mr. <bold><italic>Panda</italic></bold>.",
  changed: "Can i have some sweets???? You changed language {{count}} time",
  changed_plural: "Can i have some sweets???? You changed language {{count}} times",
};

const translationsUa = {
  welcome: "Реакт рулить!",
  "sample-text": "Шановний пане <bold><italic>Панда</italic></bold>.",
  changed: "Дай вкусняшку, ти змінив мову {{count}} разів",
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationsEn },
      ua: { translation: translationsUa },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

const App = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
    setCount((previousCount) => previousCount + 1);
  };
  return (
    <Suspense fallback={"Loading..."}>
      <div className="App">
        <header className="App-header">
          <select name="language" onChange={onChange}>
            <option value="en">English</option>
            <option value="ua">Українська</option>
          </select>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{t("welcome")}</h1>
          <p>
            <Trans components={{ bold: <strong />, italic: <i /> }}>
              sample-text
            </Trans>
          </p>
          <p>{t("changed", { count })}</p>
        </header>
      </div>
    </Suspense>
  );
};

export default App;