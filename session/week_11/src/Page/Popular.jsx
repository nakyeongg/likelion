import React from 'react'
import { PopularData } from '../components/PopularData'
import Header from '../components/Header'
import Top from '../components/Top'
import Footer from '../components/Footer'

const Popular = () => {
    return (
        <div className='popular-container'>
            <Header />
            <Top />
            <div className='chart'>
                <h1>TOP30</h1>
                <p className='now-time'>2024.11.05 <strong>06:00</strong></p>
                <div className='btns'>
                    <div className='btn'>
                        <span></span>
                        <p>셔플듣기</p>
                    </div>
                    <div className='btn'>
                        <span></span>
                        <p>전체듣기</p>
                    </div>
                    <div className='btn'>
                        <span></span>
                        <p>듣기</p>
                    </div>
                    <div className='btn'>
                        <span></span>
                        <p>담기</p>
                    </div>
                    <div className='btn'>
                        <span></span>
                        <p>다운</p>
                    </div>
                    <div className='btn'>
                        <span></span>
                        <p>FLAC</p>
                    </div>
                    <div className='btn'>
                        <span></span>
                        <p>선물</p>
                    </div>
                </div>
                <div className='desc'>
                    <input type="checkbox" />
                    <p>순위</p>
                    <p>곡정보</p>
                    <p>앨범</p>
                    <p>좋아요</p>
                    <p>듣기</p>
                    <p>담기</p>
                    <p>다운</p>
                    <p>뮤비</p>
                </div>
                <div className='top30'>
                    {PopularData.map((song) => (
                        <div className='song'>
                            <input type="checkbox" />
                            <p className='score'>{song.score}</p>
                            <img src={song.img} alt="" />
                            <div className='desc2'>
                                <h3 className='title'>{song.title}</h3>
                                <h4 className='singer'>{song.singer}</h4>
                            </div>
                            <p className='album'>{song.album}</p>
                            <div className="like">
                                <span></span>
                                <p>{song.like}</p>
                            </div>
                            <span className='listen'></span>
                            <span className='plus'></span>
                            <span className='down'></span>
                            <span className='video'></span>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Popular
