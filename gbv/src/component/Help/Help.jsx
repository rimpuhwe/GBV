import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Button from '../button/Button';
import './Help.css';
import { useNavigate } from 'react-router';

function Help() {
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  const handleShow = (index) => {
    setVisibleAnswer(visibleAnswer === index ? null : index);
  };

  const navigate = useNavigate()

  const questions = [
    {
      question: 'How do I report a case?',
      answer: 'Simply click the "Report a Case" button, fill out the form with the necessary details, and submit it. Our team will handle the rest.'
    },
    {
      question: 'Is my information kept confidential?',
      answer: 'Yes. We prioritize your safety and anonymity. Your information will never be shared without your consent.'
    },
    {
      question: 'How can I request immediate help?',
      answer: 'Visit the "Get Started" page and click "Request Support" to connect with our team. For emergencies, use the hotline numbers provided.'
    }
  ];

  return (
    <div className="text-center">
      <h2>Frequently Asked Questions & User Support</h2>
      <div className=" w-1/2 Q-container">
        {questions.map((item, index) => (
          <div key={index}>
            <div className="questions justify-around">
              <span className="Q text-xl">
                <strong>{item.question}</strong>
              </span>
              <span className="icon">
                <Plus onClick={() => handleShow(index)} />
              </span>
            </div>
            <div className={`answer ${visibleAnswer === index ? '' : 'hidden'}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <h3>Additional Help</h3>
      <p>
        If you still have questions or need more assistance, contact our support team. We're here to help you every step of the way.
      </p>
      <div className="w-40/100 flex items-center help-buttons">
        <Button>Read more FAQs</Button>
        <Button onClick={() => navigate('/Contact')}>Contact Support</Button>
      </div>
    </div>
  );
}

export default Help;
