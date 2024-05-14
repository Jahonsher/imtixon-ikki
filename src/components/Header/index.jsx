import React, { useState } from 'react'
import Products from '../Products'
import { Link } from 'react-router-dom'

const Header = ({ addToCart, cart }) => {

  return (
    <>
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px'
    }}>
        <div className='logo'>
            <h1>Logo</h1>
        </div>
        <Link to={'/cart'}>Cart {cart.length}</Link>
    </div>

    <Products onSelectedProduct={addToCart} />
    </>
    
  )
}

export default Header