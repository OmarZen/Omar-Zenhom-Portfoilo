import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/omar-waleed-zenhom-32216a1b3/' target='_blank'><BsLinkedin className='header__socials-icon'/></a>
        <a href='https://github.com/OmarZen' target='_blank'><FaGithub className='header__socials-icon'/></a>
        <a href='https://www.youtube.com/channel/UCZm5Gb5AcrZsPRF5bIjXCJw' target='_blank'><FaYoutube className='header__socials-icon'/></a>
        <a href='https://www.facebook.com/OmarZenho/' target='_blank'><FaFacebook className='header__socials-icon'/></a>
        
    </div>
  )
}

export default HeaderSocials