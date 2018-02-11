import React from 'react';
import styled from 'styled-components';
import { calendarHours } from 'config/index';

import IconButton from 'material-ui/IconButton';
import LeftArrowIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import RightArrowIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import DatePicker from 'material-ui/DatePicker';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const ContainerHeader = styled.div`
  background: #fdfdfd;
  height: 100%;
  width: 100%;
  margin-left: 50px;
  border-radius: 2px;
  opacity: 0.98;
  position: relative;
`;
const Header = styled.div`
  background: white;
  height: 50px;
  width: 100%;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 8px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  .activity-calendar {
    hr {
      display: none
    }
    width: 100px;
    color: rgba(0,0,0,.8);
  }
  .activity-options {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
`;
const DaysRow = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(0,0,0,.1);
  padding-left: 50px;
`;
const DaysCol = styled.div`
  height: 100%;
  border-left: 1px solid rgba(0,0,0,.1);
  flex: 1;
  padding: 8px;
  flex-direction: column;
  color: rgba(0,0,0,.6);
  b {
    font-size: 14px;
  }
`;
const TimeCol = styled.div`
  width: 50px;
  height: 100%;
`;
const TimeRow = styled.div`
  height: 60px;
  border-bottom: 1px solid rgba(0,0,0,.1);
  font-size: 13px;
  color: rgba(0,0,0,.7);
  div {
    padding: 5px 7px;
  }
`;
const DataWrap = styled.div`
  display: flex;
  overflow: overlay;
  height: calc( 100% - 120px );
  ::-webkit-scrollbar {
    background: transparent;
    height: 8px;
    width: 8px;
    border-left: 1px solid rgba(0,0,0,.1);
  }
  ::-webkit-scrollbar-thumb {
    border: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    background: #ddd
  }
`;
const Day = styled.div`
  flex: 1;
`;
const Hour = styled.div`
  border-bottom: 1px solid rgba(0,0,0,.1);
  border-left: 1px solid rgba(0,0,0,.1);
  height: 60px;
`;

// In progress
class Calendar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ContainerHeader>
        <Header>
          <DatePicker className="activity-calendar" />
          <IconButton tooltip="Previous week">
            <LeftArrowIcon />
          </IconButton>
          <IconButton tooltip="Next week">
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
            <IconButton tooltip="Close">
              <CloseIcon />
            </IconButton>
          </div>
        </Header>
        <DaysRow>
          <DaysCol><span>Mon</span><div><b>14</b></div></DaysCol>
          <DaysCol><span>Tue</span><div><b>15</b></div></DaysCol>
          <DaysCol><span>Wed</span><div><b>16</b></div></DaysCol>
          <DaysCol><span>Thu</span><div><b>17</b></div></DaysCol>
          <DaysCol><span>Fri</span><div><b>18</b></div></DaysCol>
          <DaysCol><span>Sat</span><div><b>19</b></div></DaysCol>
          <DaysCol><span>Sun</span><div><b>20</b></div></DaysCol>
        </DaysRow>
        <DataWrap>
          <TimeCol>
            {calendarHours.map((item) => (
              <TimeRow><div>{item}:00</div></TimeRow>
            ))}
          </TimeCol>
          <Day>
            {calendarHours.map((item) => (
              <Hour key={item}></Hour>
            ))}
          </Day>
          <Day>
            {calendarHours.map((item) => (
              <Hour key={item}></Hour>
            ))}
          </Day>
          <Day>
            {calendarHours.map((item) => (
              <Hour key={item}></Hour>
            ))}
          </Day>
          <Day>
            {calendarHours.map((item) => (
              <Hour key={item}></Hour>
            ))}
          </Day>
          <Day>
            {calendarHours.map((item) => (
              <Hour key={item}></Hour>
            ))}
          </Day>
          <Day>
            {calendarHours.map((item) => (
              <Hour key={item}></Hour>
            ))}
          </Day>
          <Day>
            {calendarHours.map((item) => (
              <Hour key={item}></Hour>
            ))}
          </Day>
        </DataWrap>
      </ContainerHeader>
    );
  }
}

export default Calendar;
