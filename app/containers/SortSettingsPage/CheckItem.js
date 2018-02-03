import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CheckItemWrap = styled.div`
height: 48px;
width: 100%;
padding: 8px 16px;
display: flex;
justify-content: space-between;
align-items: center;

span {
width: 140px;
height: 16px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-style: normal;
font-stretch: normal;
line-height: 1;
letter-spacing: normal;
text-align: left;
color: rgba(0, 0, 0, 0.87);
}

input {
width: 18px;
height: 18px;
opacity: 0.54;
background-color: #010101;
}
`;

class CheckItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { data, value } = this.props;
    return (
      <CheckItemWrap>
        <span>{data}</span>
        <input type="checkbox" value={value} />
      </CheckItemWrap>
    );
  }
}

CheckItem.propTypes = {
  data: PropTypes.string.isRequired,
  value: PropTypes.bool,
};

export default CheckItem;
