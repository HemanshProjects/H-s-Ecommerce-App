import React from 'react'
import Navbar from '../Components/Navbar'
import CartComponent from '../Components/CartComponent'

const MyCart = () => {
  return (
    <div className="px-6 py-4 font-Poppins space-y-4">
      <Navbar/>
      <CartComponent/>
    </div>
  )
}

export default MyCart
