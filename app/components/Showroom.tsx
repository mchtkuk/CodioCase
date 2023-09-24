"use client"

import React, { useEffect, useState } from 'react'
import {GET} from "../api/products/route"
import Card from "./ui/card"

const Showroom = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await GET();
        const data = await response.json();
        setProducts(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='showroom-container'>
      <div className='showroom-title'>
        <h2>Showroom</h2>
      </div>
      <div className='showroom-flex'>
        {products.map((product: Product) => (
            <Card key={product.id} id={product.id} price={product.price} brand={product.brand} color={product.color} date={product.date} model={product.model} image={product.image}/>
        ))}
        </div>
    </div>
  )
}

export default Showroom