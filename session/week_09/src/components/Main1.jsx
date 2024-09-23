import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
import slide1 from '../assets/img/main1/slide1.png'
import slide2 from '../assets/img/main1/slide2.png'
import slide3 from '../assets/img/main1/slide3.png'
import slide4 from '../assets/img/main1/slide4.png'
import slide5 from '../assets/img/main1/slide5.png'
import slide6 from '../assets/img/main1/slide6.png'
import side1 from '../assets/img/main1/side1.png'
import side2 from '../assets/img/main1/side2.png'
import side3 from '../assets/img/main1/side3.png'
import side4 from '../assets/img/main1/side4.png'
import side5 from '../assets/img/main1/side5.png'
import side6 from '../assets/img/main1/side6.png'
import mini1 from '../assets/img/main1/mini1.png'
import mini2 from '../assets/img/main1/mini2.png'
import mini3 from '../assets/img/main1/mini3.png'
import mini4 from '../assets/img/main1/mini4.png'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Main = () => {
    return (
        <div className='main1-container'>
            <div className='main-l'>
                <div>
                    <div className='main-title'>
                        2022 개정
                        <br/>
                        교육과정 교과서
                    </div>
                    <p>지학사 교과서가 수업에 필요한 모든 것을 지원합니다.</p>
                </div>
                <div className='bottom'>
                    <p>EVENT</p>
                    <Swiper 
                        pagination={true} 
                        modules={[Pagination, Autoplay]} 
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false}}
                    >
                        <SwiperSlide>
                            <p>
                            선생님! 아직 티솔루션 회원이 아니신가요? 
                            <br />
                            신규 회원가입 이벤트 🎁
                            </p>
                            <div>
                                <img src={mini1} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>
                            마음에 드는 표지 선택하고 상품 받아가세요! 
                            <br />
                            표지 좋아요 이벤트 💗
                            </p>
                            <div>
                                <img src={mini2} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>
                            여기에 들어가는 초성은 무엇일까요? 
                            <br />
                            빈칸 퀴즈 이벤트 💡
                            </p>
                            <div>
                                <img src={mini3} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>
                            2022 개정 지학사 교과서를 응원해 주세요! 
                            <br />
                            응원 이벤트 🍀
                            </p>
                            <div>
                                <img src={mini4} alt="" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <Swiper
                className='main-r'
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <img src={slide1} alt="" className="slide"/>
                    <img src={side1} alt="" className="img"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" className="slide"/>
                    <img src={side2} alt="" className="img"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" className="slide"/>
                    <img src={side3} alt="" className="img"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" className="slide"/>
                    <img src={side4} alt="" className="img"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" className="slide"/>
                    <img src={side5} alt="" className="img"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide6} alt="" className="slide"/>
                    <img src={side6} alt="" className="img"/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Main
