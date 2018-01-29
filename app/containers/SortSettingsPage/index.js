/*
 * SortSettingsPage
 *
 * Settings for sort
 */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CheckList from './CheckList';
import PriceRangeSlider from './PriceRangeSlider';
import MobileActionBar from './MobileActionBar';

const unitItems = [
  'Apartment',
  'House',
];

const Amenities = [
  'Amenity1',
  'Amenity2',
  'Amenity3',
  'Amenity4',
  'Amenity5',
  'Amenity6',
  'Amenity7',
  'Amenity8',
  'Amenity9',
];

const priceSortTypes = [
  'Price low to high',
  'Price high to low',
  'Most recent',
];

const utilityTypes = [
  'Bedrooms',
  'Bathrooms',
];

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }
`;

const CheckListWrap = styled.div`
  width: ${(props) => props.width ? `${props.width}` : '300'}px;
  display: inline-block;
  margin: 48px;

  @media (max-width: 768px) {
    margin: 0;
    width: 350px;
  }
`;

const ButtonWrap = styled.div`
  width: 100%;
  display: none;
  justify-content: center;
  height: 56px;

  @media (max-width: 768px) {
    display: flex;

    a {
      text-decoration: none;
    }

    span {
      font-size: 14px;
      font-weight: bold;
      padding: 12px;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.14);
      color: #000;
    }
  } 
`;

export default class SortSettingsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      reset: false,
    };
  }

  onResetClick = () => {
    this.setState({ reset: true });
  }

  render() {
    const { reset } = this.state;
    return (
      <Wrap>
        <MobileActionBar onResetClick={this.onResetClick} />
        <CheckListWrap>
          <CheckList
            dataList={priceSortTypes}
            type="check"
            title="Sort By"
            reset={reset}
          />
        </CheckListWrap>
        <CheckListWrap>
          <CheckList
            dataList={unitItems}
            type="check"
            title="Property type"
            reset={reset}
          />
        </CheckListWrap>
        <CheckListWrap>
          <CheckList
            dataList={utilityTypes}
            type="counter"
            title="Beds and Baths"
            reset={reset}
          />
        </CheckListWrap>
        <CheckListWrap width={450}>
          <PriceRangeSlider />
        </CheckListWrap>
        <CheckListWrap>
          <CheckList
            dataList={Amenities}
            type="check"
            title="Amenities"
            reset={reset}
          />
        </CheckListWrap>
        <ButtonWrap>
          <Link to={'/search'}>
            <span>VIEW PROPERTIES</span>
          </Link>
        </ButtonWrap>
      </Wrap>
    );
  }
}
