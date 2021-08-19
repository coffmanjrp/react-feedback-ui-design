import { useState } from 'react';
import { Feedback, RatingContainer } from './components';
import ratingsData from './utils/ratings';
import './App.scss';

function App() {
  const [ratings, setRatings] = useState(ratingsData);
  const [selectedRating, setSelectedRating] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleClick = () => {
    if (selectedRating) {
      setFeedback(selectedRating);
    } else {
      setIsEmpty(true);
    }
  };

  return (
    <div className="App">
      <div className="panel-container">
        {isEmpty ? (
          <p>Please select one of the ratings.</p>
        ) : feedback ? (
          <Feedback feedback={feedback} />
        ) : (
          <>
            <strong>
              How satisfied are you with our <br />
              customer support performance?
            </strong>
            <RatingContainer
              ratings={ratings}
              setRatings={setRatings}
              setSelectedRating={setSelectedRating}
            />
            <button type="button" className="btn" onClick={handleClick}>
              Send Review
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
