import React from "react"
import "./work-sample.css"
import img1 from "../Assets/img1.jpg"
import img2 from "../Assets/img2.jpg"
import img3 from "../Assets/img3.jpg"
import img4 from "../Assets/img4.jpg"
import img5 from "../Assets/img5.jpg"
import img6 from "../Assets/img6.jpg"
import img7 from "../Assets/img7.jpg"
import img8 from "../Assets/img8.jpg"

const Image = ({img , classs}) => {
    return(
        <div className={`work-img ${classs}`}>
            <img src={img} alt="" />
        </div>
    )
}

const WorkSample =()=>{
    return(
        <div className="work-sample">
            <div className="work-text">
                <h2>نمونه کار های آرت وود</h2>
            </div>  
            <div className="work-images slider-1">
                <Image img={img1} classs="gb1"/>
                <Image img={img2} classs="gb2"/>
                <Image img={img3} classs="gb3"/>
                <Image img={img4} classs="gb4"/>
                <Image img={img5} classs="gb5"/>
                <Image img={img6} classs="gb6"/>
                <Image img={img7} classs="gb7"/>
                <Image img={img8} classs="gb8"/>
            </div>

        </div>
    )
}

export default WorkSample