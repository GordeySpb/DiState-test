import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { moveCell } from '../actions/index';

import Game from '../components/Game';

const mapStateToProps = ({ board: { items } }) => ({ items });

const mapDispatchToProp = dispatch => bindActionCreators({ moveCell }, dispatch);

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProp,
)(Game);

export default GameContainer;
