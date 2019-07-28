import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get } from 'lodash/fp';
import { every } from 'lodash';
import { createSelector } from 'reselect';

import { moveCell, resetGame } from '../actions/index';
import Game from '../components/Game';

const getItems = get('board.items');
const getWinState = createSelector(
  getItems,
  items => every(
      items,
      (value, index, array) => index === 0 || parseInt(array[index - 1], 10) <= parseInt(value, 10),
    ),
);

const mapStateToProps = state => ({
  cells: getItems(state),
  isWon: getWinState(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({ moveCell, resetGame }, dispatch);

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Game);

export default GameContainer;
