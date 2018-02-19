import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import * as functions from 'containers/App/actions';
import {
  makeSelectOpenConfirmDialog,
  makeSelectDataConfirmDialog,
} from 'containers/App/selectors';
import _ from 'lodash';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

function ConfirmDialog({ handleToggleConfirmDialog, openConfirmDialog, dataConfirmDialog, handleClickConfirm }) {
  return (
    <div id="confirmDialog">
      {openConfirmDialog &&
        <Dialog
          actions={[
            <FlatButton
              label={_.get(dataConfirmDialog, 'cancelLabel', '')}
              primary
              onClick={handleToggleConfirmDialog}
            />,
            <FlatButton
              label={_.get(dataConfirmDialog, 'confirmLabel', '')}
              primary
              onClick={_.partial(handleClickConfirm, dataConfirmDialog.confirmOnClick)}
            />,
          ]}
          contentStyle={{ minWidth: '350px', width: '350px' }}
          modal={false}
          open={openConfirmDialog}
          onRequestClose={handleToggleConfirmDialog}
        >
          {dataConfirmDialog.message}
        </Dialog>
      }
    </div>
  );
}

ConfirmDialog.propTypes = {
  handleToggleConfirmDialog: PropTypes.func,
  openConfirmDialog: PropTypes.bool,
  dataConfirmDialog: PropTypes.object,
  handleClickConfirm: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    handleToggleConfirmDialog: () => dispatch(functions.toggleConfirmDialog()),
    handleClickConfirm: (funcName) => dispatch(functions[funcName]()),
  };
}

const mapStateToProps = createStructuredSelector({
  openConfirmDialog: makeSelectOpenConfirmDialog(),
  dataConfirmDialog: makeSelectDataConfirmDialog(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmDialog);
