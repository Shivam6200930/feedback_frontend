import React, { useState } from 'react';
import { Feedback } from '../App';

interface FeedbackListProps {
  feedbacks: Feedback[];
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedbacks }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const feedbacksPerPage = 5;
  const maxPageNumbersToShow = 5;

  const indexOfLastFeedback = currentPage * feedbacksPerPage;
  const indexOfFirstFeedback = indexOfLastFeedback - feedbacksPerPage;
  const currentFeedbacks = feedbacks.slice(indexOfFirstFeedback, indexOfLastFeedback);

  const totalPages = Math.ceil(feedbacks.length / feedbacksPerPage);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    let startPage = Math.max(currentPage - Math.floor(maxPageNumbersToShow / 2), 1);
    let endPage = startPage + maxPageNumbersToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxPageNumbersToShow + 1, 1);
    }

    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <>
        {startPage > 1 && <button onClick={() => handleClick(1)}>1</button>}
        {startPage > 2 && <span>...</span>}
        {pageNumbers.map(number => (
          <button key={number} onClick={() => handleClick(number)} disabled={currentPage === number}>
            {number}
          </button>
        ))}
        {endPage < totalPages - 1 && <span>...</span>}
        {endPage < totalPages && <button onClick={() => handleClick(totalPages)}>{totalPages}</button>}
      </>
    );
  };

  return (
    <div>
      {feedbacks.length > 0 ? (
        <ul>
          {currentFeedbacks.map((feedback, index) => (
            <li key={index}>
              <strong>{feedback.name}:</strong> {feedback.feedback}
            </li>
          ))}
        </ul>
      ) : (
        <p>No feedback available</p>
      )}
      {totalPages > 1 && (
        <div className="pagination">
          <button onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          {renderPageNumbers()}
          <button onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default FeedbackList;
