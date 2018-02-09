import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form/immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import _ from 'lodash';
import {
  TextField,
  DatePicker,
} from 'redux-form-material-ui';
import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FileIcon from 'material-ui/svg-icons/editor/insert-drive-file';
import { compose } from 'redux';
import { checkFile } from 'utils/helperFunctions';
import Modal from 'components/Modal/index';
import OfferIcon from 'material-ui/svg-icons/action/assignment';
import AddIcon from 'material-ui/svg-icons/content/add';
import DoneIcon from 'material-ui/svg-icons/action/done';
import AccountIcon from 'material-ui/svg-icons/action/account-circle';
import {
  makeSelectmakeOfferForm,
  makeSelectRoomatesFound,
  makeSelectGarantorsFound,
} from 'containers/ListingDetailPage/ListingDetailPage.selectors';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/action/search';
import { getUserByEmail, submitOffer } from 'containers/ListingDetailPage/ListingDetailPage.actions';

const Wrap = styled.div`
  margin-right: 5px;
  margin-top: -30px;
  .makeOffer-priceInput {
    width: 50% !important;
    margin-right: 15px;
  }
  .makeOffer-durationInput {
    width: 50% !important;
  }
  .makeOffer-dateInput {
    width: 50% !important;
    margin-right: 15px;
  }
`;
const Row = styled.div`
  display: flex;
  margin-top: -15px;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline
`;
const Error = styled.div`
  font-size: 12px;
  color: red;
  margin-left: 15px;
  margin-top: 5px;
`;
const FileName = styled.div`
  font-size: 12px;
  color: rgba(0,0,0,.7);
  margin-left: 15px;
  margin-top: 5px;
`;
const RoomateWrap = styled.div`
  margin-left: 10px;
  margin-top: 15px;
  position: relative;
  width: 100%;
  margin-right: 5px;
  display: flex;
  align-items: center;
`;
export const Img = styled.img`
  min-width: 35px;
  min-height: 35px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;
export const RoomateName = styled.span`
  color: rgba(0,0,0,.7);
