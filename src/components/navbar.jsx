'use client'
import React, { useRef } from 'react';
import "./navbar.css";
const Navbar = () => {
    const burger=useRef(null);
    const phonenav=useRef();
 
    return (
        <div id='nav'>
            <img src='./logodeutch2.png' id='navlogo' />
            <ul id='ulpc'>
            <li onClick={()=>{
const section = document.getElementById('services');
section.scrollIntoView({ behavior: 'smooth' });
            }}>Nos Services </li>
                <li onClick={()=>{
const section = document.getElementById('about');
section.scrollIntoView({ behavior: 'smooth' });
            }}>À Propos</li>
                <li onClick={()=>{
const section = document.getElementById('contactsection');
section.scrollIntoView({ behavior: 'smooth' });
            }}>Contactez Nous</li>
            </ul>
            <div id='navbtn' onClick={()=>{
                   const section = document.getElementById('info');
                   section.scrollIntoView({ behavior: 'smooth' });
            }}>
                Get Our Location
            </div>



            <img src='./menugolden.png' id='burger' onClick={()=>{
                phonenav.current.style.transform="scaleY(1)"
            }} ref={burger} 
        
            />





            <div id='navphone2' ref={phonenav}>
                <img src="./close.png" id='close' alt="" onClick={() => {
                    phonenav.current.style.transform = "scaleY(0)";
                }} />
                
                <ul id='ulphone'>
                    <li className='livl' onClick={()=>{
                   const section = document.getElementById('nav');
                   section.scrollIntoView({ behavior: 'smooth' });
                        phonenav.current.style.transform = "scaleY(0)";
                    }}> Home </li>
                    
                    <li className='livl' onClick={()=>{
                   
                            const section = document.getElementById('services');
                            section.scrollIntoView({ behavior: 'smooth' });
                                        
                       phonenav.current.style.transform = "scaleY(0)";
                   }}> Nos Services</li>
                    <li className='livl' onClick={()=>{
                       const section = document.getElementById('about');
                       section.scrollIntoView({ behavior: 'smooth' });
                        phonenav.current.style.transform = "scaleY(0)";
                    }}>À Propos</li>
                        
                 
                    <li className='livl' onClick={()=>{
                       const section = document.getElementById('contactsection');
                       section.scrollIntoView({ behavior: 'smooth' });
                        phonenav.current.style.transform = "scaleY(0)";
                    }}> Contactez Nous</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
