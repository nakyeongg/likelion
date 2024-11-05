import React from 'react'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='top'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="bottom">
            <div className="nav">
                <div>이용약관</div>
                <div>위치기반서비스 이용약관</div>
                <div>개인정보처리방침</div>
                <div>청소년보호정책</div>
                <div>제휴/프로모션문의</div>
                <div>이메일주소무단수집거부</div>
                <div className='no'>파트너센터</div>
            </div>
            <div className='end'>
                <p><strong>(주)카카오엔터테인먼트  </strong>경기도 성남시 분당구 판교역로 221</p>
                <p>공동대표이사 : 권기수, 장윤중</p>
                <p>사업자등록번호 : 220-88-02594</p>
                <p className='no'>통신판매업신고번호 : 2018-성남분당B-0004 사업자정보확인</p>
                <br />
                <p>문의전화 : 1566-7727 (평일 09:00-18:00, 유료)</p>
                <p>이메일 : melon_info@kakaoent.com</p>
                <p>호스팅서비스사업자 : (주)카카오엔터테인먼트</p>
                <p className='no'>© Kakao Entertainment Corp.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
