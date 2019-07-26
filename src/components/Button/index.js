import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {Function} param.onClick cb for reset current game
 * TODO вот тут не очень хорошо. Раз кнопка только для reset-a, дать имя ResetButton
 * TODO если убрать эту аннотацию то будет не ясно что это за кнопка(кстати уберите её, только лишнее место занимает)
 * TODO но я бы сделал кнопку более универсальной. Чтобы её можно было использовать для любых действий
 */

const Button = ({ onClick }) => ( // TODO если решите переделать в ResetButton, то onClick переименовать в reset
  <button onClick={onClick} className="reset" type="button"> // TODO className="button-reset". По-скольку стили прописаны для всего приложения в App.css. То нужно имена давать очень аккуратно(BEM подход).
  // TODO лучше бы использовать css-modules, css-in-js чтобы не приходилось париться с именованием стилей
    Reset
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func, // TODO сделать обязательным параметром
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
