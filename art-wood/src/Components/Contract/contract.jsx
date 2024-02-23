import React from "react"
import "./contract.css"
import instagram from "../Assets/instagram.png"
import telegram from "../Assets/telegram.png"
import whatsApp from "../Assets/whatsApp.png"
import phone from "../Assets/phone.png"

const Contract =()=>{
    return(
        <div className="contract">
            <div className="contract-text">
                <h1>ارتباط با تیم ما</h1>
                <p>برای ارتباط با تیم و دریافت مشاوره رایگان در رابطه با طراحی ، هزینه ،نحوه انجام کار ،جنس و ... شما میتوانید از طریق راه های ارتباطی زیر با ما در ارتباط باشید.</p>
            </div>
            <div className="contract-social">
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