import React from 'react'
import link from '../assets/img/page/link.svg';
import top from '../assets/img/page/top.svg';

const Aside = () => {

    const copy = (text: string) => {
        try {
            navigator.clipboard.writeText(text);
            alert('링크가 복사되었습니다.');
        } catch(error) {
            alert('링크 복사에 실패하였습니다.')
        }
    };

    return (
        <div className='aside-container'>
            <button onClick={() => copy('https://textbook.jihak.co.kr/main-pr.php')}>
                <img src={link} alt="" />
            </button>
            <a href="#">
                <img src={top} alt="" />
            </a>
        </div>
    )
}

export default Aside
