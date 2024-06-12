import React, { useState, useEffect } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import axios from 'axios';
import './App.css'

export interface Feedback {
  name: string;
  feedback: string;
}

const App: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const response = await axios.get('https://feedback-061n.onrender.com/feedback');
      setFeedbacks(response.data);
    };

    fetchFeedbacks();
  }, []);

  const addFeedback = async (feedback: Feedback) => {
    try {
      await axios.post('https://feedback-061n.onrender.com/feedback', feedback);
      setFeedbacks((prevFeedbacks) => [...prevFeedbacks, feedback]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Feedback Management System</h1>
      <div className="form">
        <FeedbackForm addFeedback={addFeedback} />
      </div>
      <div className="list">
        <FeedbackList feedbacks={feedbacks} />
      </div>
    </>
  );
};

export default App;
