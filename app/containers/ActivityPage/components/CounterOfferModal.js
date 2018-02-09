import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import { reduxForm, Field } from 'redux-form/immutable';
import {
  TextField,
  DatePicker,
} from 'redux-form-material-ui';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Modal from 'components/Modal/index';
import OfferIcon from 'material-ui/svg-icons/action/assignment';

import { toggleCounterOfferModal, submitCounterOffer } from '../ActivityPage.actions';
import { makeSelectOpenCounterOfferModal } from '../ActivityPage.selectors';

const Row = styled.div`
  display: flex;
  margin-top: -15px;
  .makeOffer-priceInput {
    width: 50% !important;
    margin-right: 15px;
  }
  .makeOffer-dateInput {
    width: 50% !important;
  }
`;
const SaveButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 35px;
`;

function CounterOfferModal({ handleToggleCounterOfferModal, openCounterOfferModal, handleSubmitCounterOffer }) {
  return (
    <div style={{ height: '100%' }}>
      <Modal
        show={openCounterOfferModal}
        title="Counter offer"
        icon={<OfferIcon />}
        onClose={handleToggleCounterOfferModal}
        style={{ height: 'auto' }}
      >
        <Row>
          <Field
            name="price"
            component={TextField}
            hintText="Price"
            floatingLabelText="Price"
            className="makeOffer-priceInput"
          />
          <Field
            name="moveInDate"
            component={DatePicker}
            format={null}
            hintText="Date"
            className="makeOffer-dateInput"
            textFieldStyle={{ width: '100%' }}
            floatingLabelText="Move-in Date"
          />
        </Row>
        <SaveButtonWrap>
          <RaisedButton
            primary
            label="Submit"
            labelStyle={{ color: 'white' }}
            onClick={handleSubmitCounterOffer}
          />
        </SaveButtonWrap>
      </Modal>
    </div>
  );
}

CounterOfferModal.propTypes = {
  handleToggleCounterOfferModal: PropTypes.func,
  openCounterOfferModal: PropTypes.bool,
  handleSubmitCounterOffer: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    handleToggleCounterOfferModal: () => dispatch(toggleCounterOfferModal()),
    handleSubmitCounterOffer: () => dispatch(submitCounterOffer()),
  };
}

const mapStateToProps = createStructuredSelector({
  openCounterOfferModal: makeSelectOpenCounterOfferModal(),
});
const withForm = reduxForm({ form: 'counterOfferForm' });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withForm,
  withConnect,
)(CounterOfferModal);
