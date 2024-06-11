import React, { useState, useEffect } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import axios from 'axios';
import './App.css'

interface Feedback {
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
    <div>
      <h1>Feedback Management System</h1>
      <FeedbackForm addFeedback={addFeedback} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
};

export default App;
