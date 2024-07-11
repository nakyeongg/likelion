import React, { useState } from 'react'
import '../assets/scss/popular.scss'
import image2 from '../assets/img/Rectangle 135.png'
import image3 from '../assets/img/Rectangle 136.png'
import image4 from '../assets/img/Rectangle 137.png'
import image5 from '../assets/img/Rectangle 138.png'
import image6 from '../assets/img/Rectangle 139.png'
import image7 from '../assets/img/Rectangle 140.png'
import image8 from '../assets/img/Rectangle 141.png'

import image9 from '../assets/img/Rectangle 142.png'
import image10 from '../assets/img/Rectangle 143.png'
import image11 from '../assets/img/Rectangle 144.png'
import image12 from '../assets/img/Rectangle 145.png'
import image13 from '../assets/img/Rectangle 146.png'
import image14 from '../assets/img/Rectangle 147.png'
import image15 from '../assets/img/Rectangle 148.png'
import image16 from '../assets/img/Rectangle 149.png'

import image17 from '../assets/img/Rectangle 151.png'
import image18 from '../assets/img/Rectangle 152.png'
import image19 from '../assets/img/Rectangle 153.png'
import image20 from '../assets/img/Rectangle 154.png'
import image21 from '../assets/img/Rectangle 155.png'
import image22 from '../assets/img/Rectangle 156.png'
import image23 from '../assets/img/Rectangle 157.png'
import image24 from '../assets/img/Rectangle 158.png'

import image25 from '../assets/img/Rectangle 160.png'
import image26 from '../assets/img/Rectangle 161.png'
import image27 from '../assets/img/Rectangle 162.png'
import image28 from '../assets/img/Rectangle 163.png'
import image29 from '../assets/img/Rectangle 164.png'
import image30 from '../assets/img/Rectangle 165.png'
import image31 from '../assets/img/Rectangle 166.png'
import image32 from '../assets/img/Rectangle 167.png'

import image33 from '../assets/img/Rectangle 169.png'
import image34 from '../assets/img/Rectangle 170.png'
import image35 from '../assets/img/Rectangle 171.png'
import image36 from '../assets/img/Rectangle 172.png'
import image37 from '../assets/img/Rectangle 173.png'
import image38 from '../assets/img/Rectangle 174.png'
import image39 from '../assets/img/Rectangle 175.png'



