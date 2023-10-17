import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

function CityDetail() {

    const {data} = useParams()

  return (
    <>
    <h4>{data}</h4>
    <NavLink to='/dashboard'> Geri Dön</NavLink>  
    </>
  )
}

export default CityDetail