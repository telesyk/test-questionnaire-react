import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Question from './Question';

function QuestionContainer({ question, onNext }) {
  const { title, options } = question;
  const [currentOptions, setCurrentOptions] = useState(options);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [isActiveBtnNext, setIsActiveBtnNext] = useState(false);

  const handleOptionChange = (id) => {
    // eslint-disable-next-line
    // console.log('currentOption id', id);
    setIsOptionSelected(true);
    setCurrentOptions((prevOptions) => prevOptions.map((option) => {
      if (id !== option.id) {
        // eslint-disable-next-line
        option.checked = false;
      } else {
        // eslint-disable-next-line
        option.checked = true;
      }
      return option;
    }));
  };

  useEffect(() => {
    setIsActiveBtnNext((prevState) => isOptionSelected && !prevState);
  }, [isOptionSelected]);

  return (
    <>
      <Question
        classname="mb-6"
        title={title}
        options={currentOptions}
        onOptionChange={handleOptionChange}
      />
      <Button handleClick={onNext} isActive={isActiveBtnNext}>Next</Button>
    </>
  );
}

QuestionContainer.propTypes = {
  question: PropTypes.shape({
    title: PropTypes.string,
    options: PropTypes.array,
  }).isRequired,
  onNext: PropTypes.func.isRequired,
};

export default QuestionContainer;
