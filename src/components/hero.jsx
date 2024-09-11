'use client'
import React, { useEffect, useRef } from 'react';
import "./hero.css";
import gsap from 'gsap';

import ReactTypingEffect from 'react-typing-effect';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from 'split-type'




const Hero = () => {
    gsap.registerPlugin(ScrollTrigger);




    useEffect(() => {
        const text = SplitType.create('#splited')
        const tls2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top 50%",
                end: "top -50%",
                toggleActions: "play none none reverse",

            }
        });
     
        tls2.to("#hero .char",{
            y:0,
            stagger:.05,
            opacity:1,
            delay:.2,
            duration:1,ease:"power1.inOut"
            },"anim1")
            .fromTo("#undersplit",{
                y:30,opacity:0
            },{y:0,opacity:1,duration:3},"anim1")
            
            .fromTo("#star1,#star2",{y:3},{y:0,  repeat: -1,yoyo:true,duration:1})



     

        const tls = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top 10%",
                end: "top -50%",
                toggleActions: "play none none reverse",
                scrub: true
            }
        });

       if(window.innerWidth>992){
        tls.
        fromTo("#star1", {
            rotate: 0

        }, {
            rotate: 360,
            duration: 20,
            ease: "power1.inOut"



        }, "firstanimation").fromTo("#star2", {
            rotate: 0

        }, {
            rotate: 360,
            duration: 20,
            ease: "power1.inOut"



        }, "firstanimation").fromTo("#glasscircle",{
           width:"60%"
        },{
            width:"100%",
            duration:20,
            ease: "power1.inOut"
        },"firstanimation")
       }else{
        tls.
        fromTo("#star1", {
            rotate: 0

        }, {
            rotate: 360,
            duration: 20,
            ease: "power1.inOut"



        }, "firstanimation").fromTo("#star2", {
            rotate: 0

        }, {
            rotate: 360,
            duration: 20,
            ease: "power1.inOut"



        }, "firstanimation").fromTo("#glasscircle",{
           width:"90%"
        },{
            width:"100%",
            duration:20,
            ease: "power1.inOut"
        },"firstanimation")
       }

    }, [])
    return (

        <div id='hero'>

         
            <span id='splited'>Cours de niveaux de langue allemande et même de </span>

            <span id='undersplit'>{'préparation aux examens à tous les niveaux '}
                <ReactTypingEffect
                    text={[" A1", " A2", " B1", " B2", " C1", " C2"]}

                    displayTextRenderer={(text: string, i: number) => {
                        return (
                            <span>{text}</span>
                        );
                    }}
                /></span>

<div id='covercont'>
    <div id='glasscircle'>
        
    <span>Les inscriptions sont ouvertes, ne manquez pas cette opportunité</span>
    </div>

</div>
           


            <img src='./stars.png' id='star1' />
            <img src='./stars.png' id='star2' />
        </div>

    );
}

export default Hero;
