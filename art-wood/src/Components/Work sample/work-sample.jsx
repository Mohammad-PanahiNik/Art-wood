import React from "react"
import "./work-sample.css"
import { useState } from 'react';

import img1 from "../Assets/img1.jpg"
import img2 from "../Assets/img2.jpg"
import img3 from "../Assets/img3.jpg"
import img4 from "../Assets/img4.jpg"
import img5 from "../Assets/img5.jpg"
import img6 from "../Assets/img6.jpg"
import img7 from "../Assets/img7.jpg"
import img8 from "../Assets/img8.jpg"
import img9 from "../Assets/img9.jpg"
import img10 from "../Assets/img10.jpg"
import img11 from "../Assets/img11.jpg"
import img12 from "../Assets/img12.jpg"
import img13 from "../Assets/img13.jpg"
import img14 from "../Assets/img14.jpg"
import img15 from "../Assets/img15.jpg"
import img16 from "../Assets/img16.jpg"
import img17 from "../Assets/img17.jpg"
import img18 from "../Assets/img18.jpg"
import img19 from "../Assets/img19.jpg"
import img20 from "../Assets/img20.jpg"
import img21 from "../Assets/img21.jpg"
import img22 from "../Assets/img22.jpg"
import img23 from "../Assets/img23.jpg"
import img24 from "../Assets/img24.jpg"


const WorkSample =()=>{
    const [imageIndex , setImageIndex] = useState(0)

    const workTitle = ["کلاسیک" , "مدرن" , "مدرن"]

    const Image = ({img , classs}) => {
        return(
            <div className={`work-img ${classs}`}>
                <img src={img} alt="" />
            </div>
        )
    }
    
    const nextImage = () => {
        if (imageIndex < 2) {
            setImageIndex(index => {
                    return index + 1
            })
        }
    }
    const pervImage = () => {
        if (imageIndex > 0) {
            setImageIndex(index => {
                    return index - 1
            })
        }
    }
    return(
        <div id="samples" className="work-sample">
            <div className="work-text">
                <h1>نمونه کار های آرت وود</h1>
            </div>  
            <div className="work-category">
                {/* <i class="fa-solid fa-arrow-right"  onClick={nextImage}></i> */}
                {imageIndex == 2 ? <i class="fa-solid fa-arrow-right" style={{ color: '#583101' }}  onClick={nextImage}></i> : <i class="fa-solid fa-arrow-right"  onClick={nextImage}></i>}
                <p>{workTitle[imageIndex]}</p>
                {imageIndex == 0 ? <i class="fa-solid fa-arrow-left" style={{ color: '#583101' }}  onClick={pervImage}></i> : <i class="fa-solid fa-arrow-left"  onClick={pervImage}></i>}
                {/* <i class="fa-solid fa-arrow-left" onClick={pervImage}></i> */}
            </div>
            <div className="slider">
                <div className="slider-sections" style={{translate : `-${110 * imageIndex}%`}}>
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
                    <div className="work-images slider-2">
                        <Image img={img9} classs="gb1"/>
                        <Image img={img10} classs="gb2"/>
                        <Image img={img11} classs="gb3"/>
                        <Image img={img12} classs="gb4"/>
                        <Image img={img13} classs="gb5"/>
                        <Image img={img14} classs="gb6"/>
                        <Image img={img15} classs="gb8"/>
                        <Image img={img16} classs="gb7"/>
                    </div>
                    <div className="work-images slider-3">
                        <Image img={img17} classs="gb1"/>
                        <Image img={img18} classs="gb8"/>
                        <Image img={img19} classs="gb3"/>
                        <Image img={img20} classs="gb2"/>
                        <Image img={img21} classs="gb5"/>
                        <Image img={img22} classs="gb6"/>
                        <Image img={img23} classs="gb7"/>
                        <Image img={img24} classs="gb4"/>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default WorkSample