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
            <div data-aos="fade-left" data-aos-duration="700" className="introduction">
                <div className="introduction-text">
                    <h1 className="lh-lg h2">طراحی دکوراسیون داخلی خود را به تیم آرت چوب بسپارید</h1>
                    <p className="lh-lg leady fw-light">تیم آرت چوب همواره کوشیده تا محیطی دلنشین و مورد پسند مشتریان خود را طراحی و اجرا کند .آرت چوب مفتخر است متناسب با سلیقه شما پذیرایی، آشپزخانه و اتاق خواب منزل شما و انواع محیط های اداری و تفریحی را طراحی کند. همچنین با تولید انواع وسایل چوبی سعی بر این دارد که بهترین کحصولات را به مشتریان خود ارائه دهد.</p>
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