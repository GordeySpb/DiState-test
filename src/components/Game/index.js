// TODO удалить папку Game и index.js переименовать Game.js(искать код когда 100500 index.js не очень приятно)
import React from 'react';
import PropTypes from 'prop-types';
import range from 'lodash/range';

import Cell from '../Cell';
import Button from '../Button';

// TODO вынести в константы числа. Дать имена хорошие
const layout = range(0, 16).map((n) => {
  const row = Math.floor(n / 4);
  const col = n % 4;
  return [80 * col, 80 * row];
});

/** Game Component
 * @param {Array} param.items array items for render
 * @param {Function} param.resetGame cb for reset current game
 * @param {Function} param.moveCell cb for move Cell
 * @param {Boolean} param.isWon get win state
 */

class Game extends React.Component {
  handleReset = () => {
    const { resetGame } = this.props;
    resetGame();
    // TODO this.props.resetGame(); слишком уж много лишних теледвижений для вызова функции
  };

  handleMove = (index) => {
    const { items, moveCell } = this.props;
    const cells = [...items]; // TODO в props называются items, потом зачем то копию делаем и обзываем cells. Может сразу и переимновать в cells.
    const emptyIndex = items.indexOf(0);
    const targetIndex = items.indexOf(index);
    const dif = Math.abs(targetIndex - emptyIndex); // TODO Почему имя не diff? (Вспомните git diff).

    if (dif === 1 || dif === 4) { // TODO 1, 4 - magic numbers. Вынести в константы и дать имена хорошие
      cells[emptyIndex] = index;
      cells[targetIndex] = 0;
      moveCell({ cells });
    }
  };

  render() {
    const { items, isWon } = this.props;

    return (
      <div className="wrapp"> // TODO название wrapp не очень
        {isWon && <div className="win">Winner!!!</div>}
        <div className="game">
          {items.map((i, key) => {
            // TODO i - очень плохое имя, к тому же эта переменная не используется.
            // TODO хорошо бы завернуть в функцию фабрику создание ячейки createCell(), тогда станет приятнее читать
            const cellClass = key ? 'cell' : 'empty cell';
            const [x, y] = layout[items.indexOf(key)];
            const translate3d = `translate3d(${x}px,${y}px,0) scale(1.1)`;

            return (
              <Cell
                key={key}
                className={cellClass}
                value={key} // TODO и здесь передается key, и в key={key}. Можно оставить что-то одно
                style={{ transform: `${translate3d}` }} // TODO я бы props style переименовал на transform, чтобы намекнуть что это именно для перемещения ячейки
                onClick={() => this.handleMove(key)}
              />
            );
          })}
        </div>
        <div className="button-wrapp"> // TODO надо бы button-wrapp переименовать на что-то более
          <Button onClick={this.handleReset}>Click</Button>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  items: PropTypes.arrayOf(PropTypes.number).isRequired, // TODO Переименовать в cells
  isWon: PropTypes.bool.isRequired,
  resetGame: PropTypes.func,
  moveCell: PropTypes.func,
};

Game.defaultProps = {
  // TODO внизу callback-и. Может пусть они будут по умолчанию null. Тогда необходимо будет добавить проверки на наличие
  // перед вызовом this.props.resetGame && this.props.resetGame() ПОДУМАТЬ ЕЩЁ ОБ ЭТОМ
  resetGame: () => {}, // TODO пустая функция. Может просто сделать обязательным параметром (см комментарий ниже)
  moveCell: () => {}, // TODO moveCell тоже необязательна. Хотя есть подозрение что без неё вообще никак. (см комментарий ниже)
  // TODO  Из-за того что из названия не ясно что это всего лишь callback-и для вызывающего когда, то делаются неверные предположения об их назначении. resetGame --> resetGameCallback, moveCell --> moveCellCallback
};

export default Game;
