import React from 'react'
import accessoriesBg from '../assets/images/bg/accessories.jpg'

const Accessories = () => {
  return (
    <div style={{ backgroundImage: accessoriesBg }}>
      <img src={accessoriesBg} style={{ width: '100vw' }} alt='bg' />
      <h2>Accessories</h2>
    </div>
  )
}

export default Accessories
