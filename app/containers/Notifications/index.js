import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import Loader from 'components/Loader';

// import SettingsIcon from 'material-ui/svg-icons/action/settings';
// import IconButton from 'material-ui/IconButton';
import saga from './Notifications.saga';

import { toggleNotifications, getNotifications } from './Notifications.actions';
import { makeSelectNotificationOpen, makeSelectData, makeSelectLoadingNotifications } from './Notifications.selectors';
import reducer from './Notifications.reducer';
import Notification from './components/Notification/index';

import {
  Wrap,
  Header,
  Close,
  Body,
} from './styles';

class Notifications extends React.Component {

  componentWillMount() {
    this.props.handleGetNotifications();
  }

  render() {
    const { opened, handleToggleNotifications, data, loading } = this.props;
    return (
      <div>
        <Wrap opened={opened}>
          <Header>
            <p>Notifications</p>
            {/* <IconButton tooltip="Settings" touch>
              <SettingsIcon />
            </IconButton> */}
          </Header>
          <Body>
            {loading &&
              <div className="loaderWrap">
                <Loader />
              </div>
            }
            {data.map((item) => (
              <Notification item={item} key={item.id} />
            ))}
            {(!data.length && !loading) &&
              <div className="loaderWrap">
                <span>No notifications</span>
              </div>
            }
          </Body>
        </Wrap>
        {opened &&
          <div role="button" tabIndex="0" onClick={handleToggleNotifications}>
            <Close />
          </div>
        }
      </div>
    );
  }
}

Notifications.propTypes = {
  opened: PropTypes.bool,
  handleToggleNotifications: PropTypes.func,
  handleGetNotifications: PropTypes.func,
  data: PropTypes.array,
  loading: PropTypes.bool,
};

export function mapDispatchToProps(dispatch) {
  return {
    handleToggleNotifications: () => dispatch(toggleNotifications()),
    handleGetNotifications: () => dispatch(getNotifications()),
  };
}

const mapStateToProps = createStructuredSelector({
  opened: makeSelectNotificationOpen(),
  data: makeSelectData(),
  loading: makeSelectLoadingNotifications(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'notifications', reducer });
const withSaga = injectSaga({ key: 'searchPage', saga });

export default compose(
  withSaga,
  withReducer,
  withConnect,
)(Notifications);
