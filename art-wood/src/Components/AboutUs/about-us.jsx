import React from "react"
import "./about-us.css"
import about1 from "../Assets/about-1.png"
import about2 from "../Assets/about-2.png"
import about3 from "../Assets/about-3.png"

const AboutUs =()=>{
    return(
        <div className="about-us">
            <div className="about-us-text">
                <h1 className="lh-lg h2 zi-1">درباره ما</h1>
                <p className="lh-lg leady fw-light zi-1">شرکت فرم چوب از سال 1375با بهره گیری از آخرین تکنولوژی صنایع چوب و نیروهای متخصص در راستای تولید کابینت آشپزخانه ، دکوراسیون داخلی و اداری شروع به فعالیت نموده است.<br className="br-about"/>این مجموعه از سال 1385 با بهره گیری از تکنولوژی روز اروپا و با استفاده از مواد اولیه درجه یک که دارای استانداردهای بهداشتی و زیست محیطی جهانی می باشد فعالیت تخصصی خود را در زمینه تولید دربهای روکش پی وی سی و هایگلاس گسترش داده است. گروه صنعتی آرنا کالا پرشین (فرم چوب) با توجه به استقبال مشتریان گرامی طرح توسعه کارخانه را در شهرک صنعتی عباس آباد از سال 1391 بنا نهاده و مفتخر می باشد به اطلاع برساند .</p>
            </div>
            <div className="about-us-imgs">
                <img src={about1} alt="" className="about-imgs about-img2"/>
                <img zsrc={about2} alt="" className="about-imgs about-img1"/>
                <img src={about3} alt="" className="about-imgs about-img3"/>
            </div>
        </div>
    )
}

export default AboutUs