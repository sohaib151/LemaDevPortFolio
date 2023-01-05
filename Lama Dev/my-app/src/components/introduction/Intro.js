import React from 'react'
import './intro.css'
import Me from '../../img/me.jpg'
const Intro = () => {
  return (
    <>
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <div className='i-intro'><h2>Hello I'm</h2></div>
                <div className='i-name'><h1>Sohaib Khan</h1></div>
                <div className='i-title'>
                <div className='i-title-wrapper'>
                    <div className='i-items'>Web Developer</div>
                    <div className='i-items'>UI/UX Designer</div>
                    <div className='i-items'>Photographer</div>
                    <div className='i-items'>Writer</div>
                </div>
                </div>
                <div>
                    <p className='i-dsc'>Hi I’m Sohaib Khan and I’m passionate about all things MERN. I work hard.I care about writing clean code and I genuinely love to learn.I’m currently looking for a right opportunity to work in an environment that will help me progress into a full-stack role.</p>
                </div>
                <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
            </div>
        </div>
        <div className='i-right'>
            <div className='i-bg'></div>
            <img src={Me}  alt='not found' className='i-img'/>
        </div>
    </div>
    </>
  )
}

export default Intro