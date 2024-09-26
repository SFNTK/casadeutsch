import React ,{ useEffect }from 'react';
import "./about.css";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const About = () => {
       useEffect(()=>{
        const tls211 = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top 80%",
                end: "top -50%",
               

            }
        });
        tls211.fromTo("#about img",{opacity:.8,x:-20},{
            opacity:1,x:1,duration:.6,ease:"power1.inOut"
        }).fromTo("#abouttxt",{ opacity:0, transform: "scale(.9, .9)"},{
            transform:"scale(1,1)",duration:.8,ease:"power1.inOut",opacity:1
        })
    },[])
    return (
        <div id='about'>
            <img src='./owner.jpg'/>
            <div id='abouttxt'>
                <span>A PROPOS</span>
                <span>{"Le meilleur centre de langues pour apprendre l'allemand"}</span>
                <p>Notre centre de langues propose un apprentissage de qualité avec des professeurs allemands et marocains expérimentés. Grâce à des méthodes modernes et interactives, nous assurons une progression rapide et efficace en allemand, adaptée à tous les niveaux.</p>
                <div onClick={()=>{
                       const section = document.getElementById('contactsection');
                       section.scrollIntoView({ behavior: 'smooth' });
                }}>{"DEMANDE D'INSCRIPTION"}</div>
            </div>
        </div>
    );
}

export default About;
