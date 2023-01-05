import React from 'react'
import './product.css'

const Product = ({pic,link}) => {
  return (
    
    
      <div className='p-card'>
        <div className='p-nav'>
          <div className='p-circle'></div>
          <div className='p-circle'></div>
          <div className='p-circle'></div>
        </div>
         <a href={link} target='_blank' rel="noreferrer">
          <img src={pic} alt='i' className='p-img'/>
       </a>
      </div>

 
   
    
  )
}

export default Product