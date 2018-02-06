import styled from 'styled-components';

export const ListingDetailPageWrap = styled.div`
  width: 100%;
  svg {
    fill: inherit;
  }
  @media(max-width: 1000px) {
    margin-bottom: 70px;
  }
`;
export const ListingDetailBodyWrap = styled.div`
  width: 800px;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  @media(max-width: 1000px) {
    margin-bottom: 0px;
  }
`;
export const ListingDetailBodyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
