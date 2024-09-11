import React from 'react';
import "./about.css"
const About = () => {
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
