import React from 'react';
import PropTypes from 'prop-types';

/**
 * Cell Component
 * @param {number} param.value value inner Cell
 * @param {string} param.className class for Cell
 * @param {string} param.style style for position Cell
 * @param {Function} param.onClick cb for move Cell
 */

const Cell = ({
 value, className, style, onClick
}) => (
  <div
    onClick={onClick}
    className={className}
    style={style}
    role="presentation"
  >
    {value}
  </div>
);

Cell.propTypes = {
  value: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  onClick: PropTypes.func, // TODO в конце запятая. Я бы её убрал, но это вкусовщина. Вроде используется prettier, но что-то его пока не видно. Посмотрите инструмент husky(он эту проблему решит на корню)
};

Cell.defaultProps = {
  onClick: () => {},
};

export default Cell;
