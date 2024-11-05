import React from 'react'
import Header from '../components/Header'
import Top from '../components/Top'
import Slider1 from '../components/Slider1'
import Slider2 from '../components/Slider2'
import Slider3 from '../components/Slider3'
import Chart from '../components/Chart'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'


const Home = () => {
    return (
        <div className='home-container container'>
            <Header />
            <Top />
            <div className='main-top'>
                <Slider1 />
                <Slider2 />
                <div className='right'>
                    <div className='login'>
                        <div className='top'>
                            <p>멜론을 더 안전하게 이용하세요.</p>
                            <p>회원가입</p>
                        </div>
                        <Link to='/login'><div className='btn'>로그인</div></Link>
                    </div>
                    <div className='event'></div>
                </div>
            </div>
            <div className='banner'></div>
            <div className='main-bottom'>
                <Slider3 />
                <Chart />
            </div>
            <Footer />
        </div>
    )
}

export default Home
