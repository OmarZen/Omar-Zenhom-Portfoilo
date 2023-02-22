import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import { IoLogoLinkedin } from 'react-icons/io5';
import { FiYoutube } from 'react-icons/fi';

const Footer = () => {
    return (
        <section id='footer'>
            <footer>
                <a href="#" className='footer__logo'>Omar Zenhom</a>

                <ul className="permalinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#testimonials">Testimonials</a></li> 
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/omar-waleed-zenhom-32216a1b3/" target='_blank'><IoLogoLinkedin/></a>
                    <a href="https://www.facebook.com/OmarZenho/" target='_blank'><FaFacebookF/></a>
                    <a href="https://www.youtube.com/channel/UCZm5Gb5AcrZsPRF5bIjXCJw" target='_blank'><FiYoutube/></a>
                    <a href="https://www.instagram.com/omarzenhomofficail/" target='_blank'><FiInstagram/></a>
                    <a href="https://twitter.com/OmarWaleedZenh1" target='_blank'><IoLogoTwitter/></a>
                </div>

                <div className="footer__copyright">
                    <small>&copy; 2021 Omar Zenhom. All rights reserved.</small>
                </div>
            </footer>
        </section>
    )
    }

export default Footer