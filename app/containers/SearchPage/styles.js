import styled from 'styled-components';

export const SearchPageWrap = styled.div`
  display: flex;
`;
export const ListingCardsWrap = styled.div`
  width: 100%;
  padding: 0px 24px 0px 48px;

  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 250px);
  overflow: auto;
  margin-top: 48px;
  margin-bottom: 80px;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 48px;
    width: 100%;
    padding: 0 60px;
  }

  @media (max-width: 450px) {
    width: 100%;
    padding: 20px;
  }
`;

export const SearchMapWrap = styled.div`
  width: 35%;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Search Bar Items

export const SortBarWrap = styled.div`
  width: 100%;
  height: 55px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  padding-top: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchButton = styled.button`
  width: 110px;
  height: 36px;
  color: #009688;
  border-radius: 2px;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  letter-spacing: 0.5px;
  background-color: #ffffff;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  margin-left: 24px;
  font-family: Roboto, sans-serif;
`;

export const SearchBarWrap = styled.div`
  width: 100%;
  height: 55px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  display: none;

  .Select {
    height: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .Select-control {
    height: 100%;
    border: none;
  }

  .Select--multi .Select-multi-value-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .Select--multi .Select-value {
    border-radius: 15px;
    background-color: #e0e0e0;
    color: #535353;
    display: flex;
    flex-direction: row-reverse;
  }

  .Select--multi .Select-value-icon {
    background-color: black;
    height: 20px;
    border-radius: 10px;
    color: white;
    margin-top: 3px;
    margin-right: 5px;
    padding-top: 0px;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const ListingWrap = styled.div`
  position: relative;
  width: 64%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
