import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

const BurgerWrapper = styled.div`
  padding: 0;
  position: relative;
  z-index: 5;
`;

function HeaderBurger({ onClick, location }) {
  return (
    <BurgerWrapper>
      <IconButton onClick={onClick} iconStyle={{ fill: location === '/activity' ? 'white' : 'currentColor' }}>
        <MenuIcon />
      </IconButton>
    </BurgerWrapper>
  );
}

HeaderBurger.propTypes = {
  onClick: PropTypes.func,
  location: PropTypes.string,
};

export default HeaderBurger;
