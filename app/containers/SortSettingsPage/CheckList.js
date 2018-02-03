import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CheckItem from './CheckItem';
import CounterItem from './CounterItem';
import ActionBar from './ActionBar';

const CheckListWrap = styled.div`
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.14);
  width: 100%;

  @media (max-width: 768px) {
    padding-bottom: 20px;
    box-shadow: none;
    border: none;
  }

  h2 {
    margin-top: 0px;
    padding-left: 59px;
    padding-top: 13px;
    display: none;
  }

  @media (max-width: 768px) {
    h2 {
      display: block;
      padding-left: 0px;
      display: flex;
      justify-content: center;
    }
  }
`;

const SeparatorWrap = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.12);
`;

class CheckList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { dataList, type, title, reset } = this.props;
    return (
      <CheckListWrap>
        <h2>{title}</h2>
        {
          dataList.map((data) => {
            switch (type) {
              case 'counter':
                return reset ? <CounterItem key={data} data={data} /> : <CounterItem key={data} data={data} value={0} />;
              case 'check':
                return reset ? <CheckItem key={data} data={data} /> : <CheckItem key={data} data={data} value={false} />;
              default:
                return reset ? <CheckItem key={data} data={data} /> : <CheckItem key={data} data={data} value={false} />;
            }
          })
        }
        <SeparatorWrap />
        <ActionBar />
      </CheckListWrap>
    );
  }
}

CheckList.propTypes = {
  dataList: PropTypes.array.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  reset: PropTypes.bool,
};

export default CheckList;
