import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import FileIcon from 'material-ui/svg-icons/editor/insert-drive-file';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import _ from 'lodash';

import {
  toggleCounterOfferModal,
  respondOffer,
} from '../../ActivityPage.actions';
import { makeSelectOpenCounterOfferModal } from '../../ActivityPage.selectors';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 20px;
  position: relative;
  overflow-y: overlay;
  padding-bottom: 55px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const Col = styled.div`
  width: 100%;
  background: white;
  border-radius: 3px;
  box-shadow: 1px 1px 6px rgba(0,0,0,.1);
  padding: 15px;
  margin-bottom: 15px;
  position: relative;
  .v2 {
    display: flex;
    color: rgba(0,0,0,.7);
    font-size: 14px;
  }
  .v3 {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      margin-top: 1px;
    }
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-bottom: 5px;
  }
  .x2 {
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .y1 {
    width: 125px;
  }
  .file {
    position: absolute !important;
    right: 48px;
    top: 2px;
  }
`;
const Row = styled.div`
  display: flex;
  color: rgba(0,0,0,.65);
  font-size: 14px;
  .first {
    width: 60%;
    margin-bottom: 2px;
  }
  .plus {
    color: green;
  }
`;
const Score = styled.div`
  padding: 5px 8px;
  border-radius: 3px;
  color: white;
  font-weight: bold;
  position: absolute;
  right: 10px;
  font-size: 14px;
  top: 10px;
  background: #00C853;
`;
const FixedActions = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 0px;
  padding: 10px 20px;
  right: 0px;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 8px;
`;

// TODO score colors base on the numbers
function OfferDetail({ data, handleToggleCounterOfferModal, handleRespondOffer }) {
  return (
    <div style={{ height: '100%' }}>
      <Container>
        <Col>
          <Row>
            <span className="first">Price:</span>
            <span className="plus"><b>{data.price} $</b></span>
          </Row>
          <Row>
            <span className="first">Move-in date:</span>
            <span><b>{data.moveInDate}</b></span>
          </Row>
          <Row>
            <span className="first">Lease duration:</span>
            <span><b>{data.leaseDuration} months</b></span>
          </Row>
        </Col>
        <Col>
          <div className="v2">
            <div className="v3 x2">
              <img src={data.user.thumbnail} alt="" />
            </div>
            <div className="v3">
              <b>{data.user.firstName} {data.user.lastName}</b>
              <div>Tenant</div>
            </div>
            <Score>{data.score}</Score>
            <IconButton className="file" tooltip="Proof of income">
              <FileIcon />
            </IconButton>
          </div>
        </Col>
        {data.roomates.map((item) => (
          <Col key={item.id}>
            <div className="v2">
              <div className="v3 x2">
                <img src={item.thumbnail} alt="" />
              </div>
              <div className="v3">
                <b>{item.firstName} {item.lastName}</b>
                <div>Roomate</div>
              </div>
              <Score>{item.score}</Score>
              <IconButton className="file" tooltip="Proof of income">
                <FileIcon />
              </IconButton>
            </div>
          </Col>
        ))}
        {data.garantors.map((item) => (
          <Col key={item.id}>
            <div className="v2">
              <div className="v3 x2">
                <img src={item.thumbnail} alt="" />
              </div>
              <div className="v3">
                <b>{item.firstName} {item.lastName}</b>
                <div>Garantor</div>
              </div>
              <Score>{item.score}</Score>
              <IconButton className="file" tooltip="Proof of income">
                <FileIcon />
              </IconButton>
            </div>
          </Col>
        ))}
      </Container>
      <FixedActions>
        <FlatButton
          primary
          label="Counter"
          onClick={_.partial(handleToggleCounterOfferModal, data)}
        />
        <FlatButton
          primary
          label="Refuse"
          onClick={_.partial(handleRespondOffer, 'refuse')}
        />
        <RaisedButton
          primary
          label="Accept"
          onClick={_.partial(handleRespondOffer, 'accept')}
        />
      </FixedActions>
    </div>
  );
}

OfferDetail.propTypes = {
  data: PropTypes.object,
  handleToggleCounterOfferModal: PropTypes.func,
  handleRespondOffer: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    handleToggleCounterOfferModal: (data) => dispatch(toggleCounterOfferModal(data)),
    handleRespondOffer: (type) => dispatch(respondOffer(type)),
  };
}

const mapStateToProps = createStructuredSelector({
  openCounterOfferModal: makeSelectOpenCounterOfferModal(),
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetail);
