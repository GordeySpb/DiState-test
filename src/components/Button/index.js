import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {Function} param.onClick cb for reset current game
 * @param {string} param.name name for button
 */

const Button = ({ onClick, name }) => (
  <button onClick={onClick} className="button-reset" type="button">
    {name}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Button;
