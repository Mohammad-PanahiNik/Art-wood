import React from "react"
import "./header.css"
import logo from "../Assets/logo.png"
import backgroundImg from "../Assets/background.png"
import menuBtnImg from "../Assets/menu.png"
import closeImg from "../Assets/closeImg.png"

const Header =()=>{
    const sideMenuOpen = ()=>{
        document.querySelector(".header-list").style.left="0"
    }
    const sideMenuClose = ()=>{
        document.querySelector(".header-list").style.left="-100%"
    }
    window.addEventListener("scroll" , ()=>{
        document.querySelector(".header").classList.toggle("sticky",window.scrollY > 0)
    })

    return(
        <>
        <div className="header">
            <div className="header-logo">
                <img src={logo} alt=""></img>
            </div>
            <ul className="header-list">
                <li className="header-r-logo">
                    <div>
                        <img src={logo} alt=""></img>
                    </div>
                </li>
                <li className="close-btn">
                    <button onClick={sideMenuClose}>
                        <img src={closeImg} alt=""></img>
                    </button>
                </li>
                <li><a onClick={sideMenuClose} href="#contract">ارتباط با ما</a></li>
                <li><a onClick={sideMenuClose} href="#samples">نمونه کار ها</a></li>
                <li><a onClick={sideMenuClose} href="#about">درباره ما</a></li>
            </ul>
            <button onClick={sideMenuOpen} className="menu-btn"><img id="menuImg" src={menuBtnImg} alt="" /></button>
        </div>
        </>
    )
}

export default Header