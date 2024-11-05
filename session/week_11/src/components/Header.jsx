import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='line'></div>
            <header>
                <span className='left'></span>
                <div className='right'>
                    <Link to='/ticket'><span className='r1'></span></Link>
                    <div className='line'></div>
                    <span className='r2'></span>
                    <div className='line'></div>
                    <span className='r3'></span>
                    <div className='line'></div>
                    <span className='r4'></span>
                </div>
            </header>
            <div className='grayline'></div>
        </div>
    )
}

export default Header
