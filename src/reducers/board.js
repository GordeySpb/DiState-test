import { MOVE_CELL } from '../actions/index';

import { getRandomPosition } from '../helpers/index';

const initialState = {
  items: getRandomPosition(),
};

const board = (state = initialState, { type, payload }) => {
  switch (type) {
    case MOVE_CELL:
      return { items: payload };

    default:
      return state;
  }
};

export default board;
