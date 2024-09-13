import React, { useEffect, useState } from 'react';
import './allfaq.css'
const faqData = [
    { question: "Quels cours d'allemand proposez-vous ?", answer: "Nous proposons différents cours d'allemand, y compris des cours pour débutants (A1-A2), des cours pour niveaux intermédiaires (B1-B2) et des cours de préparation aux examens" },
    { question: "Proposez-vous des cours adaptés aux entreprises ou aux professionnels ?", answer: "Oui, nous proposons des cours d'allemand sur mesure pour les entreprises et les professionnels, axés sur le vocabulaire et les compétences spécifiques au milieu professionnel" },
    { question: "Combien de temps faut-il pour apprendre l'allemand ?", answer: "La durée dépend de votre niveau de départ et de vos objectifs d'apprentissage. En général, les débutants ont besoin d'environ 6 mois pour acquérir les bases de la langue." }
  ];
  
  const FAQItem = ({ question, answer }) => {
    const [isActive, setIsActive] = useState(false);
  
    return (
      <div className={`faq-item ${isActive ? 'active' : ''}`} onClick={() => setIsActive(!isActive)}>
        <div className="faq-question">
          <h3>{question}</h3>
          <span className="faq-toggle">{isActive ? '-' : '+'}</span>
        </div>
        {isActive && <div className="faq-answer"><p>{answer}</p></div>}
      </div>
    );
  };
  
  const FAQSection = () => {
    return (
      <section className="faq-section">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    );
  };

  
const Allfaq = () => {



    return (
     <FAQSection/>

    );
}

export default Allfaq;
