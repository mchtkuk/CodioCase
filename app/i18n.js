import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
  tr: {
    translation: {
      welcome: "Galerio'ya Hoşgeldin",
      nextgencarshowroom: "Yeni Nesil Araba Galerisi",
      intro: "Dilediğiniz gibi araba sahibi olun, satış yapın ve güncelleyin!",
      registercar: "Araba Ekleyin",
      addcartoshowroom: "Galeriye Araba Ekleyin",
      modalbrand: "Marka",
      modalprice: "Fiyat",
      modalcolor: "Renk",
      modalimage: "Fotoğraf",
      modalregister: "Giriş",
      missinginformation: "Gerekli bilgiler eksik",
      filtertitle: "Filtre",
      filterminprice: "Minimum USD",
      filtermaxprice: "Maximum USD",
      filterapply: "Fiyatı Uygula",
      filtersortby: "Sırala",
      filternewest: "En yeniden eskiye",
      filteroldest: "En eskiden yeniye"
    }
  },
  en: {
    translation: {
      welcome: "Welcome to Galerio",
      nextgencarshowroom: "Next Gen Car Showroom",
      intro:"Register or buy a car and update them as you wish!",
      registercar:"Register Car",
      addcartoshowroom: "Add Car to Showroom",
      modalbrand: "Brand",
      modalprice: "Price",
      modalcolor: "Color",
      modalimage: "Image",
      modalregister: "Register",
      missinginformation: "Missing required information",
      filtertitle: "Filter",
      filterminprice: "Min USD",
      filtermaxprice: "Max USD",
      filterapply: "Apply Price",
      filtersortby: "Sort by",
      filternewest: "Newest to Oldest",
      filteroldest: "Oldest to Newest"
    }
  }
}


i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    resources
  })

export default i18n