`;
const SaveButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;
const stylesUploadInput = {
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
    zIndex: 555,
  },
};

class ListingDetailMakeOffer extends React.Component {
  constructor() {
    super();
    this.state = {
      roomateFields: [],
      garantorFields: [],
    };
  }
  handleChangeInputFile = (e) => {
    e.preventDefault();
    const inputFile = e.target.files[0];
    if (!inputFile) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (upload) => {
      const fileData = {
        name: inputFile.name,
        mimeType: inputFile.type,
        size: inputFile.size,
        lastModifiedDate: inputFile.lastModifiedDate,
        content: upload.target.result,
      };
      if (checkFile(fileData) === true) {
        this.props.changeFieldForm('proofOfIncome', fileData);
      } else {
        this.props.changeFieldForm('proofOfIncome', { error: checkFile(fileData) });
      }
    };
    reader.readAsDataURL(inputFile);
  };

  handleAddRoomate = () => {
    this.setState({ roomateFields: [...this.state.roomateFields, { searchText: '' }] });
  }

  handleAddGarantor = () => {
    this.setState({ garantorFields: [...this.state.garantorFields, { searchText: '' }] });
  }

  updateInput = (index, text) => {
    const newRoomatesFields = [...this.state.roomateFields];
    newRoomatesFields[index] = { searchText: text };
    this.setState({ roomateFields: newRoomatesFields });
  }

  updateInputGarantor = (index, text) => {
    const newGarantorsFields = [...this.state.garantorFields];
    newGarantorsFields[index] = { searchText: text };
    this.setState({ garantorFields: newGarantorsFields });
  }

  closeModal = () => {
    this.setState({ roomateFields: [], garantorFields: [] });
    this.props.handleToggleOfferModal();
  }

  // TODO input checks according to tech docs
  // TODO loading state when getting users by email
  render() {
    const { openOfferModal, makeOfferForm, searchForUsers, roomatesFound, garantorsFound, handleSubmitOffer } = this.props;
    const { roomateFields, garantorFields } = this.state;
    return (
      <Modal
        show={openOfferModal}
        title="Submit offer"
        icon={<OfferIcon />}
        onClose={this.closeModal}
        style={{ width: '450px', height: 'auto' }}
      >
        <Wrap>
          <Row>
            <Field
              name="price"
              component={TextField}
              hintText="Price"
              floatingLabelText="Price"
              className="makeOffer-priceInput"
            />
            <Field
              name="deposit"
              component={TextField}
              hintText="Deposit"
              floatingLabelText="Deposit"
              className="makeOffer-durationInput"
            />
          </Row>
          <Row>
            <Field
              name="moveInDate"
              component={DatePicker}
              format={null}
              hintText="Date"
              className="makeOffer-dateInput"
              textFieldStyle={{ width: '100%' }}
              floatingLabelText="Move-in Date"
            />
            <Field
              name="leaseDuration"
              component={TextField}
              hintText="Lease duration (months)"
              floatingLabelText="Lease duration"
              className="makeOffer-durationInput"
            />
          </Row>
          <Col>
            <FlatButton
              primary
              label="Proof of income"
              icon={_.get(makeOfferForm, 'values.proofOfIncome.name') ? <DoneIcon /> : <FileIcon />}
              style={{ marginTop: '15px' }}
            >
              <input
                type="file"
                style={stylesUploadInput.uploadInput}
                onChange={this.handleChangeInputFile}
              />
            </FlatButton>
            <FileName>
              {_.get(makeOfferForm, 'values.proofOfIncome.name') &&
                <span>{makeOfferForm.values.proofOfIncome.name}</span>
              }
            </FileName>
            <Error>
              {_.get(makeOfferForm, 'values.proofOfIncome.error') &&
                <span>{makeOfferForm.values.proofOfIncome.error}</span>
              }
            </Error>
          </Col>
          <Col>
            {roomateFields.map((item, index) => (
              <RoomateWrap key={item}>
                {_.get(roomatesFound, `${[index]}`)
                  ? <Img src={roomatesFound[index].picture} alt="" />
                  : <AccountIcon style={{ width: '40px', height: '40px', marginRight: '10px', marginLeft: '-2px' }} />
                }
                {_.get(roomatesFound, `${[index]}`)
                  ? <RoomateName>{roomatesFound[index].firstName} {roomatesFound[index].lastName}</RoomateName>
                  : <AutoComplete
                    hintText="Type email of your roomate"
                    dataSource={[]}
                    onUpdateInput={_.partial(this.updateInput, index)}
                    searchText={roomateFields[index].searchText}
                    textFieldStyle={{ width: '300px' }}
                    errorText={_.get(roomatesFound, `${[index]}`, '') === false ? 'User with this email was not found, please tell your roomate to create account on Nookpad, then submit the offer' : ''}
                  />
                }
                {!_.get(roomatesFound, `${[index]}`) &&
                  <IconButton
                    style={{ position: 'absolute', right: '-10px' }}
                    onClick={_.partial(searchForUsers, [roomateFields[index].searchText, index, 'roomate'])}
                  >
                    <SearchIcon />
                  </IconButton>
                }
              </RoomateWrap>
            ))}
            <FlatButton
              primary
              label="Add roomate"
              icon={<AddIcon />}
              onClick={this.handleAddRoomate}
              style={{ marginTop: '15px' }}
            />
          </Col>
          <Col>
            {garantorFields.map((item, index) => (
              <RoomateWrap key={item}>
                {_.get(garantorsFound, `${[index]}`)
                  ? <Img src={garantorsFound[index].picture} alt="" />
                  : <AccountIcon style={{ width: '40px', height: '40px', marginRight: '10px', marginLeft: '-2px' }} />
                }
                {_.get(garantorsFound, `${[index]}`)
                  ? <RoomateName>{garantorsFound[index].firstName} {garantorsFound[index].lastName}</RoomateName>
                  : <AutoComplete
                    hintText="Type email of your garantor"
                    dataSource={[]}
                    onUpdateInput={_.partial(this.updateInputGarantor, index)}
                    searchText={garantorFields[index].searchText}
                    textFieldStyle={{ width: '300px' }}
                    errorText={_.get(garantorsFound, `${[index]}`, '') === false ? 'User with this email was not found, please tell your roomate to create account on Nookpad, then submit the offer' : ''}
                  />
                }
                {!_.get(garantorsFound, `${[index]}`) &&
                  <IconButton
                    style={{ position: 'absolute', right: '-10px' }}
                    onClick={_.partial(searchForUsers, [garantorFields[index].searchText, index, 'garant'])}
                  >
                    <SearchIcon />
                  </IconButton>
                }
              </RoomateWrap>
            ))}
            <FlatButton
              primary
              label="Add garantor"
              onClick={this.handleAddGarantor}
              icon={<AddIcon />}
              style={{ marginTop: '15px' }}
            />
          </Col>
          <SaveButtonWrap>
            <RaisedButton
              primary
              label="Submit"
              labelStyle={{ color: 'white' }}
              onClick={handleSubmitOffer}
            />
          </SaveButtonWrap>
        </Wrap>
      </Modal>
    );
  }
}

ListingDetailMakeOffer.propTypes = {
  openOfferModal: PropTypes.bool,
  handleToggleOfferModal: PropTypes.func,
  changeFieldForm: PropTypes.func,
  makeOfferForm: PropTypes.object,
  searchForUsers: PropTypes.func,
  roomatesFound: PropTypes.object,
  garantorsFound: PropTypes.object,
  handleSubmitOffer: PropTypes.func,
};


export function mapDispatchToProps(dispatch, ownProps) {
  return {
    changeFieldForm: (fieldName, file) => dispatch(ownProps.change(fieldName, file)),
    searchForUsers: (data) => dispatch(getUserByEmail(data[0], data[1], data[2])),
    handleSubmitOffer: () => dispatch(submitOffer()),
  };
}

const mapStateToProps = createStructuredSelector({
  makeOfferForm: makeSelectmakeOfferForm(),
  roomatesFound: makeSelectRoomatesFound(),
  garantorsFound: makeSelectGarantorsFound(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withForm = reduxForm({ form: 'makeOfferForm' });

export default compose(
  withForm,
  withConnect,
)(ListingDetailMakeOffer);
