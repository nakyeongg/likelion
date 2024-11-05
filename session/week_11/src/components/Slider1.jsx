import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';


import { Grid, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <div className='slide1-container'>
        <div className="top">
            <span></span>
        <div className='btns'>
            <span className="prev"></span>
            <span className="next"></span>
        </div>
        </div>
        <Swiper
            slidesPerView={3}
            grid={{
                rows: 2,
            }}
            spaceBetween={0}
            slidesPerGroup={3}
            pagination={{
                clickable: true,
            }}
            navigation={{
                nextEl: '.next',
                prevEl: '.prev',
            }}
            modules={[Grid, Navigation]}
            className="myslide1"
        >
            <SwiperSlide className='slide1'>
                <div className='singer'>벤</div>
                <div className='hover'>
                    <p>바보야</p>
                    <p>벤</p>
                    <div className='btn'></div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide2'>
                <div className='singer'>윤정년, 매란국극단</div>
                <div className='hover'>
                    <p>정년이 OST Part 4 : 목포의 청춘&자명고</p>
                    <p>윤정년, 매란국극단</p>
                    <div className='btn'></div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide3'>
                <div className='singer'>이예준</div>
                <div className='hover'>
                    <p>이 소설의 끝을 다시 써보려 해</p>
                    <p>이예준</p>
                    <div className='btn'></div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide4'>
                <div className='singer'>박제업</div>
                <div className='hover'>
                    <p>다시,별 #03</p>
                    <p>박제업</p>
                    <div className='btn'></div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide5'>
                <div className='singer'>후이, 오나예</div>
                <div className='hover'>
                    <p>정숙한 세일즈 OST Part.4</p>
                    <p>후이, 오나예</p>
                    <div className='btn'></div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide6'>
                <div className='singer'>이라온</div>
                <div className='hover'>
                    <p>아시나요</p>
                    <p>이라온</p>
                    <div className='btn'></div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide7'>
                <div className='singer'>신예영</div>
                <div className='hover'>
                    <p>사라져가는 모든 것들의 (청설 X 신예영)</p>
                    <p>신예영</p>
                    <div className='btn'></div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide8'>
                <div className='singer'>오월오일 ( 五月五日 )</div>
                <div className='hover'>
                    <p>Look My Moon</p>
                    <p>오월오일 ( 五月五日 )</p>
                    <div className='btn'></div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide9'>
                <div className='singer'>행로난</div>
                <div className='hover'>
                    <p>심장의 언어: 플라즈마</p>
                    <p>행로난</p>
                    <div className='btn'></div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide10'>
                <div className='singer'>Joe Layne</div>
                <div className='hover'>
                    <p>Dream Paradise</p>
                    <p>Joe Layne</p>
                    <div className='btn'></div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide11'>
                <div className='singer'>임지훈</div>
                <div className='hover'>
                    <p>40주년 기념 임지훈 [作品集] ‘크레용’</p>
                    <p>임지훈</p>
                    <div className='btn'></div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide12'>
                <div className='singer'>$up! (수피)</div>
                <div className='hover'>
                    <p>now or never</p>
                    <p>$up! (수피)</p>
                    <div className='btn'></div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide13'>
                <div className='singer'>향니</div>
                <div className='hover'>
                    <p>모르는 척</p>
                    <p>향니</p>
                    <div className='btn'></div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide14'>
                <div className='singer'>여규호</div>
                <div className='hover'>
                    <p>푸르른 밤</p>
                    <p>여규호</p>
                    <div className='btn'></div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide15'>
                <div className='singer'>인챈터</div>
                <div className='hover'>
                    <p>미완성</p>
                    <p>인챈터</p>
                    <div className='btn'></div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide16'>
                <div className='singer'>키코 (Kik5o)</div>
                <div className='hover'>
                    <p>NIGHTMARE</p>
                    <p>키코 (Kik5o)</p>
                    <div className='btn'></div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide17'>
                <div className='singer'>란 (RAN)</div>
                <div className='hover'>
                    <p>본능적인 그대 OST Part.3</p>
                    <p>란 (RAN)</p>
                    <div className='btn'></div>
                </div>
            </SwiperSlide>
            <SwiperSlide className='slide18'>
                <div className='singer'>그래쓰 (GRASS)</div>
                <div className='hover'>
                    <p>Heroine</p>
                    <p>그래쓰 (GRASS)</p>
                    <div className='btn'></div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  );
}
