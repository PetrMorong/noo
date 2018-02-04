import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import FileIcon from 'material-ui/svg-icons/editor/insert-drive-file';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 20px;
  position: relative;
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
  bottom: 10px;
  right: 25px;
`;
export default function OfferDetail({ data }) {
  return (
    <Container data={data}>
      <Col>
        <Row>
          <span className="first">Price:</span>
          <span className="plus"><b>7500 $</b></span>
        </Row>
        <Row>
          <span className="first">Move-in date:</span>
          <span><b>1.5.2018</b></span>
        </Row>
        <Row>
          <span className="first">Lease duration:</span>
          <span><b>24 months</b></span>
        </Row>
      </Col>
      <Col>
        <div className="v2">
          <div className="v3 x2">
            <img src="https://scontent-cdg2-1.cdninstagram.com/vp/bc19f2ba8645cdd18c4491e2995e19c0/5B191A24/t51.2885-19/s150x150/26863827_140525683292884_1210760819864764416_n.jpg" alt="" />
          </div>
          <div className="v3">
            <b>Amanda Thompson</b>
            <div>Tenant</div>
          </div>
          <Score>9.0</Score>
          <IconButton className="file" tooltip="Proof of income">
            <FileIcon />
          </IconButton>
        </div>
      </Col>
      <Col>
        <div className="v2">
          <div className="v3 x2">
            <img src="https://vignette.wikia.nocookie.net/villains/images/2/2b/Jerrythemouse.jpg/revision/latest?cb=20170721111021" alt="" />
          </div>
          <div className="v3">
            <b>Jerry Fletcher</b>
            <div>Roomate</div>
          </div>
          <Score>7.6</Score>
          <IconButton className="file" tooltip="Proof of income">
            <FileIcon />
          </IconButton>
        </div>
      </Col>
      <Col>
        <div className="v2">
          <div className="v3 x2">
            <img src="http://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/38/2016/01/19182437/GETTY_11915_Dtrumpspeech-200x200.jpg" alt="" />
          </div>
          <div className="v3">
            <b>Donald Trump</b>
            <div>Garant</div>
          </div>
          <Score>3.2</Score>
        </div>
      </Col>
      <FixedActions>
        <FlatButton primary label="Counter" />
        <FlatButton primary label="Refuse" />
        <RaisedButton primary label="Accept" />
      </FixedActions>
    </Container>
  );
}

OfferDetail.propTypes = {
  data: PropTypes.object,
};
