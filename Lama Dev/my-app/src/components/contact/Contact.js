import React, { useContext, useRef, useState } from 'react'
import './contact.css'
import phone from '../../img/phone.png'
import email from '../../img/email.png'
import address from '../../img/address.png'
import emailjs from 'emailjs-com'
import { ThemeContext } from '../../context'
const Contact = () => {
    const theme=useContext(ThemeContext)
    const darkMode=theme.state.darkMode
    const formref=useRef()
    const [done ,setDone]=useState(false)
    const submitHandler=(e)=>{
        e.preventDefault()
        emailjs.sendForm('service_fd9fw3k', 'template_vp1zn0u', formref.current, '5hpy39NeufOEk-u3V')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    
    }
  return (
    <div className='c'>
        <div className='c-bg'></div>
        <div className='c-wrapper'>
            <div className='c-left'>
                <h1 className='c-title'>Let's Discuss Your Project </h1>
                <div className='c-info'>
                 <div className='c-info-item'>
                    <img src={phone} alt='' className='c-icon'/>+44 7448824235
                 </div>
                 <div className='c-info-item'>
                    <img src={email} alt='' className='c-icon'/>SOHAIBRANA151@GMAIL.COM
                 </div>
                 <div className='c-info-item'>
                    <img src={address} alt='' className='c-icon'/>82 ABERDOUR ROAD GOODMYES,ILFORD,LONDON,UNITED KINGDOM
                 </div>
                </div>
            </div>
            <div className='c-right'>
                <p className='c-dsc'><b>What's Your Story?</b> Get in touch.Always Available Freelancing if the right project comes along me</p>
                <form ref={formref} onSubmit={submitHandler}>
                    <input style={{backgroundColor: darkMode && '#333'}} type='text' placeholder='Name' name='user_name'/>
                    <input style={{backgroundColor: darkMode && '#333'}} type='text' placeholder='Subject' name='user_subject'/>
                    <input style={{backgroundColor: darkMode && '#333'}} type='email' placeholder='Email' name='user_email'/>
                    <textarea style={{backgroundColor: darkMode && '#333'}}  type='text' placeholder='Message' name='message' rows={5}/>
                    <button type='submit'>Submit</button>
                    {done && 'Message Sent successfully'}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact