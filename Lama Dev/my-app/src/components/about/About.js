import React from 'react'
import './about.css'
import Me from '../../img/me.jpg'

const About = () => {
  return (
    <div className='a'>
        <div className='a-left'>
            <div className='a-card bg'></div>
            <div className='a-card'>
            <img src={Me} alt='img-name' className='a-img'/>
            </div>
        </div>
        <div className='a-right'>
            <h1 className='a-title'>About Me</h1>
            <p className='a-dsc'>Hi I’m Sohaib Khan and I’m passionate about all things MERN. I work hard.I care about writing clean code and I genuinely love to learn.I’m currently looking for a right opportunity to work in an environment that will help me progress into a full-stack role</p>
            
        </div>
    </div>
  )
}

export default About