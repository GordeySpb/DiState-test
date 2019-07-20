import React from 'react';

import Cell from '../Cell';

import { layout } from '../../helpers/index';

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = value => {
    const { moveCell, items } = this.props;
    const emptyIndex = items.indexOf(0);
    const targetIndex = items.indexOf(value);
    const dif = Math.abs(targetIndex - emptyIndex);

    if (dif == 1 || dif == 4) {
      items[emptyIndex] = value;
      items[targetIndex] = 0;
      moveCell(items);
    }
  };

  render() {
    const { items } = this.props;

    return (
      <div className="game">
        {items.map((i, key) => {
          const cellClass = key ? 'cell' : 'empty cell';
          const [x, y] = layout[i];
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
