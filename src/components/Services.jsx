
import React, { useEffect, useState } from 'react';
import "./services.css";
const Services = () => {
    const [cardsservice, setcardsservice] = useState(null)
    const cardsservicearray = [
        {key:1,
            image: "./notebook.png",
            title: "Tous niveaux A1, A2, B1, B2, C1",
            para: "Commencez votre voyage dans l’apprentissage de la langue allemande avec nous, avec des cours complets pour tous les niveaux afin de garantir votre progression continue.",
        }, {key:2,
            image: "./teacher.png",
            title: "Professeurs avec une grande expérience linguistique",
            para: "Apprenez l'allemand avec des professeurs allemands et marocains qualifiés, grâce à des méthodes pédagogiques innovantes pour garantir votre réussite.",
        },
        {key:3,
            image: "./passport.png",
            title: "Service de Visa",
            para: " Aide à la demande de visas et de permis de séjour et Conseils sur les documents requis et les étapes de la procédure.",
        }
    ]
    useEffect(() => {
        const data=cardsservicearray.map(dt => {
            return <div  key={dt.key.toString()} className='servcard'>
            <img src={dt.image.toString()} />
            <span>{dt.title}</span>
            <p>{dt.para}</p>
        </div>})
        setcardsservice(data)
    },
        [])
    return (
        <div id='services'>
            <div id='firstpart'>
                <div>
                    <span>
                        NOS SERVICES
                    </span>
                    <span>
                        CE QUE NOUS OFFRONS
                    </span>
                </div>
                <p>
                    {"Plongez dans la culture allemande et découvrez ses traditions et coutumes. Apprendre l'allemand, c'est bien plus qu'une simple langue, c'est découvrir un nouveau monde."}
                </p>
            </div>
            <div id='cardsservcontainer'>
               {cardsservice}
            </div>
        </div>
    );
}

export default Services;
