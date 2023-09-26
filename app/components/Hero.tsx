import { useTranslation } from 'react-i18next'

const Hero = () => {

  const [t, i18n] = useTranslation()

  return (
    <section className='container'>
      <div className='hero-container'> 
      <h1>{t('welcome')}</h1>
      <h1>{t('nextgencarshowroom')}</h1>
      <h3>{t('intro')}</h3>
      </div>
    </section>
  )
}

export default Hero