import React from 'react';
import { Helmet } from 'react-helmet';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import saga from '../App/saga';
import { checkToken } from '../App/actions';
import { makeSelectCheckingToken } from '../App/selectors';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.handleCheckToken();
  }
  render() {
    if (this.props.checkingToken) {
      return <div>loading...</div>;
    }

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        HOME PAGE
      </article>
    );
  }
}

HomePage.propTypes = {
  handleCheckToken: PropTypes.func,
  checkingToken: PropTypes.bool,
};

export function mapDispatchToProps(dispatch) {
  return {
    handleCheckToken: () => dispatch(checkToken()),
  };
}

const mapStateToProps = createStructuredSelector({
  checkingToken: makeSelectCheckingToken(),
});

const withSaga = injectSaga({ key: 'app', saga });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  withSaga,
)(HomePage);
