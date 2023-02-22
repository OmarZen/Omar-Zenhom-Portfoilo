import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/Screenshot 2023-02-18 183910.png';
import IMG2 from '../../assets/preview.png';
import IMG3 from '../../assets/preview (1).png';
import IMG4 from '../../assets/Screenshot 2023-02-18 191407.jpg';
import IMG5 from '../../assets/328852805_410137727992391_1213822303648592685_n.jpg';
import IMG6 from '../../assets/Copy of male influencer costa youtube thumbnail - Made with PosterMyWall (2).jpg';

const data = [
    {
        id: 1,
        image: IMG1,
        btn1: 'Channel Link',
        btn2: 'Shorts',
        title: 'YouTube Channel',
        link1: 'https://www.youtube.com/channel/UCZm5Gb5AcrZsPRF5bIjXCJw',
        link2: 'https://www.youtube.com/@omar_zenhom/shorts',
    },
    {
        id: 2,
        image: IMG2,
        btn1: 'GitHub',
        btn2: 'Live Demo',
        title: 'Responsive Real State Website',
        link1: 'https://github.com/OmarZen/Responsive-real-state-website',
        link2: 'https://omarzen.github.io/Responsive-real-state-website/',
    },
    {
        id: 3,
        image: IMG3,
        btn1: 'GitHub',
        btn2: 'Live Demo',
        title: 'Responsive Portfolio',
        link1: 'https://github.com/OmarZen/Responsive-Portfolio-Website-Omar',
        link2: 'https://omarzen.github.io/Responsive-Portfolio-Website-Omar/',
    },
    {
        id: 4,
        image: IMG4,
        btn1: 'Facebook',
        btn2: 'Most Recent Post',
        title: 'Facebook Page',
        link1: 'https://www.facebook.com/OmarZenho',
        link2: 'https://www.facebook.com/OmarZenho/photos/a.193466243110394/226392009817817/?type=3',
    },
    {
        id: 5,
        image: IMG5,
        btn1: 'Facebook Post',
        btn2: 'Facebook Page',
        title: 'Designing a Facebook Post',
        link1: 'https://www.facebook.com/OmarZenho',
        link2: 'https://www.facebook.com/EISTF/?__cft__[0]=AZWIwDeCFsfY5OB4wj2lyXW3zEog3xPmNA5zaW7UhgoRffZ659AHXy_77bKUrbcsxk--8Bjg5HSsdtc2oDDSlO-Lp_JqiKCRoTr1e5HtW69HBUFsruVUlwJe4KmRLCnV7jZLAIpI9EFAo0sTUknPEA8MVzChI4MZ-d9LJxdrpw3iy2IyiooxDi3vSZGJVyRCKRMrr7JS_fGhCuhfWAczzb01&__tn__=-UC*F',
    },
    {
        id: 6,
        image: IMG6,
        btn1: 'Link of Photo',
        btn2: 'YouTube Video',
        title: 'Thumbnail',
        link1: 'https://drive.google.com/drive/u/0/folders/1w_l3ahzOVLuCGOEqOzknJI0xYoirM6LC',
        link2: 'https://www.youtube.com/watch?v=pNiVVbMganQ&t=32s',
    },
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, btn1, btn2, title, link1, link2 }) => {
                        return (
                            <article key={id} className="article portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={link1} className='btn' target='_blank'>{btn1}</a>
                                    <a href={link2  } className='btn btn-primary' target='_blank'>{btn2}</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio;