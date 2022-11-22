import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Question from './Question';
import { getActiveOption, setOptionCheck } from '../helpers';

function QuestionContainer({ question, onNext }) {
  const { title, options } = question;
  const [currentOptions, setCurrentOptions] = useState(options);
  const [activeOption, setActiveOption] = useState(null);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [isActiveBtnNext, setIsActiveBtnNext] = useState(false);

  useEffect(() => setCurrentOptions(
    setOptionCheck(options, null),
  ), [question]);
  useEffect(() => {
    setIsActiveBtnNext((prevState) => isOptionSelected && !prevState);
  }, [isOptionSelected]);

  const handleOptionChange = (id) => {
    setIsOptionSelected(true);
    setCurrentOptions((prevOptions) => setOptionCheck(prevOptions, id));
    setActiveOption(getActiveOption(options, id));
  };

  const handleNext = () => onNext(activeOption);

  return (
    <>
      <Question
        classname="mb-6"
        title={title}
        options={currentOptions}
        onOptionChange={handleOptionChange}
      />
      <Button handleClick={handleNext} isActive={isActiveBtnNext}>Next</Button>
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
