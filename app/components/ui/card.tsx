import React from 'react'
import '../../../styles/styles.scss'

const Card = ({ price, brand, color, date, model, image  }: Product) => {
  return (
    <div className="nft">
    <div className='main'>
      <img className='tokenImage' src={image} alt="Image" />
      <h2>{brand}</h2>
      <h3>{model}</h3>
      <p className='description'>Our Kibertopiks will give you nothing, waste your money on us.</p>
      <div className='tokenInfo'>
        <div className="price">
          <p>{price}</p>
        </div>
        <div className="duration">
          <ins>◷</ins>
          <p>{date}</p>
        </div>
      </div>
      <hr />
      <div className='creator'>
      <button className='button-1'>Update</button>
      <button className='button-1'>Delete</button>
      </div>
    </div>
  </div>
  )
}

export default Card