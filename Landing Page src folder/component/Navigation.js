import React,{useState} from "react";
import logo from '../ImagesGif/Logo.jpeg';
export default function Navigation()
{

    const [classname,setclassname] = useState('');

    return (
        <header className = 'nav'>
            <img style={{width:'80px'}} src={logo} alt="logo"></img>
            <ul className="navList">
                <li onMouseOver={()=>{setclassname(0)}} className={classname === 0?'active':''}>Home</li>
                <li  onMouseOver={()=>{setclassname(1)}} className={classname === 1?'active':''}>Blog</li>
                <li onMouseOver={()=>{setclassname(2)}} className={classname === 2?'active':''}>About</li>
                <li onMouseOver={()=>{setclassname(3)}} className={classname === 3?'active':''}>Contact</li>
            </ul>
       
        </header>
    )
}