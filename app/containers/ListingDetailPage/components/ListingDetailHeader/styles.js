import styled from 'styled-components';

export const Img = styled.img`
  height: 320px;
  width: 100%;
  object-fit: cover;
  @media(max-width: 1000px) {
    height: 280px;
  }
`;
export const ListingDetailHeaderWrap = styled.div`
  position: relative;
`;
export const ShowPhotosWrap = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  background: white;
  border-radius: 2px;
  @media(max-width: 1000px) {
    right: 20px;
    left: initial;
    display: ${(props) => props.expandMobile ? 'none' : 'block'};
  }
`;
export const ShareFavoriteWeb = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  display: none;
  @media(max-width: 1000px) {
    display: none;
  }
`;
export const ShareFavoriteMobile = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
  display: block;
  @media(max-width: 1000px) {
    display: block;
  }
`;
export const CoverBorder = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(rgba(0,0,0,.3) 55%, rgba(0,0,0,0));
`;

export const LightboxWrap = styled.div`
  button {
    color: white;
  }
`;
