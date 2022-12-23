import React from 'react'
import './MaStyle.css'
import pic from '../astro/pic.jpg'


function MyStyle() {
  return (
    <div className='moon'>
    <h1>hi,<br />i'm <span>khalid</span><br />frontend<span> developer</span></h1>
    <div className='nobody'>
      <img src={pic} alt= 'pic' />
    </div>
  </div>
  )
}

export default MyStyle