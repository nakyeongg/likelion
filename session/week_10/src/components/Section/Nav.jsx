import React from 'react'
import { Link } from 'react-router-dom'
import home from '../../assets/img/icon/home.svg'
import like from '../../assets/img/icon/like.svg'
import search from '../../assets/img/icon/search.svg'
import mypage from '../../assets/img/icon/mypage.svg'

const Nav = () => {
    return (
        <div className='nav-container'>
            <Link to='/'><img src={home} alt="" /></Link>
            <Link to='/like'><img src={like} alt="" /></Link>
            <Link to='/search'><img src={search} alt="" /></Link>
            <Link to='/mypage'><img src={mypage} alt="" /></Link>
        </div>
    )
}

export default Nav