import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import { OptionContext } from '../context';

function Question({
  title,
  options,
  classname,
  onOptionChange,
}) {
  const { currentQuestionId } = useContext(OptionContext);
  // eslint-disable-next-line
  console.log('currentQuestionId', currentQuestionId);

  return (
    <div className={classname}>
      <h2 className="text-xl py-3 text-center">{title}</h2>
      {
        options.length
        && options.map((option) => (
          <Option
            key={option.id}
            id={`radio-${option.id}`}
            type="radio"
            title={option.title}
            name={`field-name-${option.id}`}
            isChecked={option.checked || false}
            handleChange={() => onOptionChange(option.id)}
          />
        ))
      }
    </div>
  );
}

Question.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string,
    checked: PropTypes.bool,
  })).isRequired,
  classname: PropTypes.string,
  onOptionChange: PropTypes.func.isRequired,
};

Question.defaultProps = {
  classname: '',
};

export default Question;
