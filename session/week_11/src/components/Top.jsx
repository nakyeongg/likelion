import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/img/home/logo.png';
import search from '../assets/img/home/search.svg'
import keyword from '../assets/img/home/keyword.png';

const Top = () => {
  return (
    <div className='top-container'>
        <div className='top'>
            <Link to='/'><img src={logo} alt="멜론 로고 이미지" className='logo' /></Link>
            <div className='search-box'>
                <input type="text" />
                <img src={search} alt="" className='search'/>
            </div>
            <img src={keyword} alt="" className='keyword' />
            <div className='top-keyword'>6. 나는 반딧불</div>
        </div>
        <div className='menu-box'>
            <div>
                <div className='box'>
                    <Link to='/popular'><span className="menu1"></span></Link>
                    <span className="menu2"></span>
                    <span className="menu3"></span>
                    <span className="menu4"></span>
                    <span className="menu5"></span>
                    <span className="menu6"></span>
                    <span className="menu7"></span>
                    <span className="menu8"></span>
                    <span className="menu9"></span>
                    <span className="menu10"></span>
                </div>
                <span className="menu11"></span>
            </div>
        </div>
    </div>
  )
}

export default Top
