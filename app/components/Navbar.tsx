"use client"

import React, { useState } from 'react';
import '../../styles/styles.scss'
import AddProductModal from './AddProductModal';

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isNotification, setNotification] = useState("")
  
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAddProduct = (productData: Product) => {
    console.log('Adding product:', productData);
    setNotification("Succesfully Added")
    closeModal();
  };



  return (
    <section>
      <div className="container">
        <div className='image'>
          <a href='/'>
            <img src='https://codio.tech/img/logo-light.svg' alt='Logo' />
          </a>
        </div>
        <nav className='nav-section'>
          <button  onClick={openModal} className='button-1'>Add Product</button>
        </nav>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <AddProductModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleAddProduct} />
          <h1>{isNotification}</h1>
        </div>
      )}
    </section>
  );
};

export default Navbar;