const Popular = () => {

    const [click, setClick] = useState(1)

    const clickCategory =(index) => {
        setClick(index);
    }
  return (
    <div>
      <h3 className='popular-title'>지금 많이 찾는 상품</h3>
      <div className='popular-list'>
        <p onClick={()=> clickCategory(1)} style={{ fontWeight : click === 1 ? 'bold' : '400', textDecoration : click === 1 ? 'underline' : 'none' }}>#냉감티셔츠</p>
        <p onClick={()=> clickCategory(2)} style={{ fontWeight : click === 2 ? 'bold' : '400', textDecoration : click === 2 ? 'underline' : 'none' }}>#에샤페</p>
        <p onClick={()=> clickCategory(3)} style={{ fontWeight : click === 3 ? 'bold' : '400', textDecoration : click === 3 ? 'underline' : 'none' }}>#반팔티셔츠</p>
        <p onClick={()=> clickCategory(4)} style={{ fontWeight : click === 4 ? 'bold' : '400', textDecoration : click === 4 ? 'underline' : 'none' }}>#페이토&샌들</p>
        <p onClick={()=> clickCategory(5)} style={{ fontWeight : click === 5 ? 'bold' : '400', textDecoration : click === 5 ? 'underline' : 'none' }}>#인터런</p>
      </div>

      <div className='popular-big-container' style={{ display : click === 1 ? 'inline-flex' : 'none' }}>
        <div className='popular-container'>
            <img src={ image3 }/>
            <p>공용   컴포트핏   라이프스타일</p>
            <h4>&lt;COLD WAVE&gt; 그래픽 프린트 냉감 티셔츠</h4>
            <p>49,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image3 }/>
            <p>공용   컴포트핏   라이프스타일</p>
            <h4>&lt;COLD WAVE&gt; 그래픽 프린트 냉감 티셔츠</h4>
            <p>49,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image4 }/>
            <p>공용   컴포트핏   라이프스타일</p>
            <h4>&lt;COLD WAVE&gt; 그래픽 프린트 냉감 티셔츠</h4>
            <p>49,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image5 }/>
            <p>공용   컴포트핏   라이프스타일</p>
            <h4>&lt;COLD WAVE&gt; 그래픽 프린트 냉감 티셔츠</h4>
            <p>49,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image6 }/>
            <p>공용   컴포트핏   라이프스타일</p>
            <h4>&lt;COLD WAVE&gt; 그래픽 프린트 냉감 티셔츠</h4>
            <p>49,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image7 }/>
            <p>공용   컴포트핏   라이프스타일</p>
            <h4>&lt;COLD WAVE&gt; 그래픽 프린트 냉감 티셔츠</h4>
            <p>49,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image8 }/>
            <p>공용   컴포트핏   라이프스타일</p>
            <h4>&lt;COLD WAVE&gt; 그래픽 프린트 냉감 티셔츠</h4>
            <p>49,000원</p>
        </div>
      </div>

      
      <div className='popular-big-container' style={{ display : click === 2 ? 'inline-flex' : 'none' }}>
        <div className='popular-container'>
            <img src={ image9 }/>
            <p>공용</p>
            <h4>휠라 에샤페 VC</h4>
            <p>89,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image10 }/>
            <p>공용</p>
            <h4>휠라 에샤페 VC</h4>
            <p>89,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image11 }/>
            <p>공용</p>
            <h4>휠라 에샤페 VC</h4>
            <p>89,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image12 }/>
            <p>공용</p>
            <h4>휠라 에샤페 VC</h4>
            <p>89,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image13 }/>
            <p>공용</p>
            <h4>휠라 에샤페 VC</h4>
            <p>89,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image14 }/>
            <p>공용</p>
            <h4>휠라 에샤페 VC</h4>
            <p>89,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image15 }/>
            <p>공용</p>
            <h4>휠라 에샤페 VC</h4>
            <p>89,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image16 }/>
            <p>공용</p>
            <h4>휠라 에샤페 VC</h4>
            <p>89,000원</p>
        </div>
      </div>

      
      <div className='popular-big-container' style={{ display : click === 3 ? 'inline-flex' : 'none' }}>
        <div className='popular-container'>
            <img src={ image17 }/>
            <p>여성</p>
            <h4>수피마 사이드배색 반팔티</h4>
            <p>39,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image18 }/>
            <p>여성</p>
            <h4>수피마 사이드배색 반팔티</h4>
            <p>39,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image19 }/>
            <p>여성</p>
            <h4>수피마 사이드배색 반팔티</h4>
            <p>39,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image20 }/>
            <p>여성</p>
            <h4>수피마 사이드배색 반팔티</h4>
            <p>39,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image21 }/>
            <p>여성</p>
            <h4>수피마 사이드배색 반팔티</h4>
            <p>39,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image22 }/>
            <p>여성</p>
            <h4>수피마 사이드배색 반팔티</h4>
            <p>39,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image23 }/>
            <p>여성</p>
            <h4>수피마 사이드배색 반팔티</h4>
            <p>39,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image24 }/>
            <p>여성</p>
            <h4>수피마 사이드배색 반팔티</h4>
            <p>39,000원</p>
        </div>
      </div>

      
      <div className='popular-big-container' style={{ display : click === 4 ? 'inline-flex' : 'none' }}>
        <div className='popular-container'>
            <img src={ image25 }/>
            <p>공용</p>
            <h4>슬릭워이비 샌들</h4>
            <p>79,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image26 }/>
            <p>공용</p>
            <h4>슬릭워이비 샌들</h4>
            <p>79,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image27 }/>
            <p>공용</p>
            <h4>슬릭워이비 샌들</h4>
            <p>79,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image28 }/>
            <p>공용</p>
            <h4>슬릭워이비 샌들</h4>
            <p>79,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image29 }/>
            <p>공용</p>
            <h4>슬릭워이비 샌들</h4>
            <p>79,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image30 }/>
            <p>공용</p>
            <h4>슬릭워이비 샌들</h4>
            <p>79,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image31 }/>
            <p>공용</p>
            <h4>슬릭워이비 샌들</h4>
            <p>79,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image32 }/>
            <p>공용</p>
            <h4>슬릭워이비 샌들</h4>
            <p>79,000원</p>
        </div>
      </div>

      
      <div className='popular-big-container' style={{ display : click === 5 ? 'inline-flex' : 'none' }}>
        <div className='popular-container'>
            <img src={ image33 }/>
            <p>공용</p>
            <h4>휠라 인터런</h4>
            <p>99,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image34 }/>
            <p>공용</p>
            <h4>휠라 인터런</h4>
            <p>99,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image35 }/>
            <p>공용</p>
            <h4>휠라 인터런</h4>
            <p>99,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image36 }/>
            <p>공용</p>
            <h4>휠라 인터런</h4>
            <p>99,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image37 }/>
            <p>공용</p>
            <h4>휠라 인터런</h4>
            <p>99,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image38 }/>
            <p>공용</p>
            <h4>휠라 인터런</h4>
            <p>99,000원</p>
        </div>
        <div className='popular-container'>
            <img src={ image39 }/>
            <p>공용</p>
            <h4>휠라 인터런</h4>
            <p>99,000원</p>
        </div>
      </div>

      
    </div>
  )
}

export default Popular
