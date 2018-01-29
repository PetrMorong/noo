import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CounterItemWrap = styled.div`
height: 48px;
width: 100%;
padding: 8px 16px;
display: flex;
justify-content: space-between;
align-items: center;

span {
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
`;

const CounterWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;

  a {
    font-size: 24px;
  }

  .count {
    padding: 0 5px;
  }
`;

class CounterItem extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentWillReceiveProps() {
    const { value } = this.props;
    this.setState({ count: value });
  }

  onIncClick = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  onDecClick = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  }

  render() {
    const { data } = this.props;
    return (
      <CounterItemWrap>
        <span>{data}</span>
        <CounterWrap>
          <a role="button" tabIndex={0} onClick={this.onDecClick}>-</a>
          <span className="count">{this.state.count}</span>
          <a role="button" tabIndex={0} onClick={this.onIncClick}>+</a>
        </CounterWrap>
      </CounterItemWrap>
    );
  }
}

CounterItem.propTypes = {
  data: PropTypes.string.isRequired,
  value: PropTypes.number,
};

export default CounterItem;
