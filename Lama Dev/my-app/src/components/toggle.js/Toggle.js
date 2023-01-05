import React, { useContext } from 'react'
import './toggle.css'
import sun from '../../img/sun.png'
import moon from '../../img/moon.png'
import { ThemeContext } from '../../context'
const Toggle = () => {
    const theme=useContext(ThemeContext)
   
    const clickHandler=()=>{
        theme.dispatch({type:'TOGGLE'})
    }
  return (
    <div className='t'>
        <img src={sun} alt='sun' className='t-icon'/>
        <img src={moon} alt='sun' className='t-icon'/>
        <div className='t-button' onClick={clickHandler} style={{left:theme.state.darkMode ? '25px' : '0px'}}></div>
    </div>
  )
}

export default Toggle