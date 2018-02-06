import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Wrap,
  Img,
  Img2,
} from './styles';

export default function Notification({ item }) {
  const navigateTo = () => {
    if (item.type === 'viewing') {
      return '/activity';
    }
    return '';
  };
  // TODO on Click set viewed false
  // TODO if there are any notif show red dot
  return (
    <Link to={navigateTo()} style={{ textDecoration: 'none' }}>
      <Wrap>
        <Img src="https://lh3.googleusercontent.com/-o3hd5fzdNN4/AAAAAAAAAAI/AAAAAAAAFwQ/pTOxRXPhNdw/s36-p-k-rw-no/photo.jpg" alt="" />
        <span>{item.message}</span>
        <Img2 src="http://www.shared-house.com/images37/49954-3.jpg" alt="" />
      </Wrap>
    </Link>
  );
}

Notification.propTypes = {
  item: PropTypes.object,
};
