/**
 * About page
 *
 */
import { connect } from 'react-redux';
import About from '../components/About';

export interface aboutState {}

function mapStateToProps(state: aboutState) {
  return state;
}

export default connect(mapStateToProps)(About);
