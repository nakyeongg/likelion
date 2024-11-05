import React from 'react'
import Header from '../components/Header'
import Top from '../components/Top'
import Footer from '../components/Footer'

const Ticket = () => {
    return (
        <div className='ticket-container'>
            <Header />
            <Top />
            <div className='container'>
                <h1>멜론 이용권 구매</h1>
                <nav>
                    <div className='select'>추천 이용권</div>
                    <div>할인 특가</div>
                    <div>전체 이용권</div>
                    <div>이용권 선물</div>
                    <div>쿠폰 등록</div>
                    <div className='cash'>멜론캐쉬 충전</div>
                </nav>
                <div className='img'></div>
                <div className='pr'></div>
                <div className='prs'>
                    <div className='box1'>
                        <div className='img'></div>
                        <span>멜론뮤직어워드</span>
                        <p>국내 최대 음악 시상식</p>
                    </div>
                    <div className='box2'>
                        <div className='img'></div>
                        <span>VIP 혜택관</span>
                        <p>오래 쓸수록 혜택이 커지는!</p>
                    </div>
                    <div className='box3'>
                        <div className='img'></div>
                        <span>멜론 TV</span>
                        <p>무료 음악방송, 독점 스타 콘텐츠</p>
                    </div>
                    <div className='box4'>
                        <div className='img'></div>
                        <span>이벤트</span>
                        <p>스케일이 다른 이벤트 선물</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Ticket
