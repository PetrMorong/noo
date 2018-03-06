import React from 'react';
import styled from 'styled-components';
import { reduxForm, Field } from 'redux-form/immutable';
import { TextField } from 'redux-form-material-ui';
import { compose } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import _ from 'lodash';

import reducer from './LoginPage.reducer';
import saga from './LoginPage.saga';
import { Wrap, Slogan, ClickableLink } from './styles';
import { login } from './LoginPage.actions';
import { makeSelectError, makeSelectSubmitting } from './LoginPage.selectors';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
`;

// TODO submitting
// validation everything empty
class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { error } = this.props;
    return (
      <Container>
        <Wrap>
          <Slogan>
            <b>Login</b>
            <br />
            With your Nookpad account
          </Slogan>
          <Field
            name="email"
            component={TextField}
            floatingLabelText="Email"
            className="createAccount-firstName"
            errorText={_.get(error, 'field') === 'email' && error.msg}
          />
          <Field
            name="password"
            component={TextField}
            floatingLabelText="Password"
            className="createAccount-lastName"
            errorText={_.get(error, 'field') === 'password' && error.msg}
          />
          <div className="flex justify-between mt4">
            <ClickableLink to="/create-account">Create account</ClickableLink>
            <RaisedButton
              primary
              label={'login'}
              labelStyle={{ color: 'white' }}
              onClick={this.props.handleLogin}
            />
          </div>
        </Wrap>
      </Container>
    );
  }
}

LoginPage.propTypes = {
  handleLogin: PropTypes.func,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.object,
  ]),
};

export function mapDispatchToProps(dispatch) {
  return {
    handleLogin: () => dispatch(login()),
  };
}

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
  submitting: makeSelectSubmitting(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withForm = reduxForm({ form: 'loginForm' });
const withSaga = injectSaga({ key: 'loginPage', saga });
const withReducer = injectReducer({ key: 'loginPage', reducer });

export default compose(
  withReducer,
  withForm,
  withConnect,
  withSaga,
)(LoginPage);
