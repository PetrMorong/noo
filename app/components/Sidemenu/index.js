import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import HomeIcon from 'material-ui/svg-icons/action/home';
import SearchIcon from 'material-ui/svg-icons/action/search';
import AddIcon from 'material-ui/svg-icons/content/add';
import FavoriteIcon from 'material-ui/svg-icons/action/favorite-border';
import { toggleSideMenu } from 'containers/App/actions';
import muiThemeable from 'material-ui/styles/muiThemeable';

import SidemenuWrap from './SidemenuWrap';
import HeaderBurger from '../Header/HeaderBurger';
import Logo from '../Header/Logo';
import SidemenuHeader from './SidemenuHeader';
import SidemenuLink from './SidemenuLink';
import SidemenuOverlay from './SidemenuOverlay';
import messages from './messages';
import { makeSelectSideMenuOpen, makeSelectPathname } from './Sidemenu.selectors';

function Sidemenu({ handleBurgerClick, sideMenuOpen, pathname, muiTheme }) {
  return (
    <div>
      <SidemenuWrap opened={sideMenuOpen}>
        <SidemenuHeader>
          <HeaderBurger onClick={handleBurgerClick} />
          <Logo />
        </SidemenuHeader>
        <SidemenuLink
          message={messages.home}
          currentPathName={pathname}
          icon={<HomeIcon style={{ color: pathname === '/' ? muiTheme.palette.primary1Color : muiTheme.palette.textColor }} />}
          to="/"
        />
        <SidemenuLink
          message={messages.createProperty}
          currentPathName={pathname}
          icon={<AddIcon style={{ color: pathname === '/create-property' ? muiTheme.palette.primary1Color : muiTheme.palette.textColor }} />}
          to="/list-property"
        />
        <SidemenuLink
          message={messages.findProperty}
          currentPathName={pathname}
          icon={<SearchIcon style={{ color: pathname === '/search' ? muiTheme.palette.primary1Color : muiTheme.palette.textColor }} />}
          to="/search"
        />
        <SidemenuLink
          message={messages.favoriteProperty}
          currentPathName={pathname}
          icon={<FavoriteIcon style={{ color: pathname === '/favorite-properties' ? muiTheme.palette.primary1Color : muiTheme.palette.textColor }} />}
          to="/favorite-properties"
        />
      </SidemenuWrap>
      <SidemenuOverlay opened={sideMenuOpen} onClick={handleBurgerClick} />
    </div>
  );
}

Sidemenu.propTypes = {
  handleBurgerClick: PropTypes.func,
  sideMenuOpen: PropTypes.bool,
  pathname: PropTypes.string,
  muiTheme: PropTypes.object,
};

export function mapDispatchToProps(dispatch) {
  return {
    handleBurgerClick: () => dispatch(toggleSideMenu()),
  };
}

const mapStateToProps = createStructuredSelector({
  sideMenuOpen: makeSelectSideMenuOpen(),
  pathname: makeSelectPathname(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  muiThemeable(),
)(Sidemenu);
