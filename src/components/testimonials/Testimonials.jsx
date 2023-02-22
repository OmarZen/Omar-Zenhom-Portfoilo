import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/309638157_1155358431721673_2162220686121132591_n.jpg';
import AVTR2 from '../../assets/1620566044046.jpeg';

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVTR1,
        name: 'Ahmed Salah',
        review: 'Omer is a great and creative person who has a big passion to develop and do the work by professional way . and so happy to meet someone like omer'
    },
    {
        avatar: AVTR2,
        name: 'Caroline Hegazi',
        review: 'Omar is a real talent continue to work hard and I am sure you will be recognized for the many other opportunities that will open up for you:)'
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review From Clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={40}
                navigation
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial'>
                                <div className="client__avatar">
                                    <img src={avatar} alt={name} />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials;