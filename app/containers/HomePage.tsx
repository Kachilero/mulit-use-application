import { connect } from 'react-redux';
import MainWindow from '../components/MainWindow';

export interface mainWindowState {}

function mapStateToProps(state: mainWindowState) {
  return state;
}

export default connect(mapStateToProps)(MainWindow);
