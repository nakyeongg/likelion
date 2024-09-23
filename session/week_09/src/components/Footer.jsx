import React from 'react'
import foot1 from '../assets/img/footer/foot1.svg'
import foot2 from '../assets/img/footer/foot2.svg'
import arrow from '../assets/img/footer/arrow.svg'
import logo from '../assets/img/footer/logo.svg'

const Footer = () => {


    return (
        <div className='footer-container'>
            <div className='top'>
                <div className="box left">
                    <img src={foot1} alt="" />
                    <div>
                        <h3>
                            선생님 반가워요!
                            <br />
                            티솔루션과 첫 만남을 함께 하시겠어요?
                        </h3>
                        <a href="">티솔루션 바로가기
                            <img src={arrow} alt="화살표" />
                        </a>
                    </div>
                </div>
                <div className="box right">
                    <img src={foot2} alt="" />
                    <div>
                        <h3>
                            지학사의 2022 개정 교육과정
                            <br />
                            새로운 교과서를 응원해!
                        </h3>
                        <a href="">한줄평 이벤트 바로가기
                            <img src={arrow} alt="화살표" />
                        </a>
                    </div>
                </div>
            </div>
            <div className='bottom-container'>
                <div className='bottom'>
                    <img src={logo} alt="" />
                    <p>
                        서울특별시 마포구 신촌로6길 5 (주)지학사 대표이사 : 권준구 사업등록번호 : 105-81-31452
                        <br />
                        통신판매업신고 : 제2020-서울마포-0362호 E-mail : WEBMASTER@JIHAK.CO.KR
                        <br />
                        대표번호 : 02-330-5200 교과서 구입문의 : 02-330-5303 독서평설 정기구독 문의 : 02-3142-2002
                        <br />
                        COPYRIGHT©2015 JIHAKSA PUBLISHING CO.LTD. ALL RIGHT RESERVED.
                        <br />
                        (주)지학사의 콘텐츠를 사전 허가 없이 학교수업 외의 목적으로 이용하는 경우(불법복제,전송,유통 등) 저작권법 제25조에 의해 법적 처벌을 받을 수 있습니다.
                    </p>                    
                </div>
            </div>
        </div>
    )
}

export default Footer
