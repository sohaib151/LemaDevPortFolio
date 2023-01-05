import React from 'react'
import './productList.css'
import Product from '../product/Product'
import data from '../../data/data'
const ProductList = () => {
  return (
    <div className='p'>
        <div className='p-text'>
            <h1 className='p-title'>It's about Sohaib Khan</h1>
            <p className='p-dsc'>Hi I’m Sohaib Khan and I’m passionate about all things MERN. I work hard.I care about writing clean code and I genuinely love to learn.I’m currently looking for a right opportunity to work in an environment that will help me progress into a full-stack role</p>
        </div>
        <div className='p-list'>
        {data.map(item=>
       <Product key={item.id} pic={item.image} link={item.link}/>
       
       )}
       </div>
    </div>
  )
}

export default ProductList