import React from 'react'
import Logo from '../assets/img/Login/logo.png'
import qr from '../assets/img/Login/qr.png'
import information from '../assets/img/Login/information.png'
import kakao from '../assets/img/Login/kakao.png'
import melon from '../assets/img/Login/melon.png'

const Login = () => {
    return (
        <div className='login-container container'>
            <div className='line'></div>
            <div className='logo'>
                <img src={Logo} alt="멜론 로고 이미지" />
            </div>
            <div>
                <div className='top'>
                    <img src={qr} alt="큐알 이미지" className='qr'/>
                    <p>카카오 QR코드 로그인</p>
                    <img src={information} alt="정보 이미지" className='information'/>
                </div>
                <div className='kakao'>
                    <div>
                        <img src={kakao} alt="" />
                        <p>카카오계정 로그인</p>                        
                    </div>
                </div>
                <div className='melon'>
                    <div>
                        <img src={melon} alt="" />
                        <p>멜론아이디 로그인</p>                        
                    </div>
                </div>
            </div>
            <a href="">회원가입</a>
            <div className='bottom'>
                <a href="">이용약관</a>
                <a href=""className='center'>위치기반서비스 이용약관</a>
                <a href="">개인정보처리방침</a>
            </div>
            <p className='call'>문의전화 : 1566-7727 (평일 09:00-18:00, 유료)</p>
            <p className='end'>© Kakao Entertainment Corp.</p>
        </div>
    )
}

export default Login
