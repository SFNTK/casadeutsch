import React, { useEffect, useState } from 'react';
import './allfaq.css'
const faqData = [
    { question: "la question 1", answer: "la réponse" },
    { question: "la question 2", answer: "la réponse" },
    { question: "la question 3", answer: "la réponse" }
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
