import React from "react"
import "./contract.css"
import instagram from "../Assets/instagram.png"
import telegram from "../Assets/telegram.png"
import whatsApp from "../Assets/whatsApp.png"
import phone from "../Assets/phone.png"

const Contract =()=>{
    return(
        <div data-aos="fade-up" data-aos-duration="500" className="contract">
            <div className="contract-text">
                <h1>ارتباط با تیم ما</h1>
                <p className="lh-lg mt-4">برای هر گونه سوال یا مشاوره رایگان در زمینه طراحی، هزینه، روش انجام کار، مواد استفاده شده و سایر موارد، خوشحال می‌شویم که با تیم آرت چوب در تماس باشید. می‌توانید از طریق راه‌های ارتباطی با ما تماس بگیرید:</p>
            </div>
            <div className="contract-social mt-4">
                <div>
                    <img src={instagram} className="contract-instagram"/>
                    <img src={telegram} className="contract-telegram"/>
                    <img src={whatsApp} className="contract-whatsApp"/>
                </div>
                <div>
                    <div>
                        <p>0912-593-3878</p>
                        <img src={phone} className="contract-phone"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contract