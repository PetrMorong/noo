import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconButton from 'material-ui/IconButton';
import BackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Container = styled.div`
  width: 100%;
  height: ${(props) => !props.mode ? '52px' : 'auto'};
  background: white;
  position: absolute;
  top: -50px;
  left: 0;
  border-radius: 4px;
  display: flex;
  box-shadow: ${(props) => !props.mode ? 'rgba(0, 0, 0, 0.1) 0px 1px 8px' : '0'};
  flex-direction: ${(props) => !props.mode ? 'row' : 'column'};
  align-items: ${(props) => !props.mode ? 'center' : 'initial'};
  font-size: 14px;
  color: rgba(0,0,0,.8);
  z-index: 2;
  @media(max-width: 1000px) {
    border-radius: 0px;
  }
`;
const Img = styled.img`
  width: ${(props) => !props.mode ? '35px' : '100%'};
  border-radius: ${(props) => !props.mode ? '50%' : '6px 6px 0 0'};
  margin-right: ${(props) => !props.mode ? '10px' : '0'};
  object-fit: cover;
  height: ${(props) => !props.mode ? '35px' : '180px'};
  margin-left: ${(props) => !props.mode ? '50px' : '0'};
  @media(max-width: 1000px) {
    height: ${(props) => !props.mode ? '35px' : '220px'};
  }
  @media(max-width: 700px) {
    height: ${(props) => !props.mode ? '35px' : '180px'};
  }
`;
const IconButtonWrap = styled.div`
  position: absolute;
  top: 5px;
  left: 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Shadow = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: ${(props) => !props.mode ? '0' : '80px'};
  background: linear-gradient(rgba(0,0,0,.3) 55%, rgba(0,0,0,0));
`;
const Description = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  background: #009788;
  color: white;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: 400;
  flex-direction: column;
  position: relative;
  b {
    font-size: 16px;
  }
  span {
    margin: 2px 0;
  }
`;
const Price = styled.span`
  position: absolute;
  top: 30px;
  right: 20px;
  font-size: 20px;
  font-weight: 600;
`;

// TODO move styles to styles.js file
export default function ActivityChatHeader({ data, mode = false, backClick, actions = false }) {
  return (
    <Container mode={mode}>
      <Shadow mode={mode} />
      <IconButtonWrap>
        <IconButton
          mode={mode}
          iconStyle={{ fill: !mode ? 'rgba(0,0,0,.7)' : 'white' }}
          onClick={backClick}
        >
          <BackIcon />
        </IconButton>
        {actions &&
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            iconStyle={{ fill: mode === 'advanced' ? 'white' : 'rgba(0,0,0,.85)' }}
            menuStyle={{ color: 'rgba(0,0,0,.7)' }}
          >
            {actions.map((item) => (
              <MenuItem primaryText={item.primaryText} onClick={item.onClick} key={item.primaryText} />
            ))}
          </IconMenu>
        }
      </IconButtonWrap>
      <Img src={mode === 'advanced' ? data.primaryImage : data.user.thumbnail} alt="x" mode={mode} />
      {mode === 'advanced' &&
        <Description>
          <b>{data.title}</b>
          <span>{data.address.location}</span>
          <span>{data.propertyMoveInDate} / {`${data.leaseDuration} months`}</span>
          <Price>{data.price} {data.currency} </Price>
        </Description>
      }
      {!mode &&
        <span>{data.user.firstName} {data.user.lastName}</span>
      }
    </Container>
  );
}

ActivityChatHeader.propTypes = {
  data: PropTypes.object,
  mode: PropTypes.string,
  backClick: PropTypes.backClick,
  actions: PropTypes.array,
};
