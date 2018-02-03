import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 400px;
  min-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 4px;
`;
const Header = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgba(0,0,0,.1);
  border-radius: 2px;
  padding: 15px;
  display: flex;
  align-items: center;
  color: rgba(0,0,0,.7);
  font-weight: bold;
`;
const ChatRow = styled.div`
  width: 100%;
  height: 60px;
  padding:  0 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  span {
    color: rgba(0,0,0,.9);
    font-size: 15px;
  }
  &:hover {
    background: rgba(0,0,0,.05);
  }
`;
const ChatRowInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
  height: 100%;
  color: rgba(0,0,0,.5);
  font-size: 14px;

`;

function ActivityChat() {
  return (
    <Wrap location={location}>
      <Header>
        Listings
      </Header>
      <ChatRow>
        <img src="http://www.nexalia.fr/wp-content/uploads/2017/02/acheter-un-appartement-neuf-a-beausoleil-monaco-256x256.jpg" alt="" />
        <ChatRowInfoWrap>
          <span>7 Boyd street, London</span>
          You received offer
        </ChatRowInfoWrap>
      </ChatRow>
      <ChatRow>
        <img src="http://www.nexalia.fr/wp-content/uploads/2017/02/appartement-neuf-douvaine-evian-256x256.jpg" alt="" />
        <ChatRowInfoWrap>
          <span>4821 Roselyn, Montreal</span>
          You refused offer
        </ChatRowInfoWrap>
      </ChatRow>
      <ChatRow>
        <img src="https://maison1.advcdn.net/images/medias/000/041/000041568/128.jpg" alt="" />
        <ChatRowInfoWrap>
          <span>12 rue Vivienne, Paris</span>
          You received offer
        </ChatRowInfoWrap>
      </ChatRow>
    </Wrap>
  );
}

/* Header.propTypes = {
  handleBurgerClick: PropTypes.func,
  handleLogin: PropTypes.func,
  handleSignOut: PropTypes.func,
  user: PropTypes.bool,
  location: PropTypes.string,
}; */

export default ActivityChat;
