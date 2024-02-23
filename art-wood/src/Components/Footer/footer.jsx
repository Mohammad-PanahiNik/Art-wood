import React from "react"
import "./footer.css"
import phone from "../Assets/phone.png"
import location from "../Assets/location.png"
import logo from "../Assets/logo.png"

const Footer =()=>{
    return(
        <div className="footer">
            <div className="footer-items">
                <img src={logo} className="footer-logo"/>
            </div>
            <div className="copy">
                <p>تمام حقوق وب سایت متعلق به تیم آرت وود می باشد @ طراحی و برنامه نویسی نویسی رویتک</p>
            </div>
        </div>
    )
}

export default Footer