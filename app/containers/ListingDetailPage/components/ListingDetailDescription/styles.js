import styled from 'styled-components';

export const Wrap = styled.div`
  width: 65%;
  margin-right: 20px;
  background: white;
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
  padding: 20px;

  @media(max-width: 1000px) {
    margin-right: 0px;
    padding: 15px;
    width: 100%;
    margin: 0 15px 0 15px;
  }
`;
export const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  color: rgba(0,0,0,.8);
  margin-bottom: 5px;
`;
export const Address = styled.div`
  font-size: 14px;
  color: rgba(0,0,0,.6);
  margin-bottom: 10px;
`;
export const AmenitiesTop = styled.div`
  display: flex;
  span {
    margin-right: 30px;
    color: rgba(0,0,0,.8);
  }
`;
export const Description = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: rgba(0,0,0,.8);
`;
export const SeparationLine = styled.div`
  border-top: 1px solid rgba(0,0,0,.1);
  margin: 30px 0;
`;
export const Amenities = styled.div`
  h4 {
    color: rgba(0,0,0,.9);
  }
  div {
    width: 50%;
    margin-bottom: 5px;
  }
  display: flex;
  flex-wrap: wrap;
  color: rgba(0,0,0,.7);
  font-size: 14px;
`;
export const Terms = styled.div`
  div {
    margin-bottom: 5px;
    width: 50%;
  }
  display: flex;
  flex-wrap: wrap;
  color: rgba(0,0,0,.7);
  font-size: 14px;
`;
export const H4 = styled.h4`
  color: rgba(0,0,0,.9);
`;
