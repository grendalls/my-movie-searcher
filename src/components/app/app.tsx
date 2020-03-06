import React from 'react';
import Header from '../header';
import { connect } from 'react-redux';

const asyncAction = () => async dispatch => {
  dispatch({
    type: 'test',
    payload: 'sadad'
  });
  const a = () => setTimeout(() => dispatch({
    type: 'async_test',
    payload: 'asdsda'
  }), 2000);
  const res = await Promise.resolve().then(a);

}

const App = (props) => {
  props.asyncAction();
  return (
    <div>
      <Header />
    </div>
  );
};

export default connect(null, {
  asyncAction
})(App);
