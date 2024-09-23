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
import book1 from '../assets/img/main3/book1.png';
import book2 from '../assets/img/main3/book2.png';
import book3 from '../assets/img/main3/book3.png';
import book4 from '../assets/img/main3/book4.png';
import book5 from '../assets/img/main3/book5.png';
import book6 from '../assets/img/main3/book6.png';
import book7 from '../assets/img/main3/book7.png';
import book8 from '../assets/img/main3/book8.png';
import book9 from '../assets/img/main3/book9.png';

const Main3 = () => {
    return (
        <div className='main3-container' id="main3-container">
            <div>
                <div className='left'>
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
                <div className='right'>
                    <div>
                        초등 4학년 교과서
                    </div>
                    <h2>
                        한 단계 더 성장하는
                        <br />
                        아이들과 선생님
                    </h2>
                    <p>
                        수업의 과정은 즐겁고, 성취는 보람찬 2022 개정 교육과정 교과서.
                        <br />
                        내용의 깊이는 더하고 과정은 즐겁게 구성한
                        <br />
                        지학사 교과서와 함게 새로운 수업을 경험해 보세요.
                    </p>
                </div>                
            </div>
            <div className='bottom'>
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

export default Main3
