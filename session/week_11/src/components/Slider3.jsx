import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/grid';


import { Grid, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <div className='slide3-container'>
      <div className="top">
        <div className="top2">
            <span className='slide'></span>
            <p>지금 이슈가 되는 아티스트의 인기 컨텐츠입니다.</p>
        </div>
        <div className='btns2'>
            <span className="prev2"></span>
            <span className="next2"></span>
        </div>
      </div>
      
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={3}
        slidesPerGroup={3}
        pagination={{
          clickable: true,
        }}
        navigation={{
            nextEl: '.next',
            prevEl: '.prev',
        }}
        modules={[Grid, Navigation]}
        className="myslide3"
      >
        <SwiperSlide className='slide1'>
            <div className="img"></div>
            <h3>불씨</h3>
            <p className='gray'>비투비</p>
            <p className='green'>멜론TV</p>
        </SwiperSlide>
        <SwiperSlide className='slide2'>
            <div className="img"></div>
            <h3>Hit the Floor</h3>
            <p className='gray'>tripleS (트리플에스)</p>
            <p className='green'>멜론TV</p>
        </SwiperSlide>
        <SwiperSlide className='slide3'>
            <div className="img"></div>
            <h3>Unconditional</h3>
            <p className='gray'>재현(JAEHYUN)</p>
            <p className='green'>멜론TV</p>
        </SwiperSlide>
        <SwiperSlide className='slide4'>
            <div className="img"></div>
            <h3>9th MINI ALBUM [導火線]</h3>
            <p className='gray'>더보이즈 (THE BOYZ)</p>
            <p className='green'>멜론TV</p>
        </SwiperSlide>
        <SwiperSlide className='slide5'>
            <div className="img"></div>
            <h3>ON MY BIKE</h3>
            <p className='gray'>퍼플키스 (PURPLE KISS)</p>
            <p className='green'>멜론TV</p>
        </SwiperSlide>
        <SwiperSlide className='slide6'>
            <div className="img"></div>
            <h3>역성</h3>
            <p className='gray'>이승윤</p>
            <p className='green'>멜론TV</p>
        </SwiperSlide>
        <SwiperSlide className='slide7'>
            <div className="img"></div>
            <h3>재즈의 명가, 블루노트 레코드가 걸어온 길</h3>
            <p className='gray'>블루노트</p>
            <p className='green'>멜론매거진</p>
        </SwiperSlide>
        <SwiperSlide className='slide8'>
            <div className="img"></div>
            <h3>신이 내린 목소리, 박효신의 데뷔 25주년</h3>
            <p className='gray'>트렌드 클리핑</p>
            <p className='green'>멜론매거진</p>
        </SwiperSlide>
        <SwiperSlide className='slide9'>
            <div className="img"></div>
            <h3>ODD YOUTH (오드유스) 'THAT'S ME' MV 제작 촬영 현장</h3>
            <p className='gray'>비하인드 컷</p>
            <p className='green'>멜론매거진</p>
        </SwiperSlide>
        <SwiperSlide className='slide10'>
            <div className="img"></div>
            <h3>G-DRAGON, 그가 돌아왔다</h3>
            <p className='gray'>트렌드 클리핑</p>
            <p className='green'>멜론매거진</p>
        </SwiperSlide>
        <SwiperSlide className='slide11'>
            <div className="img"></div>
            <h3>한 눈에 보는 11월 첫째 주 빌보드 소식</h3>
            <p className='gray'>위클리 뮤직 뉴스</p>
            <p className='green'>멜론매거진</p>
        </SwiperSlide>
        <SwiperSlide className='slide12'>
            <div className="img"></div>
            <h3>BABYMONSTER 1st FULL ALBUM [DRIP] 재킷 촬영 현장</h3>
            <p className='gray'>매거진 이벤트</p>
            <p className='green'>멜론매거진</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
