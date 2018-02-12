import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';

import { changeActivityMode, getListingByUserId } from './ActivityPage.actions';
import ActivitySidemenu from './components/ActivitySidemenu';
import ActivityChat from './components/ActivityChat/index';
import ActivityDefaultState from './components/ActivityDefaultState';
import Calendar from './components/Calendar';
import CounterOfferModal from './components/CounterOfferModal';
import { makeSelectMode, makeSelectOpenCalendar } from './ActivityPage.selectors';
import reducer from './ActivityPage.reducer';
import saga from './ActivityPage.saga';

const Container = styled.div`
  background: url('http://www.bloemendaalaanzee.nl/upload/images/comfort-met-sauna/800_3374lowres.jpg');
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  margin-top: -60px;
  display: flex;
`;
const Shadow = styled.div`
  background: rgba(0,0,0,.7);
  display: flex;
  width: 100%;
  height: 100%;
  padding: 80px 20px 0 20px;
`;

class ActivityPage extends React.Component {

  componentWillMount() {
    // get offer, contract, listings for userID
    const { getListings } = this.props;
    getListings();
  }

  render() {
    const {
      handleChangeActivityMode,
      mode,
      openCalendar,
    } = this.props;
    return (
      <div>
        <Helmet>
          <title>Activity Page</title>
          <meta name="description" content="Feature page of React.js Boilerplate application" />
        </Helmet>
        <Container>
          <Shadow>
            <ActivitySidemenu
              handleChangeActivityMode={handleChangeActivityMode}
              mode={mode}
            />
            <ActivityChat
              mode={mode}
            />
            {!openCalendar &&
              <ActivityDefaultState />
            }
            {openCalendar &&
              <Calendar />
            }
            <CounterOfferModal />
          </Shadow>
        </Container>
      </div>
    );
  }
}

ActivityPage.propTypes = {
  handleChangeActivityMode: PropTypes.func,
  mode: PropTypes.string,
  getListings: PropTypes.func,
  openCalendar: PropTypes.bool,
};

export function mapDispatchToProps(dispatch) {
  return {
    handleChangeActivityMode: (mode) => dispatch(changeActivityMode(mode)),
    getListings: () => dispatch(getListingByUserId()),
  };
}

const mapStateToProps = createStructuredSelector({
  mode: makeSelectMode(),
  openCalendar: makeSelectOpenCalendar(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'activity', reducer });
const withSaga = injectSaga({ key: 'searchPage', saga });

export default compose(
  withReducer,
  withConnect,
  withSaga,
)(ActivityPage);
