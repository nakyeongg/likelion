import React, {useState} from 'react'
import { top, pop, artist } from './ChartData'

const Chart = () => {
    const [click, setClick] = useState('top');
    return (
        <div className='chart-container'>
            <div className="top">
                <span></span>
                <p>2024.11.04 22:00 기준</p>
            </div>
            {/* 이제 차트 순위 부분 */}
            <header>
                <span onClick={() => setClick('top')}></span>
                <span onClick={() => setClick('pop')}></span>
                <span onClick={() => setClick('artist')}></span>
            </header>

            {/* top100 */}
            {click=='top' && (
                <div className='top-container'>
                {top.map((song, index) => (
                    <div className='song'>
                        <div className='origin'>
                            <p className='score'>{song.score}</p>
                            <p className='up'>- 0</p>
                            <p className='title'>{song.title}</p>
                            <p className='singer'>{song.singer}</p>
                        </div>
                        <div className='hover'>
                            <p className='score'>{song.score}</p>
                            <p className='up'>- 0</p>
                            <img src={song.img} alt="song img" />
                            <div>
                                <p className='title'>{song.title}</p>
                                <p className='singer'>{song.singer}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <span className='more'>
                    더보기
                    <span></span>
                </span>
                </div>
            )}

            {/* pop */}
            {click=='pop' && (
                <div className='pop-container'>
                {pop.map((song, index) => (
                    <div className='song'>
                        <div className='origin'>
                            <p className='score'>{song.score}</p>
                            <p className='up'>- 0</p>
                            <p className='title'>{song.title}</p>
                            <p className='singer'>{song.singer}</p>
                        </div>
                        <div className='hover'>
                            <p className='score'>{song.score}</p>
                            <p className='up'>- 0</p>
                            <img src={song.img} alt="song img" />
                            <div>
                                <p className='title'>{song.title}</p>
                                <p className='singer'>{song.singer}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <span className='more'>
                    더보기
                    <span></span>
                </span>
                </div>
            )}

            {/* 아티스트 */}
            {click=='artist' && (
                <div className='artist-container'>
                {artist.map((song, index) => (
                    <div className='song'>
                        <div className='origin'>
                            <p className='score'>{song.score}</p>
                            <p className='up'>- 0</p>
                            <p className='singer'>{song.singer}</p>
                            <span></span>
                        </div>
                        <div className='hover'>
                            <p className='score'>{song.score}</p>
                            <p className='up'>- 0</p>
                            <img src={song.img} alt="song img" />
                            <div>
                                <p className='singer'>{song.singer}</p>
                            </div>
                            <span></span>
                        </div>
                    </div>
                ))}
                </div>
            )}
        </div>
    )
}

export default Chart
