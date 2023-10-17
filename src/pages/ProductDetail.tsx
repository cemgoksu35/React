import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

function ProductDetail() {

    const {pid} = useParams()

  return (
    <>
    <h4>{pid}</h4>
    <NavLink to='/dashboard'> Geri Dön</NavLink>  
    </>
  )
}

export default ProductDetail