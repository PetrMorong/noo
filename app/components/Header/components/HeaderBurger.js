import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import RedAlert from './RedAlert';

const BurgerWrapper = styled.div`
  padding: 0;
  position: relative;
`;

function HeaderBurger({ onClick, hasAlert, location }) {
  return (
    <BurgerWrapper>
      {hasAlert && <RedAlert type="burger" />}
      <IconButton onClick={onClick} iconStyle={{ fill: location === '/activity' ? 'white' : 'currentColor' }}>
        <MenuIcon />
      </IconButton>
    </BurgerWrapper>
  );
}

HeaderBurger.propTypes = {
  onClick: PropTypes.func,
  hasAlert: PropTypes.bool,
  location: PropTypes.string,
};

export default HeaderBurger;
