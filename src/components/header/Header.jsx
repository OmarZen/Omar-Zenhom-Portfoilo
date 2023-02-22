import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/IMG_20220928_135256.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5 className='hello__header'>Hello I'm</h5>
                <h1 className='name__header'>Omar Zenhom</h1>
                <h5 className="text-light">Full-Stack Developer</h5>
                <h5 className="text-light">Graphic Designer And Content Creator</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;