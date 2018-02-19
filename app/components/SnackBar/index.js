import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import _ from 'lodash';

import reducer from './SnackBar.reducer';
import { closeSnackbar } from './SnackBar.actions';
import { makeSelectData } from './SnackBar.selectors';

function SnackbarComponent({ data, handleClose }) {
  return (
    <div>
      <Snackbar
        open={data.length > 0}
        message={_.get(data[0], 'message', '')}
        autoHideDuration={4000}
        onRequestClose={handleClose}
        style={{ background: 'rgba(0,0,0,.95)' }}
      />
    </div>
  );
}

SnackbarComponent.propTypes = {
  data: PropTypes.PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  handleClose: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    handleClose: () => dispatch(closeSnackbar()),
  };
}

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'snackbar', reducer });

export default compose(
  withReducer,
  withConnect,
)(SnackbarComponent);
