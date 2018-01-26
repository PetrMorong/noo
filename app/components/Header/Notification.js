import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import NotifyIcon from 'material-ui/svg-icons/social/notifications';

import NotificationWrap from './NotificationWrap';
import RedAlert from './RedAlert';

function Notification({ onClick, hasAlert }) {
  return (
    <NotificationWrap>
      {hasAlert && <RedAlert type="alert" />}
      <IconButton onClick={onClick}>
        <NotifyIcon />
      </IconButton>
    </NotificationWrap>
  );
}

Notification.propTypes = {
  onClick: PropTypes.func,
  hasAlert: PropTypes.bool.isRequired,
};

export default Notification;
