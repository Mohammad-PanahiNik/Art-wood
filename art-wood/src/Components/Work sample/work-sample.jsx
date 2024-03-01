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
        <div className="work-sample">
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
                        <Image img={img1} classs="gb1"/>
                        <Image img={img1} classs="gb2"/>
                        <Image img={img1} classs="gb3"/>
                        <Image img={img1} classs="gb4"/>
                        <Image img={img1} classs="gb5"/>
                        <Image img={img1} classs="gb6"/>
                        <Image img={img1} classs="gb7"/>
                        <Image img={img1} classs="gb8"/>
                    </div>
                    <div className="work-images slider-3">
                        <Image img={img2} classs="gb1"/>
                        <Image img={img2} classs="gb2"/>
                        <Image img={img2} classs="gb3"/>
                        <Image img={img2} classs="gb4"/>
                        <Image img={img2} classs="gb5"/>
                        <Image img={img2} classs="gb6"/>
                        <Image img={img2} classs="gb7"/>
                        <Image img={img2} classs="gb8"/>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default WorkSample