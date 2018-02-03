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
import { Wrap, SmallWrap, IconButtonWrap, Price, H5, DateInputWrap, Fbmobile, FlatButtonWrap, Rbmobile, Rbweb, Fbweb } from './styles';

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
            ‎<span><strong>£99,999</strong> per month</span> <br /> <p>35 offers</p>
          </Price>

          <H5 expandMobile={expandMobile}>Select date and time</H5>
          <DateInputWrap expandMobile={expandMobile}>
            <DatePicker hintText="Date" textFieldStyle={{ width: expandMobile ? '90%' : '107px' }} />
            <TimePicker hintText="Time" textFieldStyle={{ width: expandMobile ? '90%' : '107px' }} />
          </DateInputWrap>
          <Fbmobile expandMobile={expandMobile}>
            <FlatButtonWrap>
              <FlatButton primary label="Offer" />
            </FlatButtonWrap>
          </Fbmobile>
          <Rbmobile expandMobile={expandMobile}>
            <RaisedButton primary label={expandMobile ? 'Schedule viewing' : 'Viewing'} labelStyle={{ color: 'white' }} onClick={expandMobile ? this.handleToggleDialog : this.handleToggleViewingMobile} />
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
