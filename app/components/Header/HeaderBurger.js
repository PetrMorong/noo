import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

const BurgerWrapper = styled.div`
  padding: 0;
`;

function HeaderBurger({ onClick }) {
  return (
    <BurgerWrapper>
      <IconButton onClick={onClick}>
        <MenuIcon />
      </IconButton>
    </BurgerWrapper>
  );
}

HeaderBurger.propTypes = {
  onClick: PropTypes.func,
};

export default HeaderBurger;
