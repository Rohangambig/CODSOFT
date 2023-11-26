import React from 'react'
import GIF from '../CarhomeGif.gif'
import '../StyleSheet/Home.css'
export default function Home() {
  return (
       <div className='HOME'>
       <h1>Welcome to Car home</h1>
        <div className='Container'>
            <img src ={GIF} alt='Car GIF' />
            <div className='Details'>
                <h1>BMW</h1>
                <p style={{textAlign:'center','fontWeight':'bold'}}>coupe 2020 concept</p>
                <p className='paragraph1'> Discover the elegance and performance of our <span style={{fontWeight:'bold'}}>BMW Coupe</span> series. Our coupes blend
                cutting-edge technology with luxurious design, providing an unparalleled driving
                experience.</p>
                <p className='paragraph1'> Whether you're drawn to the sleek exterior, advanced features, or powerful
                performance, <span style={{fontWeight:'bold'}}>BMW Coupes</span>  are designed to exceed expectations.</p>
            </div>
        </div>
       </div>
  )
}
