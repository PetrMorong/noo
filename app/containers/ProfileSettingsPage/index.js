import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import LockIcon from 'material-ui/svg-icons/action/lock-outline';
import CameraIcon from 'material-ui/svg-icons/image/photo-camera';
import RaisedButton from 'material-ui/RaisedButton';

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`;
const Card = styled.div`
  width: 450px;
  background: white;
  display: flex;
  padding: 20px;
  position: relative;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.07), 0 2px 3px 0 rgba(0, 0, 0, 0.11), 0 0 7px 0 rgba(0, 0, 0, 0.05);
`;
const Photo = styled.div`
  position: relative;
  height: 150px;
  cursor: pointer;
  img {
    border-radius: 50%;
    min-width: 150px;
    height: 150px;
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
function ProfileSettingsPage() {
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
                icon={<LockIcon />}
              />
              <RaisedButton label="Save" primary />
            </SaveButtonWrap>
          </InfoWrap>
        </Card>
      </Wrap>
    </div>
  );
}

export default ProfileSettingsPage;
