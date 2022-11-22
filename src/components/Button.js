import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, handleClick, isActive }) {
  return (
    <button
      type="button"
      className="inline-block rounded-lg bg-blue-600 px-4 py-1.5 shadow text-base font-normal leading-7 text-white ring-1 ring-blue-600 hover:bg-blue-700 hover:ring-blue-700 disabled:bg-blue-400 disabled:ring-blue-400"
      onClick={handleClick}
      disabled={!isActive}
    >
      <span className="mr-1">{children}</span>
      <span className="text-indigo-200" aria-hidden="true">
        &rarr;
      </span>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  handleClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

Button.defaultProps = {
  isActive: true,
};

export default Button;
