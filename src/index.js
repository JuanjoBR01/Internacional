import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es.json";
import localeEnMessages from "./locales/en.json";

import JobsList from "./components/jobslist";

const getLocal = () => {
  console.log(navigator.language || navigator.userLanguage)
  return navigator.language || navigator.userLanguage;
};

getLocal();

ReactDOM.render(
  <IntlProvider locale={getLocal()} messages={getLocal() === "es-419" ? localeEsMessages : localeEnMessages}>
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);
