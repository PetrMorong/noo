import React from 'react';
import styled from 'styled-components';
import { compose } from 'redux';
import { TextField } from 'redux-form-material-ui';
import { reduxForm, Field } from 'redux-form/immutable';
import CameraIcon from 'material-ui/svg-icons/image/photo-camera';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';

import reducer from './CreateAccountPage.reducer';
import saga from './CreateAccountPage.saga';
import { Wrap, Slogan, FieldRow, Photo } from './styles';
import { createAccount } from './CreateAccountPage.actions';
import { makeSelectError, makeSelectSubmitting } from './CreateAccountPage.selectors';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);
`;

// TODO image uploading
// TODO front end form validation
// TODO prevent double click, full screen loader ??
function CreateAccountPage({ handleCreateAccount, error, submitting }) {
  return (
    <Container>
      <Wrap>
        <Slogan>
          <b>Create Account</b>
        </Slogan>
        <div className="flex">
          <div>
            <FieldRow>
              <Field
                name="firstName"
                component={TextField}
                floatingLabelText="First name"
                className="createAccount-firstName"
              />
              <Field
                name="lastName"
                component={TextField}
                floatingLabelText="Last name"
                className="createAccount-lastName"
              />
            </FieldRow>
            <Field
              name="email"
              component={TextField}
              floatingLabelText="Email"
              className="createAccount-field"
              errorText={error && 'Email is already used'}
            />
            <Field
              name="phoneNumber"
              component={TextField}
              floatingLabelText="Phone number"
              className="createAccount-field"
            />
            <Field
              name="password"
              component={TextField}
              floatingLabelText="Password"
              className="createAccount-field"
            />
            <Field
              name="passwrodAgain"
              component={TextField}
              floatingLabelText="Password again"
              className="createAccount-field"
            />
          </div>
          <Photo >
            <img src="https://pbs.twimg.com/media/C-ZDmyeUMAA3gg3.jpg" alt="profile" />
            <div>
              <CameraIcon style={{ color: 'white' }} />
            </div>
          </Photo>
        </div>
        <div className="buttonWrap">
          <RaisedButton
            primary
            label={submitting ? 'Submitting' : 'Submit'}
            labelStyle={{ color: 'white' }}
            onClick={handleCreateAccount}
          />
        </div>
      </Wrap>
    </Container>
  );
}

CreateAccountPage.propTypes = {
  handleCreateAccount: PropTypes.func,
  error: PropTypes.any,
  submitting: PropTypes.bool,
};

const withForm = reduxForm({ form: 'createAccountForm' });

export function mapDispatchToProps(dispatch) {
  return {
    handleCreateAccount: () => dispatch(createAccount()),
  };
}

const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
  submitting: makeSelectSubmitting(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'createAccountPage', saga });
const withReducer = injectReducer({ key: 'createAccountPage', reducer });

export default compose(
  withReducer,
  withForm,
  withConnect,
  withSaga,
)(CreateAccountPage);
