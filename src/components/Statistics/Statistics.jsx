import React from "react";
import PropTypes from "prop-types";

export default function Statistics({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
})
{ return (
      <>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>TotalFeedback:{totalFeedback}</p>
      <p>PositiveFeedbackPercentage:{positiveFeedbackPercentage}%</p>
  </>
  
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired
};
