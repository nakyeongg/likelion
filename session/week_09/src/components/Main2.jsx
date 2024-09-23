import React from 'react'
import math from '../assets/img/main2/math.png';
import society from '../assets/img/main2/society.png';
import science from '../assets/img/main2/science.png';
import music from '../assets/img/main2/music.png';
import art from '../assets/img/main2/art.png';
import pe from '../assets/img/main2/pe.png';
import math2 from '../assets/img/main2/math2.png';
import society2 from '../assets/img/main2/society2.png';
import science2 from '../assets/img/main2/science2.png';
import music2 from '../assets/img/main2/music2.png';
import art2 from '../assets/img/main2/art2.png';
import pe2 from '../assets/img/main2/pe2.png';
import book1 from '../assets/img/main2/book1.png';
import book2 from '../assets/img/main2/book2.png';
import book3 from '../assets/img/main2/book3.png';
import book4 from '../assets/img/main2/book4.png';
import book5 from '../assets/img/main2/book5.png';
import book6 from '../assets/img/main2/book6.png';
import book7 from '../assets/img/main2/book7.png';
import book8 from '../assets/img/main2/book8.png';
import book9 from '../assets/img/main2/book9.png';

const Main2 = () => {
    return (
        <div>
            <div className='main2-container' id="main2-container">
                <div className='top'>
                    <div className='left'>
                        <div>초등 3학년 교과서</div>
                        <h2>
                            선생님과 학생을 생각하는
                            <br />
                            지학사 교과서</h2>
                        <p>
                            가르치는 선생님과, 배우는 학생의 마음을 모두 생각한 2022 개정 교육과정 교과서.
                            <br />
                            항상 학교 현장을 고민하는 지학사 교과서가
                            <br />
                            그동안의 경험을 모아 더 나은 수업을 도와드립니다.
                        </p>
                    </div>
                    <div className='right'>
                        <div className="box">
                            <img src={math} alt="" className='none'/>
                            <img src={math2} alt="" className='display'/>
                            <p>수학</p>
                        </div>
                        <div className="box">
                            <img src={society} alt="" className='none'/>
                            <img src={society2} alt="" className='display'/>
                            <p>사회</p>
                        </div>
                        <div className="box">
                            <img src={science} alt="" className='none'/>
                            <img src={science2} alt="" className='display'/>
                            <p>과학</p>
                        </div>
                        <div className="box">
                            <img src={music} alt="" className='none'/>
                            <img src={music2} alt="" className='display'/>
                            <p>음악</p>
                        </div>
                        <div className="box">
                            <img src={art} alt="" className='none'/>
                            <img src={art2} alt="" className='display'/>
                            <p>미술</p>
                        </div>
                        <div className="box">
                            <img src={pe} alt="" className='none'/>
                            <img src={pe2} alt="" className='display'/>
                            <p>체육</p>
                        </div>
                    </div>
                </div>
                <div className='bottom'>

                </div>
            </div>
            <div className='main2-bottom'>
                <div></div>
                <div className='img'>
                    <img src={book1} alt="" />
                    <div className='none back-color'></div>
                    <div className='none btn'>자세히 보기</div>
                </div>
                <div className='img'>
                    <img src={book2} alt="" />
                    <div className='none back-color'></div>
                    <div className='none btn'>자세히 보기</div>
                </div>
                <div></div>
                <div className='img'>
                    <img src={book3} alt="" />
                    <div className='none back-color'></div>
                    <div className='none btn'>자세히 보기</div>
                </div>
                <div className='img'>
                    <img src={book4} alt="" />
                    <div className='none back-color'></div>
                    <div className='none btn'>자세히 보기</div>
                </div>
                <div></div>
                <div></div>
                <div className='img'>
                    <img src={book5} alt="" />
                    <div className='none back-color'></div>
                    <div className='none btn'>자세히 보기</div>
                </div>
                <div className='img'>
                    <img src={book6} alt="" />
                    <div className='none back-color'></div>
                    <div className='none btn'>자세히 보기</div>
                </div>
                <div></div>
                <div className='img'>
                    <img src={book7} alt="" />
                    <div className='none back-color'></div>
                    <div className='none btn'>자세히 보기</div>
                </div>
                <div className='img'>
                    <img src={book8} alt="" />
                    <div className='none back-color'></div>
                    <div className='none btn'>자세히 보기</div>
                </div>
                <div></div>
                <div className='img'>
                    <img src={book9} alt="" />
                    <div className='none back-color'></div>
                    <div className='none btn'>자세히 보기</div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Main2
