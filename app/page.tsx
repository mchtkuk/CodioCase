import Image from 'next/image'
import styles from './page.module.css'
import  "../styles/styles.scss"
import Hero from './components/Hero'
import Showroom from './components/Showroom'


export default function Home() {
  return (
    <div>
      <Hero />
      <Showroom />
    </div>
  )
}
