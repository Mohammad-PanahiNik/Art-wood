import React from "react"
import "./introduction.css"
import IntroductionImg from "../Assets/introduction.png"
import intro1 from "../Assets/intro-1.jpg"
import intro2 from "../Assets/intro-2.jpg"
import intro3 from "../Assets/intro-3.jpg"

const Introduction =()=>{
    return(
        <>
            <div className="introduction-img">
                <img src={IntroductionImg} alt=""></img>
            </div>
            <div className="introduction">
                <div className="introduction-text">
                    <h1 className="lh-lg h2 zi-1">طراحی آشپزخانه ی خود را به تیم آرت چوب بسپارید</h1>
                    <p className="lh-lg leady fw-light zi-1">تیم آرت چوب طی سالها همواره کوشیده تا خود را بروز نگهدارد و بهترین و زیباترین ها را برای مشتریان خود رقم بزند .تولید کننده انواع کابینت آشپزخانه کمد دیواری و درب های چوبی ساختمان در تهران.</p>
                    <button className="order-btn">نحوه سفارش</button>
                </div>
                <div className="introduction-imgs">
                    <img src={intro1} alt="" className="intro-imgs intro-img1"/>
                    <img src={intro2} alt="" className="intro-imgs intro-img2"/>
                    <img src={intro3} alt="" className="intro-imgs intro-img3"/>
                </div>
            </div>
        </>
    )
}
export default Introduction