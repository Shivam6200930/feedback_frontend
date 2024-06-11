import React, { useState } from 'react';

interface FeedbackFormProps {
  addFeedback: (feedback: { name: string, feedback: string }) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ addFeedback }) => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (name.trim() === '' || feedback.trim() === '') {
      alert('Please fill out both the name and feedback fields.');
      return;
    }

    // Add feedback if validation passes
    addFeedback({ name, feedback });
    setName('');
    setFeedback('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <textarea 
        placeholder="Feedback" 
        value={feedback} 
        onChange={(e) => setFeedback(e.target.value)} 
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
