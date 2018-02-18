import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  height: 59px;
  border-bottom: 1px solid #EEEEEE;
  margin-bottom: 15px;
  padding-left: 15px;
  span {
    margin-left: 10px;
    font-weight: 500;
    font-size: 22px;
    color: rgba(0,0,0,.65);
  }
  @media (max-width: 768px) {
    display: ${(props) => props.user ? 'none' : 'flex'};
  }
`;
