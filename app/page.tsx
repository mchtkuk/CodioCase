"use client"

import { I18nextProvider } from "react-i18next"
import  "../styles/styles.scss"
import Hero from './components/Hero'
import Navbar from "./components/Navbar"
import Showroom from './components/Showroom'
import "./i18n"
import Footer from "./components/Footer"



export default function Home() {
  return (
      <>
      <Navbar />
      <Hero />
      <Showroom />
      <Footer />
      </>
  )
}
