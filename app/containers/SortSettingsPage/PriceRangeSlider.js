import React from 'react';
import styled from 'styled-components';
import ReactSlider from 'react-slider';
import ActionBar from './ActionBar';

const PriceRangeSliderWrap = styled.div`
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.14);
  width: 100%;

  h2 {
    margin-top: 0px;
    padding-left: 59px;
    padding-top: 13px;
  }

  @media (max-width: 768px) {
    margin: 0;
    box-shadow: none;

    h2 {
      padding-left: 0px;
      display: flex;
      justify-content: center;
    }
  }
`;

const SliderWrap = styled.div`
  width: 100%;
  padding: 0px 90px;
  position: relative;

  .min-value {
    position: absolute;
    left: 50px;
    top: 10px;
  }

  .max-value {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  .slider {
    width: 100%;
    max-width: 500px;
    height: 50px;
  }

  .vertical-slider {
    height: 380px;
    width: 50px;
    border: 1px solid grey;
  }

  .handle {
    font-size: 0.9em;
    text-align: center;
    background-color: transparent;
    color: white;
    cursor: pointer;
  }

  .handle.active {
    background-color: transparent;
  }

  .bar {
    position: relative;
    background: #009688;
  }

  .bar.bar-0 {
    z-index: 10;
  }

  .bar.bar-1 {
    background: #bdbdbd;
  }

  .bar.bar-2 {
    background: #0f0;
  }

  .slider .bar {
    top: 20px;
    height: 5px;
  }

  .slider .handle {
    top: 1px;
    width: 10px;
    height: 48px;
    line-height: 48px;
  }

  .vertical-slider .handle {
    left: 1px;
    width: 48px;
    line-height: 50px;
  }

  .vertical-slider .bar {
    left: 20px;
    width: 10px;
  }
  
  #horizontal-0, #horizontal-1, #horizontal-2, #horizontal-3, #vertical {
    margin: 20px 10px;
  }

  #horizontal-2 .bar.bar-2 {
    background: #ddd;
  }
`;

const SeparatorWrap = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.12);
`;

class PriceRangeSlider extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <PriceRangeSliderWrap>
        <h2>Price range</h2>
        <SliderWrap>
          <span className="min-value">£ 0</span>
          <ReactSlider defaultValue={0} withBars />
          <span className="max-value">£ 99,999</span>
        </SliderWrap>
        <SeparatorWrap />
        <ActionBar />
      </PriceRangeSliderWrap>
    );
  }
}

export default PriceRangeSlider;
