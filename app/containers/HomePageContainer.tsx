/**
 * Home Page Container
 *
 * Here we'll map the props and state that will be used by this page
 * as well as any children of this page
 * */
import { connect } from 'react-redux';
import HomeLayout from '../layouts/HomeLayout';

export interface homeState {}

function mapStateToProps(state: homeState) {
  return state;
}

export default connect(mapStateToProps)(HomeLayout);
