import { MOVE_CELL, RESET_GAME } from '../actions';

import { getRandomPosition } from '../helpers';

const initialState = {
  items: getRandomPosition(),
};

const board = (state = initialState, { type, payload }) => {
  let newState;

  switch (type) {
    case MOVE_CELL:
      return {
        items: [...payload.cells],
      };

    case RESET_GAME:
      newState = getRandomPosition();
      return {
        items: [...newState],
      };

    default:
      return state;
  }
};

export default board;
