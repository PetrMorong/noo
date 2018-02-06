import styled from 'styled-components';

export const FirstLineWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 10px 0 10px;
`;
export const Favorite = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  height: 240px;
`;
export const Name = styled.div`
  padding: 0 10px;
  color: rgba(0,0,0,.8);
  font-size: 17px;
  font-weight: 600;
`;
export const Address = styled.div`
  padding: 0 10px 10px 10px;
  color: rgba(0,0,0,.6);
  font-size: 15px;
`;
export const Amenities = styled.div`
  color: rgba(0,0,0,.6);
  font-size: 12px;
  margin-right: 15px;
`;
export const AmenitiesWrap = styled.div`
  display: flex;
`;
