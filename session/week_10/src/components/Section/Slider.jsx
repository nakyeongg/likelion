import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import slider01 from '../../assets/img/png/slider01.png'
import slider02 from '../../assets/img/png/slider02.png'
import slider03 from '../../assets/img/png/slider03.png'
import slider04 from '../../assets/img/png/slider04.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (
        <div className='slider-container'>
            <Swiper
                pagination={true}
                modules={[ Autoplay, Pagination ]}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disalbeOnInteraction: false }}
                >
                <SwiperSlide>
                    <img src={slider01} alt="slider01" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider02} alt="slider02" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider03} alt="slider03" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider04} alt="slider04" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider