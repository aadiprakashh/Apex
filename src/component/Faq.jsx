import React, { useState } from 'react';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy from the date of purchase. Items must be in their original condition with tags attached."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship internationally. Shipping fees and delivery times vary depending on the destination."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, we will send you a tracking number via email. You can use this number to track your order on our website."
    },
    {
      question: "How can I contact customer service?",
      answer: "You can contact our customer service team via email at support@mensfashion.com or call us at 1-800-123-4567."
    },
    {
      question: "Can I change or cancel my order?",
      answer: "You can change or cancel your order within 24 hours of placing it. Please contact our customer service team as soon as possible to request changes or cancellations."
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Yes, we offer gift wrapping for an additional fee. You can select the gift wrapping option at checkout."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAccordion(index)}>
              <h2>{faq.question}</h2>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
