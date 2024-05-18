import React,{useState} from 'react';

const Main =(props)=> {
const [myName,setMyName]=useState("ynk")
    function changeName() {        
        setMyName(myName === "ynk"?"나경":"ynk")
    }
    return (
        <div>
            <h1>안녕하세요. {myName}입니다.</h1>
            <button onClick={changeName}>Change</button>
        </div>
    );
}

export default Main;