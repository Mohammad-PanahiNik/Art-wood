import React from "react"
import "./about-us.css"
import about1 from "../Assets/about-1.png"
import about2 from "../Assets/about-2.png"
import about3 from "../Assets/about-3.png"

const AboutUs =()=>{
    return(
        <div id="about" className="about-container">
            <div className="about-us" data-aos="fade-right" >
                <div className="about-us-text">
                    <h1 className="lh-lg h2 zi-1">درباره ما</h1>
                    <p className="lh-lg leady fw-light zi-1">
                    تیم آرت چوب از سال ۱۳۹۰ با بهره‌گیری از آخرین تکنولوژی‌های صنایع چوب و نیروهای متخصص، در زمینه تولید کابینت آشپزخانه، دکوراسیون داخلی و اداری فعالیت می‌نماید. این تیم با تمرکز بر کیفیت، طراحی‌های نوآورانه و رضایت مشتریان، به رشد و گسترش پایداری دست یافته است. از ابتدای فعالیت خود، آرت چوب به ارائه محصولاتی با استانداردهای بالا و جذابیت‌های بی‌نظیر متمایز شده است. این تلاش‌ها منجر به شناخته شدن آرت چوب به عنوان یک برند برجسته در عرصه صنایع چوب گردیده است.
                    </p>                
                </div>
                <div className="about-us-imgs">
                    <img src={about2} alt="" className="about-imgs about-img2"/>
                    <img src={about3} alt="" className="about-imgs about-img1"/>
                    <img src={about1} alt="" className="about-imgs about-img3"/>
                </div>
            </div>
        </div>
    )
}

export default AboutUs