import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {Function} param.onClick cb for reset current game
 */

const Button = ({ onClick }) => (
  <button onClick={onClick} className="reset" type="button">
    Reset
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
