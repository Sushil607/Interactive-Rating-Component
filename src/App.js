import { useState } from "react";

import star from "./images/icon-star.svg";
import thanks from "./images/illustration-thank-you.svg";

function App() {
  // Different States
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rating, setRating] = useState(null);
  // Button Component
  const Button = ({ number }) => {
    return (
      <button className="rating-btn" onClick={() => setRating(number)}>
        {number}
      </button>
    );
  };
  return (
    <>
      {!isSubmitted && (
        <div className="wrapper">
          <div className="star-container">
            <img className="star" src={star} alt="star icon image" />
          </div>

          <h2>How did we do ?</h2>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <ul>
            <li>
              <Button number={1} />
            </li>
            <li>
              <Button number={2} />
            </li>
            <li>
              <Button number={3} />
            </li>
            <li>
              <Button number={4} />
            </li>
            <li>
              <Button number={5} />
            </li>
          </ul>
          <div>
            <button
              className="btn-rating"
              disabled={!rating}
              onClick={() => setIsSubmitted(true)}
            >
              Submit
            </button>
          </div>
        </div>
      )}
      {isSubmitted && (
        <ThankYou
          setIsSubmitted={setIsSubmitted}
          rating={rating}
          setRating={setRating}
        />
      )}
    </>
  );
}

const ThankYou = ({ setIsSubmitted, rating, setRating }) => {
  return (
    <div className="wrapper" style={{ textAlign: "center" }}>
      <img src={thanks} alt="thank you image" />
      <h2>Thank You !</h2>
      <p
        style={{
          color: "orange",
          backgroundColor: "#333",
          padding: "10px",
          borderRadius: "15px",
          width: "70%",
          margin: "auto",
          marginBottom: "10px",
        }}
      >
        You selected {rating} out of 5
      </p>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, dont hesitate to get in touch!
      </p>
      <div>
        <div
          className="btn-rating"
          onClick={() => {
            setIsSubmitted(false);
            setRating(null);
          }}
        >
          Rate Again
        </div>
      </div>
    </div>
  );
};

export default App;
