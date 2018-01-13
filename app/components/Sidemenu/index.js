import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import HomeIcon from 'material-ui/svg-icons/action/home';
import StartIcon from 'material-ui/svg-icons/toggle/star';
import { toggleSideMenu } from 'containers/App/actions';

import SidemenuWrap from './SidemenuWrap';
import HeaderBurger from '../Header/HeaderBurger';
import Logo from '../Header/Logo';
import SidemenuHeader from './SidemenuHeader';
import SidemenuLink from './SidemenuLink';
import SidemenuOverlay from './SidemenuOverlay';
import messages from './messages';
import { makeSelectSideMenuOpen } from './Sidemenu.selectors';

function Sidemenu({ handleBurgerClick, sideMenuOpen }) {
  return (
    <div>
      <SidemenuWrap opened={sideMenuOpen}>
        <SidemenuHeader>
          <HeaderBurger onClick={handleBurgerClick} />
          <Logo />
        </SidemenuHeader>
        <SidemenuLink message={messages.home} icon={<HomeIcon />} to="/" />
        <SidemenuLink message={messages.features} icon={<StartIcon />} to="/features" />
        <SidemenuLink message={messages.home} icon={<HomeIcon />} to="/" />
        <SidemenuLink message={messages.features} icon={<StartIcon />} to="/features" />
        <SidemenuLink message={messages.home} icon={<HomeIcon />} to="/" />
        <SidemenuLink message={messages.features} icon={<StartIcon />} to="/features" />
      </SidemenuWrap>
      <SidemenuOverlay opened={sideMenuOpen} onClick={handleBurgerClick} />
    </div>
  );
}

Sidemenu.propTypes = {
  handleBurgerClick: PropTypes.func,
  sideMenuOpen: PropTypes.bool,
};

export function mapDispatchToProps(dispatch) {
  return {
    handleBurgerClick: () => dispatch(toggleSideMenu()),
  };
}

const mapStateToProps = createStructuredSelector({
  sideMenuOpen: makeSelectSideMenuOpen(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(Sidemenu);
