import React from "react"
import "./introduction.css"
import IntroductionImg from "../Assets/introduction.png"

const Introduction =()=>{
    return(
        <>
            <div className="introduction-img">
                <img src={IntroductionImg} alt=""></img>
            </div>
            <div className="introduction">
                <div className="introduction-text">
                    <h1 className="lh-lg h2">طراحی آشپزخانه ی خود را به تیم آرت چوب بسپارید</h1>
                    <p className="lh-lg leady fw-light">تیم آرت چوب طی سالها همواره کوشیده تا خود را بروز نگهدارد و بهترین و زیباترین ها را برای مشتریان خود رقم بزند .تولید کننده انواع کابینت آشپزخانه کمد دیواری و درب های چوبی ساختمان در تهران</p>
                </div>
                <div className="introduction-imgs"></div>
            </div>
        </>
    )
}
export default Introduction