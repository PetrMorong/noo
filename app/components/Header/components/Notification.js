import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import NotifyIcon from 'material-ui/svg-icons/social/notifications';

import NotificationWrap from './NotificationWrap';
import RedAlert from './RedAlert';

function Notification({ onClick, notifications, location }) {
  return (
    <NotificationWrap>
      {notifications.length > 0 && <RedAlert type="alert" />}
      <IconButton onClick={onClick} iconStyle={{ fill: location === '/activity' ? 'white' : 'currentColor' }}>
        <NotifyIcon />
      </IconButton>
    </NotificationWrap>
  );
}

Notification.propTypes = {
  onClick: PropTypes.func,
  notifications: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  location: PropTypes.string,
};

export default Notification;
