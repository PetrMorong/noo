import React from 'react';
import { Helmet } from 'react-helmet';
import Modal from 'components/Modal';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import LockIcon from 'material-ui/svg-icons/action/lock-outline';
import CameraIcon from 'material-ui/svg-icons/image/photo-camera';
import PhoneIcon from 'material-ui/svg-icons/hardware/phone-iphone';
import MailIcon from 'material-ui/svg-icons/communication/mail-outline';
import CardIcon from 'material-ui/svg-icons/action/credit-card';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Wrap,
  Card,
  Card2,
  Photo,
  InfoWrap,
  SaveButtonWrap,
  VerifyLineWrap,
  VerifyLineWrapSmall,
  Flex,
} from './styles';

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
