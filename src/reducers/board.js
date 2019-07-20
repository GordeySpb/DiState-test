import { MOVE_CELL } from '../actions/index';

import { getRandomPosition } from '../helpers/index';

const initialState = {
  // items: getRandomPosition(),
  items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0],
};

const board = (state = initialState, { type, payload }) => {
  switch (type) {
    case MOVE_CELL:
      return { items: [...payload.cells] };

    default:
      return state;
  }
};

export default board;
