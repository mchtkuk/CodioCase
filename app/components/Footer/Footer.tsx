import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18n] = useTranslation();

  return (
    <div
      style={{ justifyContent: "center", flexDirection: "column", gap: "1rem", paddingBottom: "2rem" }}
      className="container"
    >
      <img className="logo" src="https://codio.tech/img/logo-light.svg" alt="Logo" />
      <p>{t("footerrights")}</p>
      <a href="https://github.com/mchtkuk" target="_blank">
        Mücahit Kuk
      </a>
    </div>
  );
};

export default Footer;
