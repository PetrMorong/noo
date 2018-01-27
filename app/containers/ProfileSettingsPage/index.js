import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Modal from 'components/Modal';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import LockIcon from 'material-ui/svg-icons/action/lock-outline';
import CameraIcon from 'material-ui/svg-icons/image/photo-camera';
import PhoneIcon from 'material-ui/svg-icons/hardware/phone-iphone';
import MailIcon from 'material-ui/svg-icons/communication/mail-outline';
import CardIcon from 'material-ui/svg-icons/action/credit-card';
import RaisedButton from 'material-ui/RaisedButton';

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  @media(max-width: 1000px) {
    flex-direction: column;
    margin-top: 0;
    padding: 15px;
  }
`;
const Card = styled.div`
  width: 450px;
  height: 370px;
  background: white;
  display: flex;
  padding: 20px;
  margin: 15px;
  position: relative;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.07), 0 2px 3px 0 rgba(0, 0, 0, 0.11), 0 0 7px 0 rgba(0, 0, 0, 0.05);
  @media(max-width: 600px) {
    width: 100%;
    margin: 0 20px;
  }
`;
const Card2 = styled.div`
  flex-direction: column;
  width: 450px;
  height: 370px;
  background: white;
  display: flex;
  padding: 20px;
  margin: 15px;
  position: relative;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.07), 0 2px 3px 0 rgba(0, 0, 0, 0.11), 0 0 7px 0 rgba(0, 0, 0, 0.05);
  @media(max-width: 600px) {
    width: 100%;
    margin: 20px;
  }
`;
const Photo = styled.div`
  position: relative;
  height: 150px;
  cursor: pointer;
  @media(max-width: 800px) {
    height: 100px;
  }
  img {
    border-radius: 50%;
    min-width: 150px;
    height: 150px;
    @media(max-width: 800px) {
      min-width: 100px;
      height: 100px;
    }
  }
  div {
    display: none;
    width: 100%;
    border-radius: 50%;
    height: 100%;
    top: 0;
    bottom: 0;
    position: absolute;
    background: rgba(0,0,0,.5);
    justify-content: center;
    align-items: center;
  }
  &:hover {
    div {
      display: flex;
    }
  }
`;
const InfoWrap = styled.div`
  margin-left: 25px;
  margin-bottom: 60px;
  .profile_input {
    margin-top: -10px;
  }
`;
const SaveButtonWrap = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  padding: 0 20px 15px 20px;
  left: 0;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;
const VerifyLineWrap = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 5px;
  padding: 30px 0;
  border-bottom: 1px solid rgba(0,0,0,.07);
  svg {
    fill: rgba(0,0,0,.55) !important;
    width: 40px !important;
    height: 40px !important;
  }
`;
const VerifyLineWrapSmall = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  color: rgba(0,0,0,.7);
  font-size: 15px;
  b {
    color: rgba(0,0,0,.80);
  }
`;
const Flex = styled.div`
  display: flex;
`;
class ProfileSettingsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      passwordModal: false,
    };
  }

  togglePasswordModal = () => {
    this.setState({ passwordModal: !this.state.passwordModal });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Search TODO Translate</title>
          <meta name="description" content="Search page of Nookpad" />
        </Helmet>
        <Wrap>
          <Card>
            <Photo >
              <img src="https://cdn.zeplin.io/users/5a3bd163fb87eb1040f93163/avatars/fa0cecce-0bc2-49f9-bf09-69628a9332aa.png" alt="profile" />
              <div>
                <CameraIcon style={{ color: 'white' }} />
              </div>
            </Photo>
            <InfoWrap>
              <TextField
                fullWidth
                floatingLabelText="Name"
                className="profile_input"
              />
              <TextField
                fullWidth
                floatingLabelText="Email"
                className="profile_input"
              />
              <TextField
                fullWidth
                floatingLabelText="Phone Number"
                className="profile_input"
              />
              <TextField
                fullWidth
                floatingLabelText="Company"
                className="profile_input"
              />
              <SaveButtonWrap>
                <FlatButton
                  label="Change password"
                  secondary
                  className="profile_changePassword"
                  onClick={this.togglePasswordModal}
                  icon={<LockIcon />}
                />
                <RaisedButton label="Save" primary />
              </SaveButtonWrap>
            </InfoWrap>
          </Card>
          <Card2>
            <VerifyLineWrap>
              <Flex>
                <PhoneIcon />
                <VerifyLineWrapSmall>
                  <span>Phone number</span>
                  <b>+33 0 64 57 88 9</b>
                </VerifyLineWrapSmall>
              </Flex>
              <FlatButton label="Verify" primary />
            </VerifyLineWrap>
            <VerifyLineWrap>
              <Flex>
                <MailIcon />
                <VerifyLineWrapSmall>
                  <span>Email address</span>
                  <b>john@gmail.com</b>
                </VerifyLineWrapSmall>
              </Flex>
              <FlatButton label="Verify" primary />
            </VerifyLineWrap>
            <VerifyLineWrap>
              <Flex>
                <CardIcon />
                <VerifyLineWrapSmall>
                  <span>Payout method</span>
                  <b>Visa **** **** **** 5789</b>
                </VerifyLineWrapSmall>
              </Flex>
              <FlatButton label="Change" primary />
            </VerifyLineWrap>
            <VerifyLineWrap style={{ border: 'none' }}>
              <Flex>
                <CardIcon />
                <VerifyLineWrapSmall>
                  <span>Payee method</span>
                </VerifyLineWrapSmall>
              </Flex>
              <FlatButton label="Add" primary />
            </VerifyLineWrap>
          </Card2>
        </Wrap>
        <Modal
          show={this.state.passwordModal}
          title="Change password"
          icon={<LockIcon />}
          onClose={this.togglePasswordModal}
        />
      </div>
    );
  }
}

export default ProfileSettingsPage;
