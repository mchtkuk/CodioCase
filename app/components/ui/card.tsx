import '../../../styles/styles.scss'
import { useTranslation } from 'react-i18next';

interface CardProps {
  price: string;
  brand: string;
  color: string;
  date: string;
  model: string;
  image: string;
  id: number;
  onDelete: (id: number) => void;
  onUpdate: (id: number) => void;
}


const Card = ({ id, price, brand, color, date, model, image, onDelete, onUpdate}: CardProps) => {
 const [t, i18n] = useTranslation()

  return (
    <div className="nft">
    <div className='main'>
      <img className='tokenImage' src={image} alt="Image" />
      <h2>{brand}</h2>
      <h3>{model}</h3>
      <p className='description'>{t("carcolor")}: {color}</p>
      <div className='tokenInfo'>
        <div className="price">
          <p>{price}$</p>
        </div>
        <div className="duration">
          <ins>◷</ins>
          <p>{date}</p>
        </div>
      </div>
      <hr />
      <div className='creator'>
      <button className='button-1' onClick={() => onUpdate(id)}>{t("carupdate")}</button>
      <button className='button-1' onClick={() => onDelete(id)}>{t("cardelete")}</button>
      </div>
    </div>
  </div>
  )
}

export default Card