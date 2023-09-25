"use client"
import React, { useState } from 'react';
import '../../styles/styles.scss'
import Lng from './Lng';


const Navbar = () => {
  return (
    <section>
      <div className="container">
        <div className='image'>
          <a href='/'>
            <img src='https://codio.tech/img/logo-light.svg' alt='Logo' />
          </a>
        </div>
        <nav className='nav-section'>
          <Lng />
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
