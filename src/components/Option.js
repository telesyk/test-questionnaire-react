import React from 'react';
import PropTypes from 'prop-types';
// import { OptionContext } from '../context';

function Option({
  type,
  name,
  isChecked,
  title,
  id,
  handleChange,
}) {
  // const { currentQuestionId } = useContext(OptionContext);
  // // eslint-disable-next-line
  // console.log(currentQuestionId);

  return (
    <div>
      <input
        id={id}
        className="peer/draft form-radio mr-2 mb-0.5 border-slate-300 text-sky-400 focus:ring-sky-300"
        type={type}
        name={name}
        checked={isChecked}
        onChange={handleChange}
      />
      <label className="peer-checked/draft:text-sky-500 font-medium" htmlFor={id}>{title}</label>
    </div>
  );
}

Option.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};

Option.defaultProps = {
  isChecked: false,
};

export default Option;
