import React, { useState } from 'react'
import '../StyleSheet/About.css'
import imag1 from '../ImagesGif/img1.jpg'
import imag2 from '../ImagesGif/image12.jpg'
import imag3 from '../ImagesGif/img3.jpeg'
import imag4 from '../ImagesGif/img4.jpg'
import imag5 from '../ImagesGif/im,g5.jpeg'
import imag6 from '../ImagesGif/AnimationImage.png'
export default function About() {
  const [CarImage,setCarImage] = useState(imag1);

  return (
    <>
    <div className='container'>
  
    <div className='paragraphContainer'> 
        <p>
          Welcome to our BMW Coupe 2020 showcase, where cutting-edge web development 
          meets the epitome of automotive excellence. Our platform is meticulously crafted to offer an immersive experience,
          allowing you to explore the sleek design, advanced features, and unparalleled performance of the BMW Coupe 2020.
            Through seamless navigation and interactive elements, we bring you closer to the craftsmanship and innovation 
            that define this iconic vehicle. Our commitment to precision in both web development and automotive engineering 
            mirrors the BMW brand's dedication to delivering the ultimate driving and online experience. Join us on this
            virtual journey as we celebrate the fusion of technology and automotive luxury, inviting you to discover every
              detail of the BMW Coupe 2020 in a digital realm designed for enthusiasts and connoisseurs alike.
        </p>
      </div>
      <div className='ImageContainer'>
        <div className='MainImage'>
          <img src={CarImage} alt='Carimage'></img>
        </div>
          <div className='AllImages'>
          <img src={imag5} alt='Car top' onMouseOver={(()=>{setCarImage(imag5)})} onMouseOut={(()=>{setCarImage(imag1)})}></img>
          <img src={imag2} alt='Car Back' onMouseOver={(()=>{setCarImage(imag2)})} onMouseOut={(()=>{setCarImage(imag1)})}></img>
          <img src={imag3} alt='Car Front' onMouseOver={(()=>{setCarImage(imag3)})} onMouseOut={(()=>{setCarImage(imag1)})}></img>
          <img src={imag4} alt='Car Tyre' onMouseOver={(()=>{setCarImage(imag4)})} onMouseOut={(()=>{setCarImage(imag1)})}></img>
          </div>
      </div>
    </div>
    <img className='Animation' src={imag6} alt='AnimationImage'></img>
    </>
  )
}
