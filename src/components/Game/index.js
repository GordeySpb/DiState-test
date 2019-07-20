import React from 'react';

import Cell from '../Cell';

import every from 'lodash/every';

import { layout } from '../../helpers/index';

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = index => {
    const { items, moveCell } = this.props;
    const cells = [...items];
    const emptyIndex = items.indexOf(0);
    const targetIndex = items.indexOf(index);
    const dif = Math.abs(targetIndex - emptyIndex);

    if (dif === 1 || dif === 4) {
      cells[emptyIndex] = index;
      cells[targetIndex] = 0;
      moveCell({ cells });

      let win = every(cells, (value, index, array) => {
        value = value || 16;
        return index === 0 || parseInt(array[index - 1]) <= parseInt(value);
      });
      if (win) {
        console.log('win');
      }
    }
  };

  render() {
    const { items } = this.props;

    return (
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
              onClick={() => this.handleClick(key)}
            />
          );
        })}
      </div>
    );
  }
}

export default Game;
