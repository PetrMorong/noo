import styled from 'styled-components';

export const Wrap = styled.div`
  margin-right: 5px;
  margin-top: -30px;
  .makeOffer-priceInput {
    width: 50% !important;
    margin-right: 15px;
  }
  .makeOffer-durationInput {
    width: 50% !important;
  }
  .makeOffer-dateInput {
    width: 50% !important;
    margin-right: 15px;
  }
`;
export const Row = styled.div`
  display: flex;
  margin-top: -15px;
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline
`;
export const Error = styled.div`
  font-size: 12px;
  color: red;
  margin-left: 15px;
  margin-top: 5px;
`;
export const FileName = styled.div`
  font-size: 12px;
  color: rgba(0,0,0,.7);
  margin-left: 15px;
  margin-top: 5px;
`;
export const RoomateWrap = styled.div`
  margin-left: 10px;
  margin-top: 15px;
  position: relative;
  width: 100%;
  margin-right: 5px;
  display: flex;
  align-items: center;
`;
export const Img = styled.img`
  min-width: 35px;
  min-height: 35px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;
export const RoomateName = styled.span`
  color: rgba(0,0,0,.7);
`;
export const SaveButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;
export const stylesUploadInput = {
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
    zIndex: 555,
  },
};
