"use client";

import { I18nextProvider } from "react-i18next";
import "../styles/styles.scss";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Header/Navbar";
import Showroom from "./components/Showroom/Showroom";
import "./i18n";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Showroom />
      <Footer />
    </>
  );
}
