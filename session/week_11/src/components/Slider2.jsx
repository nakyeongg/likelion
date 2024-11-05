import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/pagination';

const Slider2 = () => {
    return (
        <>
            <Swiper
                pagination={{
                    el: '.custom-pagination',
                    clickable: true,
                    renderBullet: (index, className) =>
                        `<span class="${className}"></span>`,}}
                modules={[ Autoplay, Pagination ]}
                loop={true}
                autoplay={{
                    // delay: 3000,
                    disalbeOnInteraction: false }}
                className='myslide2'
            >
                <SwiperSlide className='slide1'></SwiperSlide>
                <SwiperSlide className='slide2'></SwiperSlide>
                <SwiperSlide className='slide3'></SwiperSlide>
                <SwiperSlide className='slide4'></SwiperSlide>
                <div className="custom-pagination"></div>
            </Swiper>
        </>
    )
}

export default Slider2