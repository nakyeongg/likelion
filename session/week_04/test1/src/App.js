import React,{Component} from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";

function App()
{
  return(
    <div>
      <Header />
      <Main myName="윤나경"/>
      <Footer />
    </div>
  )
}

export default App;