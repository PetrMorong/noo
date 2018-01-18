import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { intlShape, FormattedMessage } from 'react-intl';
import SearchIcon from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';

import messages from './messages';

const SearchBarWrap = styled.div`
  background: rgba(0,0,0,.1);
  width: 100%;
  height: 44px;
  max-width: 600px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  cursor: pointer;
  @media(max-width: 600px) {
    display: none;
  }
`;
const TextWrap = styled.div`
  color: rgba(0,0,0,.6);
  margin-left: 15px;
`;
const SearchBarWrapMobile = styled.div`
  display: none;
  @media(max-width: 600px) {
    display: flex;
    justify-content: flex-end;
  }
`;
const Container = styled.div`
  width: 100%;
  margin: 0 25px;
  @media(max-width: 600px) {
    margin: 0;
    width: auto;
  }
`;

function SearchBar() {
  return (
    <Container>
      <SearchBarWrap>
        <SearchIcon />
        <TextWrap>
          <FormattedMessage {...messages.search} />
        </TextWrap>
      </SearchBarWrap>
      <SearchBarWrapMobile>
        <IconButton >
          <SearchIcon />
        </IconButton>
      </SearchBarWrapMobile>
    </Container>
  );
}

SearchBar.propTypes = {
  to: PropTypes.string,
  intl: intlShape,
};

export default SearchBar;
