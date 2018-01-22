import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import TimePicker from 'material-ui/TimePicker';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import muiThemeable from 'material-ui/styles/muiThemeable';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import Dialog from 'material-ui/Dialog';

const Wrap = styled.div`
  background: white;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
  width: 35%;
  height: 290px;
  padding: 20px;

  @media(max-width: 1000px) {
    height: ${(props) => props.expandMobile ? '100vh' : '80px'};
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid rgba(0,0,0,.1);
    padding: ${(props) => props.expandMobile ? '20px' : '0'};
    display: ${(props) => props.expandMobile ? 'block' : 'flex'};
    justify-content: center;
    transition: 250ms ease-out;
    z-index: 999;
  }
`;
const SmallWrap = styled.div`
  @media(max-width: 1000px) {
    width: 100%;
    display: ${(props) => props.expandMobile ? 'block' : 'flex'};
    align-items: center;
  }
`;
const Price = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: rgba(0,0,0,.8);
  span {
    font-size: 12px;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    margin-top: 1px;
    color: rgba(0,0,0,.7);
    @media(max-width: 1000px) {
      display: ${(props) => props.expandMobile ? 'block' : 'none'};
    }
  }
  @media(max-width: 1000px) {
    display: ${(props) => props.expandMobile ? 'block' : 'flex'};
    flex: 1;
    align-items: center;
    margin-left: ${(props) => props.expandMobile ? '0' : '15px'};
    span {
      margin-left: 5px;
      display: ${(props) => props.expandMobile ? '' : 'none'};
    }
  }
`;
const DateInputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media(max-width: 1000px) {
    display: ${(props) => props.expandMobile ? 'flex' : 'none'};
  }
`;
const H5 = styled.h5`
  margin-bottom: -3px;
  color: rgba(0,0,0,.75);
  font-weight: 600;
  @media(max-width: 1000px) {
    display: ${(props) => props.expandMobile ? 'block' : 'none'};
  }
`;
const Rbmobile = styled.div`
  display: none;
  padding-top: 5px;
  @media(max-width: 1000px) {
    display: block;
    margin-left: ${(props) => props.expandMobile ? '0' : '20px'};
    margin-top: ${(props) => props.expandMobile ? '0' : '-7px'};
    margin-right: ${(props) => props.expandMobile ? '0' : '20px'};
    div {
      width: ${(props) => props.expandMobile ? '100%' : 'auto'};
    }
  }
`;
const Rbweb = styled.div`
  @media(max-width: 1000px) {
    display: none;
  }
`;
const Fbmobile = styled.div`
  display: none;
  padding-top: 5px;
  @media(max-width: 1000px) {
    display: ${(props) => props.expandMobile ? 'none' : 'block'};
  }
`;
const Fbweb = styled.div`
  margin-top: 20px;
  @media(max-width: 1000px) {
    display: none;
  }
`;
const FlatButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid #009788;
  border-radius: 2px;
  margin-top: -5px;
`;
const IconButtonWrap = styled.div`
  display: none;
  @media(max-width: 1000px) {
    margin-left: -15px;
    margin-bottom: 15px;
    display: ${(props) => props.expandMobile ? 'block' : 'none'}
  }
`;

class ListingDetailPriceCard extends React.Component {
  constructor() {
    super();
    this.state = {
      expandMobile: false,
      openSuccessViewingDialog: false,
    };
  }

  handleToggleViewingMobile = () => {
    this.setState({ expandMobile: !this.state.expandMobile });
  }
  handleToggleDialog = () => {
    const { openSuccessViewingDialog, expandMobile } = this.state;
    this.setState({ openSuccessViewingDialog: !openSuccessViewingDialog, expandMobile: (expandMobile && openSuccessViewingDialog) ? false : expandMobile });
  }

  render() {
    const { muiTheme } = this.props;
    const { expandMobile } = this.state;
    return (
      <Wrap expandMobile={expandMobile}>
        <SmallWrap expandMobile={expandMobile}>
          <IconButtonWrap expandMobile={expandMobile}>
            <IconButton onClick={this.handleToggleViewingMobile}>
              <CloseIcon />
            </IconButton>
          </IconButtonWrap>
          <Price expandMobile={expandMobile}>
            ‎£99,999 <span> per month</span> <br /> <p>35 offers</p>
          </Price>

          <H5 expandMobile={expandMobile}>Select date and time</H5>
          <DateInputWrap expandMobile={expandMobile}>
            <DatePicker hintText="Date" textFieldStyle={{ width: expandMobile ? '90%' : '107px' }} />
            <TimePicker hintText="Time" textFieldStyle={{ width: expandMobile ? '100%' : '107px' }} />
          </DateInputWrap>
          <Fbmobile expandMobile={expandMobile}>
            <FlatButtonWrap>
              <FlatButton primary label="Offer" />
            </FlatButtonWrap>
          </Fbmobile>
          <Rbmobile expandMobile={expandMobile}>
            <RaisedButton primary label={expandMobile ? 'Schedule viewing' : 'Wiewing'} labelStyle={{ color: 'white' }} onClick={expandMobile ? this.handleToggleDialog : this.handleToggleViewingMobile} />
          </Rbmobile>
          <Rbweb>
            <RaisedButton primary label="Schedule viewing" fullWidth labelStyle={{ color: 'white' }} onClick={this.handleToggleDialog} />
          </Rbweb>
          <Fbweb>
            <FlatButtonWrap muiTheme={muiTheme} >
              <FlatButton primary fullWidth label="Submit offer" />
            </FlatButtonWrap>
          </Fbweb>
        </SmallWrap>
        <Dialog
          title="Your viewing request is on it’s way."
          actions={
            <FlatButton
              label="OK"
              primary
              onClick={this.handleToggleDialog}
            />
          }
          modal={false}
          contentStyle={{ width: '340px' }}
          titleStyle={{ color: 'rgba(0,0,0,.7)', fontSize: '18px', fontWeight: '500' }}
          open={this.state.openSuccessViewingDialog}
          onRequestClose={this.handleToggleDialog}
        >
          I will let you know once confirmed.
          Your can view and edit the viewing in your ACTIVITY page.
        </Dialog>
      </Wrap>
    );
  }
}

ListingDetailPriceCard.propTypes = {
  muiTheme: PropTypes.object,
};

export default muiThemeable()(ListingDetailPriceCard);
