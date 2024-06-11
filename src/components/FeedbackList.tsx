
import React from 'react';

interface Feedback {
  name: string;
  feedback: string;
}

interface FeedbackListProps {
  feedbacks: Feedback[];
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedbacks }) => {
  return (
    <ul>
      {feedbacks.map((feedback, index) => (
        <li key={index}>
          <strong>{feedback.name}:</strong> {feedback.feedback}
        </li>
      ))}
    </ul>
  );
};

export default FeedbackList;
