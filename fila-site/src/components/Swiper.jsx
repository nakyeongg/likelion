import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../assets/scss/swiper.scss';
import logo from '../assets/img/logo.png'
import logo2 from '../assets/img/logo2.svg'
import nav from '../assets/img/nav.png'
import image2 from '../assets/img/image 2.png'
import image3 from '../assets/img/image 3.png'
import image4 from '../assets/img/image 4.png'
import image5 from '../assets/img/image 5.png'
import image6 from '../assets/img/image 6.png'

import whiteVector from '../assets/img/Vector.svg'
import whiteSearch from '../assets/img/free-icon-font-search-3917061 1.svg'
import whitePerson from '../assets/img/01 align center (1).svg'
import whiteCart from '../assets/img/free-icon-font-shopping-cart-add-3916604 1.svg'

import blackVector from '../assets/img/Vector.png'
import blackSearch from '../assets/img/free-icon-font-search-3917061 1.png'
import blackPerson from '../assets/img/01 align center.png'
import blackCart from '../assets/img/free-icon-font-shopping-cart-add-3916604 1.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/scss';


import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      {/* 1번째 */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src={ image2 } className='swiper-img'/>
          <h1 className='swiper-text'>24 NEW 인터런</h1>
          <div className='swiper-btn'>자세히 보기</div>
        {/* 스와이퍼의 헤더 */}
          <div className='swiper-header'>
            <img src={logo2} alt="" />
            <div className='swiper-header-nav'>
              <p>WOMEN</p>
              <p>MEN</p>
              <p>KIDS</p>
              <p>TENNIS</p>
              <p>BRAND</p>
            </div>
            <div className='swiper-header-icons'>
              <img src={ whiteVector } alt="" />
              <img src={ whiteSearch } alt="" />
              <img src={ whitePerson } alt="" />
              <img src={ whiteCart } alt="" />
            </div>
          </div>

          {/* 스와이퍼 헤더 호버하면 나오는 nav */}
          <div className='swiper-nav'>
            <div className='swiper-nav-container'>
              <img src={logo} alt="" />
              <div className='swiper-nav-category'>
                <p>WOMEN</p>
                <p>MEN</p>
                <p>KIDS</p>
                <p>TENNIS</p>
                <p>BRAND</p>
              </div>
              <div className='swiper-nav-icons'>
                <img src={ blackVector } alt="" />
                <img src={ blackSearch } alt="" />
                <img src={ blackPerson } alt="" />
                <img src={ blackCart } alt="" />
              </div>
            </div>
            <img src={nav} className='nav-img' />
          </div>

        </SwiperSlide>
        
      {/* 2번째 */}
        <SwiperSlide>
          <img src={ image3 } className='swiper-img'/>
          <h1 className='swiper-text'>FILA ECHAPPE</h1>

        {/* 스와이퍼의 헤더 */}
          <div className='swiper-header'>
            <img src={logo2} alt="" />
            <div className='swiper-header-nav'>
              <p>WOMEN</p>
              <p>MEN</p>
              <p>KIDS</p>
              <p>TENNIS</p>
              <p>BRAND</p>
            </div>
            <div className='swiper-header-icons'>
              <img src={ whiteVector } alt="" />
              <img src={ whiteSearch } alt="" />
              <img src={ whitePerson } alt="" />
              <img src={ whiteCart } alt="" />
            </div>
          </div>

          {/* 스와이퍼 헤더 호버하면 나오는 nav */}
          <div className='swiper-nav'>
            <div className='swiper-nav-container'>
              <img src={logo} alt="" />
              <div className='swiper-nav-category'>
                <p>WOMEN</p>
                <p>MEN</p>
                <p>KIDS</p>
                <p>TENNIS</p>
                <p>BRAND</p>
              </div>
              <div className='swiper-nav-icons'>
                <img src={ blackVector } alt="" />
                <img src={ blackSearch } alt="" />
                <img src={ blackPerson } alt="" />
                <img src={ blackCart } alt="" />
              </div>
            </div>
            <img src={nav} className='nav-img' />
          </div>
        </SwiperSlide>
        
      {/* 3번째 */}
        <SwiperSlide>
          <img src={ image4 } className='swiper-img'/>
          <h1 className='swiper-text'>COLD WAVE<br/>T-SHIRTS</h1>

        {/* 스와이퍼의 헤더 */}
          <div className='swiper-header'>
            <img src={logo2} alt="" />
            <div className='swiper-header-nav'>
              <p>WOMEN</p>
              <p>MEN</p>
              <p>KIDS</p>
              <p>TENNIS</p>
              <p>BRAND</p>
            </div>
            <div className='swiper-header-icons'>
              <img src={ whiteVector } alt="" />
              <img src={ whiteSearch } alt="" />
              <img src={ whitePerson } alt="" />
              <img src={ whiteCart } alt="" />
            </div>
          </div>

          {/* 스와이퍼 헤더 호버하면 나오는 nav */}
          <div className='swiper-nav'>
            <div className='swiper-nav-container'>
              <img src={logo} alt="" />
              <div className='swiper-nav-category'>
                <p>WOMEN</p>
                <p>MEN</p>
                <p>KIDS</p>
                <p>TENNIS</p>
                <p>BRAND</p>
              </div>
              <div className='swiper-nav-icons'>
                <img src={ blackVector } alt="" />
                <img src={ blackSearch } alt="" />
                <img src={ blackPerson } alt="" />
                <img src={ blackCart } alt="" />
              </div>
            </div>
            <img src={nav} className='nav-img' />
          </div>
        </SwiperSlide>
        
      {/* 4번째 */}
        <SwiperSlide>
          <img src={ image5 } className='swiper-img'/>
          <h1 className='swiper-text'>FILA<br/>WHITE LINE</h1>

          {/* 스와이퍼의 헤더 */}
            <div className='swiper-header'>
              <img src={logo2} alt="" />
              <div className='swiper-header-nav'>
                <p>WOMEN</p>
                <p>MEN</p>
                <p>KIDS</p>
                <p>TENNIS</p>
                <p>BRAND</p>
              </div>
              <div className='swiper-header-icons'>
                <img src={ whiteVector } alt="" />
                <img src={ whiteSearch } alt="" />
                <img src={ whitePerson } alt="" />
                <img src={ whiteCart } alt="" />
              </div>
            </div>

            {/* 스와이퍼 헤더 호버하면 나오는 nav */}
            <div className='swiper-nav'>
              <div className='swiper-nav-container'>
                <img src={logo} alt="" />
                <div className='swiper-nav-category'>
                  <p>WOMEN</p>
                  <p>MEN</p>
                  <p>KIDS</p>
                  <p>TENNIS</p>
                  <p>BRAND</p>
                </div>
                <div className='swiper-nav-icons'>
                  <img src={ blackVector } alt="" />
                  <img src={ blackSearch } alt="" />
                  <img src={ blackPerson } alt="" />
                  <img src={ blackCart } alt="" />
                </div>
              </div>
              <img src={nav} className='nav-img' />
            </div>
          </SwiperSlide>
          
      {/* 5번째 */}
        <SwiperSlide>
          <img src={ image6 } className='swiper-img'/>
          <h1 className='swiper-text'>PEITO</h1>

          {/* 스와이퍼의 헤더 */}
            <div className='swiper-header'>
              <img src={logo2} alt="" />
              <div className='swiper-header-nav'>
                <p>WOMEN</p>
                <p>MEN</p>
                <p>KIDS</p>
                <p>TENNIS</p>
                <p>BRAND</p>
              </div>
              <div className='swiper-header-icons'>
                <img src={ whiteVector } alt="" />
                <img src={ whiteSearch } alt="" />
                <img src={ whitePerson } alt="" />
                <img src={ whiteCart } alt="" />
              </div>
            </div>

          {/* 스와이퍼 헤더 호버하면 나오는 nav */}
          <div className='swiper-nav'>
            <div className='swiper-nav-container'>
              <img src={logo} alt="" />
              <div className='swiper-nav-category'>
                <p>WOMEN</p>
                <p>MEN</p>
                <p>KIDS</p>
                <p>TENNIS</p>
                <p>BRAND</p>
              </div>
              <div className='swiper-nav-icons'>
                <img src={ blackVector } alt="" />
                <img src={ blackSearch } alt="" />
                <img src={ blackPerson } alt="" />
                <img src={ blackCart } alt="" />
              </div>
            </div>
            <img src={nav} className='nav-img' />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
