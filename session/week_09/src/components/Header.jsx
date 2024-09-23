import React from 'react'

const Header = () => {
    return (
        <div className='header-big-container'>
            <div className="header-container">
                <a href="/">
                    <img src="https://textbook.jihak.co.kr/img/logo.svg" alt="" />
                </a>
                <div className='header-m'>
                    <a href="#main2-container"><p>초등 3학년 교과서</p></a>
                    <a href="#main3-container"><p>초등 4학년 교과서</p></a>
                </div>
                <div className='header-r'>
                    <a href="https://tsol.jihak.co.kr/" target="_blank" className='t-solution'><p>티솔루션</p></a>
                    <a href="https://textbook.jihak.co.kr/events_st.php">
                        <div>
                            <p>이벤트</p>
                            <div>EVENT</div>
                        </div>
                    </a>
                </div>
            </div>            
        </div>
    )
}

export default Header;
