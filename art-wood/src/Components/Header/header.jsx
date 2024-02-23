import React from "react"
import "./header.css"
import logo from "../Assets/logo.png"

const Header =()=>{
    return(
        <div className="header">
            <div className="header-logo">
                <img src={logo} alt=""></img>
            </div>
            <ul className="header-list">
                <li><a href="#">نحوه سفارش</a></li>
                <li><a href="#">ارتباط با ما</a></li>
                <li><a href="#">نمونه کار ها</a></li>
                <li><a href="#">درباره ما</a></li>
            </ul>
        </div>
    )
}

export default Header