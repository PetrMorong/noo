import React from 'react';
import { calendarHours } from 'config/index';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import moment from 'moment';
import _ from 'lodash';
import { getViewingPosition } from 'utils/helperFunctions';

import IconButton from 'material-ui/IconButton';
import LeftArrowIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import RightArrowIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import TimeIcon from 'material-ui/svg-icons/device/access-time';
import DatePicker from 'material-ui/DatePicker';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';
import {
  changeCalendarStartDate,
  toggleCalendar,
  getViewings,
  toggleViewingDetail,
} from '../../ActivityPage.actions';
import {
  makeSelectCalendarStartDate,
  makeSelectViewings,
  makeSelectLoadingViewings,
  makeSelectViewingDetail,
} from '../../ActivityPage.selectors';
import {
  ContainerHeader,
  Header,
  DaysRow,
  DaysCol,
  TimeCol,
  TimeRow,
  DataWrap,
  Day,
  Hour,
  Viewing,
  ViewingDetailContainer,
  ViewingDetailWrap,
  ViewingDetailHeader,
  ViewingDetailTitle,
  ViewingDetailRow,
  ViewingDetailButtons,
} from './styles';

class Calendar extends React.Component {
  componentWillMount() {
    // get data
    this.props.handleGetViewings();
  }
  render() {
    const {
      startDate,
      handleChangeCalendarStartDate,
      handleChangeCalendarStartDateByWeek,
      handleToggleCalendar,
      viewings,
      // loadingViewings,
      handleToggleViewingDetail,
      viewingDetail,
    } = this.props;
    // TODO loadingViewings
    // TODO get real user name
    // TODO colors base on status, get real data intead of placeholders
    // Accept, refuse click handlers
    const enhancedViewings = {
      dayOne: [],
      dayTwo: [],
      dayThree: [],
      dayFour: [],
      dayFive: [],
      daySix: [],
      daySeven: [],
    };
    viewings.map((item) => {
      if (moment(item.date).isSame(moment(startDate))) {
        enhancedViewings.dayOne = [...enhancedViewings.dayOne, item];
      }
      if (moment(item.date).isSame(moment(startDate).add(1, 'days'))) {
        enhancedViewings.dayTwo = [...enhancedViewings.dayTwo, item];
      }
      if (moment(item.date).isSame(moment(startDate).add(2, 'days'))) {
        enhancedViewings.dayThree = [...enhancedViewings.dayThree, item];
      }
      if (moment(item.date).isSame(moment(startDate).add(3, 'days'))) {
        enhancedViewings.dayFour = [...enhancedViewings.dayFour, item];
      }
      if (moment(item.date).isSame(moment(startDate).add(4, 'days'))) {
        enhancedViewings.dayFive = [...enhancedViewings.dayFive, item];
      }
      if (moment(item.date).isSame(moment(startDate).add(5, 'days'))) {
        enhancedViewings.daySix = [...enhancedViewings.daySix, item];
      }
      if (moment(item.date).isSame(moment(startDate).add(6, 'days'))) {
        enhancedViewings.daySeven = [...enhancedViewings.daySix, item];
      }
      return false;
    });
    return (
      <ContainerHeader>
        <Header>
          <DatePicker
            className="activity-calendar"
            value={new Date(startDate)}
            autoOk
            formatDate={(date) => moment(date).format('DD.MM.YYYY')}
            onChange={handleChangeCalendarStartDate}
          />
          <IconButton
            tooltip="Previous week"
            onClick={_.partial(handleChangeCalendarStartDateByWeek, moment(startDate).subtract(7, 'days').format())}
          >
            <LeftArrowIcon />
          </IconButton>
          <IconButton
            tooltip="Next week"
            onClick={_.partial(handleChangeCalendarStartDateByWeek, moment(startDate).add(7, 'days').format())}
          >
            <RightArrowIcon />
          </IconButton>
          <div className="activity-options">
            <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
              <MenuItem primaryText="Specify viewing time" />
              <MenuItem primaryText="Others.." />
            </IconMenu>
            <IconButton
              tooltip="Close"
              onClick={handleToggleCalendar}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </Header>
        <DaysRow>
          {_.times(7, (value) => (
            <DaysCol>
              <span>{moment(startDate).add(value, 'd').format('ddd')}</span>
              <div><b>{moment(startDate).add(value, 'd').format('D')}</b></div>
            </DaysCol>
          ))}
        </DaysRow>
        <DataWrap>
          <TimeCol>
            {calendarHours.map((item) => (
              <TimeRow><div>{item}:00</div></TimeRow>
            ))}
          </TimeCol>
          <Day>
            {calendarHours.map((item) => (
              <Hour key={item}>
                {enhancedViewings.dayOne.map((x) => {
                  if (x.time.substring(0, 2) === item) {
                    return (
                      <Viewing
                        style={getViewingPosition(x)}
                        onClick={_.partial(handleToggleViewingDetail, x)}
                      >
                        <span>{`${x.time} - Petr Morong`}</span>
                      </Viewing>
                    );
                  }
                  return <div></div>;
                })}
              </Hour>
            ))}
          </Day>
          <Day>
            {calendarHours.map((item) => (
              <Hour key={item}>
                {enhancedViewings.dayTwo.map((x) => {
                  if (x.time.substring(0, 2) === item) {
                    return (
                      <Viewing
                        style={getViewingPosition(x)}
                        onClick={_.partial(handleToggleViewingDetail, x)}
                      >
                        <span>{`${x.time} - Petr Morong`}</span>
                      </Viewing>
                    );
                  }
                  return <div></div>;
                })}
              </Hour>
            ))}
          </Day>
          <Day>
            {calendarHours.map((item) => (
              <Hour key={item}>
                {enhancedViewings.dayThree.map((x) => {
                  if (x.time.substring(0, 2) === item) {
                    return (
                      <Viewing
                        style={getViewingPosition(x)}
                        onClick={_.partial(handleToggleViewingDetail, x)}
                      >
                        <span>{`${x.time} - Petr Morong`}</span>
                      </Viewing>
                    );
                  }
                  return <div></div>;
                })}
              </Hour>
            ))}
          </Day>
          <Day>
            {calendarHours.map((item) => (
              <Hour key={item}>
                {enhancedViewings.dayFour.map((x) => {
                  if (x.time.substring(0, 2) === item) {
                    return (
                      <Viewing
                        style={getViewingPosition(x)}
                        onClick={_.partial(handleToggleViewingDetail, x)}
                      >
                        <span>{`${x.time} - Petr Morong`}</span>
                      </Viewing>
                    );
                  }
                  return <div></div>;
                })}
              </Hour>
            ))}
          </Day>
          <Day>
            {calendarHours.map((item) => (
              <Hour key={item}>
                {enhancedViewings.dayFive.map((x) => {
                  if (x.time.substring(0, 2) === item) {
                    return (
                      <Viewing
                        style={getViewingPosition(x)}
                        onClick={_.partial(handleToggleViewingDetail, x)}
                      >
                        <span>{`${x.time} - Petr Morong`}</span>
                      </Viewing>
                    );
                  }
                  return <div></div>;
                })}
              </Hour>
            ))}
          </Day>
          <Day>
            {calendarHours.map((item) => (
              <Hour key={item}>
                {enhancedViewings.daySix.map((x) => {
                  if (x.time.substring(0, 2) === item) {
                    return (
                      <Viewing
                        style={getViewingPosition(x)}
                        onClick={_.partial(handleToggleViewingDetail, x)}
                      >
                        <span>{`${x.time} - Petr Morong`}</span>
                      </Viewing>
                    );
                  }
                  return <div></div>;
                })}
              </Hour>
            ))}
          </Day>
          <Day>
            {calendarHours.map((item) => (
              <Hour key={item}>
                {enhancedViewings.daySeven.map((x) => {
                  if (x.time.substring(0, 2) === item) {
                    return (
                      <Viewing
                        style={getViewingPosition(x)}
                        onClick={_.partial(handleToggleViewingDetail, x)}
                      >
                        <span>{`${x.time} - Petr Morong`}</span>
                      </Viewing>
                    );
                  }
                  return <div></div>;
                })}
              </Hour>
            ))}
          </Day>
        </DataWrap>
        {viewingDetail &&
          <ViewingDetailContainer
            onClick={_.partial(handleToggleViewingDetail, {})}
            tabIndex="0"
            role="button"
          >
            <ViewingDetailWrap onClick={(e) => e.stopPropagation()}>
              <ViewingDetailHeader>
                <IconMenu
                  iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                  anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                  targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                  iconStyle={{ fill: 'white' }}
                >
                  <MenuItem primaryText="...." />
                  <MenuItem primaryText="Others.." />
                </IconMenu>
                <IconButton
                  tooltip="Close"
                  onClick={_.partial(handleToggleViewingDetail, {})}
                  iconStyle={{ fill: 'white' }}
                >
                  <CloseIcon />
                </IconButton>
                <ViewingDetailTitle>
                  Cozy appartement
                  <span>7 boyd street London</span>
                </ViewingDetailTitle>
              </ViewingDetailHeader>
              <ViewingDetailRow>
                <img src="https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Creator/17549/creator17549._QL80_TTD_.jpg" alt="" />
                <span>Milan pavkovic</span>
              </ViewingDetailRow>
              <ViewingDetailRow className="ViewingDetailRow">
                <TimeIcon />
                <div>
                  {moment(viewingDetail.date).format('DD.MM.YYYY')}
                  <span>{viewingDetail.time}</span>
                </div>
              </ViewingDetailRow>
              <ViewingDetailButtons>
                <FlatButton
                  label="Refuse"
                  primary
                />
                <FlatButton
                  label="Accept"
                  primary
                />
              </ViewingDetailButtons>
            </ViewingDetailWrap>
          </ViewingDetailContainer>
        }
      </ContainerHeader>
    );
  }
}

Calendar.propTypes = {
  startDate: PropTypes.string,
  handleChangeCalendarStartDate: PropTypes.func,
  handleChangeCalendarStartDateByWeek: PropTypes.func,
  handleToggleCalendar: PropTypes.func,
  handleGetViewings: PropTypes.func,
  viewings: PropTypes.array,
  // loadingViewings: PropTypes.bool,
  handleToggleViewingDetail: PropTypes.func,
  viewingDetail: PropTypes.object,
};

export function mapDispatchToProps(dispatch) {
  return {
    handleChangeCalendarStartDate: (x, date) => dispatch(changeCalendarStartDate(moment(date).format())),
    handleChangeCalendarStartDateByWeek: (date) => dispatch(changeCalendarStartDate(date)),
    handleToggleCalendar: () => dispatch(toggleCalendar()),
    handleGetViewings: () => dispatch(getViewings()),
    handleToggleViewingDetail: (item) => dispatch(toggleViewingDetail(item)),
  };
}

const mapStateToProps = createStructuredSelector({
  startDate: makeSelectCalendarStartDate(),
  viewings: makeSelectViewings(),
  loadingViewings: makeSelectLoadingViewings(),
  viewingDetail: makeSelectViewingDetail(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
