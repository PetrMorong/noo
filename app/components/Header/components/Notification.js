import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import NotifyIcon from 'material-ui/svg-icons/social/notifications';

import NotificationWrap from './NotificationWrap';
import RedAlert from './RedAlert';

function Notification({ onClick, hasAlert, location }) {
  return (
    <NotificationWrap>
      {hasAlert && <RedAlert type="alert" />}
      <IconButton onClick={onClick} iconStyle={{ fill: location === '/activity' ? 'white' : 'currentColor' }}>
        <NotifyIcon />
      </IconButton>
    </NotificationWrap>
  );
}

Notification.propTypes = {
  onClick: PropTypes.func,
  hasAlert: PropTypes.bool.isRequired,
  location: PropTypes.string,
};

export default Notification;
