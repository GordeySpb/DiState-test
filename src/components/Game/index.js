import React from 'react';
import PropTypes from 'prop-types';
import range from 'lodash/range';

import Cell from '../Cell';
import Button from '../Button';

const maxCells = 16;
const coordinate = 80;

const layout = range(0, maxCells).map((n) => {
  const row = Math.floor(n / 4);
  const col = n % 4;
  return [coordinate * col, coordinate * row];
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
  };

  handleMove = (index) => {
    const { items, moveCell } = this.props;
    const cells = [...items];
    const emptyIndex = items.indexOf(0);
    const targetIndex = items.indexOf(index);
    const dif = Math.abs(targetIndex - emptyIndex);

    if (dif === 1 || dif === 4) {
      cells[emptyIndex] = index;
      cells[targetIndex] = 0;
      moveCell({ cells });
    }
  };

  render() {
    const { items, isWon } = this.props;

    return (
      <div className="wrapper">
        {isWon && <div className="win">Winner!!!</div>}
        <div className="game">
          {items.map((i, key) => {
            const cellClass = key ? 'cell' : 'empty cell';
            const [x, y] = layout[items.indexOf(key)];
            const translate3d = `translate3d(${x}px,${y}px,0) scale(1.1)`;

            return (
              <Cell
                key={key}
                className={cellClass}
                value={key}
                style={{ transform: `${translate3d}` }}
                onClick={() => this.handleMove(key)}
              />
            );
          })}
        </div>
        <div className="button-wrapp">
          <Button onClick={this.handleReset} name="Reset">
            Click
          </Button>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  items: PropTypes.arrayOf(PropTypes.number).isRequired,
  isWon: PropTypes.bool.isRequired,
  resetGame: PropTypes.func,
  moveCell: PropTypes.func,
};

Game.defaultProps = {
  resetGame: () => {},
  moveCell: () => {},
};

export default Game;
