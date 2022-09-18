import React from "react";
import PropTypes from "prop-types";
import { Button } from './FeedbackOptions.styled.jsx';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map((option) =>
      (<Button key={option} type='button' name={option} onClick={onLeaveFeedback}>
        {option}
      </Button>
      ))}
        </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.string.isRequired,
      neutral: PropTypes.string.isRequired,
      bad: PropTypes.string.isRequired,
    })
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};
 