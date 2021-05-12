import React from 'react';
import PropTypes from 'prop-types';
import styles from "./FeedbackOptions.module.css"

const FeedbackOptions = ({ options, onLeaveFeedback  }) => {
 return ( options.map(item => (
        <button
          className={styles.feedback}
          onClick={()=>onLeaveFeedback (item)}
          type="button"
          key={item}
        >
          {item}
        </button>
      )))
 
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};




export default FeedbackOptions;