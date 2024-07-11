import React from 'react'
import image10 from '../assets/img/image 10.png'
import image11 from '../assets/img/image 11.png'
import image2 from '../assets/img/Rectangle 178.png'
import image3 from '../assets/img/Rectangle 179.png'
import image4 from '../assets/img/Rectangle 180.png'
import image5 from '../assets/img/Rectangle 181.png'
import image6 from '../assets/img/Rectangle 182.png'
import image7 from '../assets/img/Rectangle 183.png'
import image8 from '../assets/img/Rectangle 184.png'
import image9 from '../assets/img/Rectangle 185.png'
import image1 from '../assets/img/Rectangle 186.png'
import image12 from '../assets/img/Rectangle 187.png'
import camera from '../assets/img/free-icon-font-camera-3917271 1.svg'
import footer from '../assets/img/footer.png'
import logo from '../assets/img/logo.png'
import '../assets/scss/exhibition.scss'


const Exhibition = () => {
  return (
    <div>
        <div>
            <h3 className='exhibition-title'>기획전</h3>
            <div className='exhibition-big-container'>
                <div>
                    <img src={ image10}/>
                    <div className='exhibition-container'> 
                        <h3>FILA CUSTOM STUDIO</h3>
                        <p>최상의 플레이를 위한 맞춤형 테니스화</p>
                        <button>자세히 보기</button>
                    </div>
                </div>
                <div>
                    <img src={ image11}/>
                    <div className='exhibition-container'>
                        <h3>Pertex LIfe</h3>
                        <p>휠라 퍼텍스 시리즈와 함께하는 퍼텍스 라이프</p>
                        <button>자세히 보기</button>
                    </div>
                </div>                
            </div>
        </div>
        <div className='img-big-container'>
            <div className='img-container-top'>
                <img src={camera} alt="카메라 아이콘" />
                <p>@fila_korea</p>
            </div>
            <div className='img-container'>
                <div className='img-box'>
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                    <img src={image5} alt="" />
                    <img src={image6} alt="" />    
                </div>
                <div className='img-box'>
                    <img src={image7} alt="" />
                    <img src={image8} alt="" />
                    <img src={image9} alt="" />
                    <img src={image1} alt="" />
                    <img src={image12} alt="" />
                </div>
            </div>
        </div>
        <footer>
            <img src={logo} alt="" className='logo-img'/>
            <img src={footer} alt="" className='footer-img'/>
        </footer>
    </div>
    
  )
}

export default Exhibition
