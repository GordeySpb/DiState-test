import React from 'react';

import styles from './board.module.css';

import Cell from '../Cell';

const Board = () => (
  <div className={styles.boardWrapp}>
    {[0, 1, 2, 3, 4, 5].map((number, index) => (
      <Cell number={number} key={index} />
    ))}
  </div>
);

export default Board;
