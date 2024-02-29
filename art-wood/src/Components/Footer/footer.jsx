import React from "react"
import "./footer.css"
import phone from "../Assets/phone.png"
import location from "../Assets/location.png"
import logo from "../Assets/footer logo.png"

const Footer =()=>{
    return(
        <div className="footer">
            <div className="footer-items">
                <div className="footer-logo gb1">
                    <img src={logo}/>
                </div>
                <div className="footer-order gb2">
                    <h4>نحوه سفارش</h4>
                    <p>درباره ما</p>
                    <p>ارتبارط با ما</p>
                </div>
                <div className="footer-work gb3">
                    <h4>نمونه کار ها</h4>
                    <p>کلاسیک</p>
                    <p>مدرن</p>
                    <p>مدرن</p>
                </div>
                <div className="footer-contract gb4">
                    <div  className="footer-phone">
                        <img src={phone}/>
                        <p>0912 593 3878</p>
                    </div>
                    <div  className="footer-location">
                        <img src={location}/>
                        <p>تهرانپارس – جاده آبعلی – خیابان اتحاد – نبش خیابان 13 غربی ، پلاک 38 و 40n</p>
                    </div>
                </div>
            </div>
            <div className="copy">
                <p>تمام حقوق وب سایت متعلق به تیم آرت وود می باشد @ طراحی و برنامه نویسی نویسی رویتک</p>
            </div>
        </div>
    )
}

export default Footer