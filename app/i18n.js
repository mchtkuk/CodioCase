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
      modalregister: "Ekle",
      modalupdate: "Araba Bilgilerini Güncelleyin",
      modalupdatebutton: "Güncelle",
      missinginformation: "Gerekli bilgiler eksik",
      filtertitle: "Filtre",
      filterminprice: "Minimum USD",
      filtermaxprice: "Maximum USD",
      filterapply: "Fiyatı Uygula",
      filtersortby: "Sırala",
      filternewest: "En yeniden eskiye",
      filteroldest: "En eskiden yeniye",
      carcolor: "Renk",
      carupdate: "Güncelle",
      cardelete: "Sil",
      footerrights: "Tüm Hakları Saklıdır.",
      tr: "Türkçe",
      en: "İngilizce"
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
      modalupdate: "Update The Car Information",
      modalupdatebutton: "Update",
      missinginformation: "Missing required information",
      filtertitle: "Filter",
      filterminprice: "Min USD",
      filtermaxprice: "Max USD",
      filterapply: "Apply Price",
      filtersortby: "Sort by",
      filternewest: "Newest to Oldest",
      filteroldest: "Oldest to Newest",
      carcolor: "Color",
      carupdate: "Update",
      cardelete: "Delete",
      footerrights: "All Rights Reserved.",
      tr: "Turkish",
      en: "English"
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