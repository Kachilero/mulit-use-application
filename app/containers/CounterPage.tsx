import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import CounterActions from '../store/counter/counter.actions';

export interface CounterState {
  counter: number;
}

function mapStateToProps(state: CounterState) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
