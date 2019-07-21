export const MOVE_CELL = 'MOVE_CELL';
export const RESET_GAME = 'RESET_GAME';

export const moveCell = payload => ({ type: MOVE_CELL, payload });
export const resetGame = () => ({ type: RESET_GAME });
