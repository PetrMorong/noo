import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { Link } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';

const SignInButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

function HeaderFlatButton({ to, intl, labelKey, style, onClick = false }) {
  return (
    <SignInButtonWrapper>
      {onClick
        ? <FlatButton onClick={onClick} primary label={intl.messages[labelKey]} style={style} />
        :
        <Link to={to}>
          <FlatButton primary label={intl.messages[labelKey]} style={style} />
        </Link>
      }
    </SignInButtonWrapper>
  );
}

HeaderFlatButton.propTypes = {
  to: PropTypes.string,
  intl: intlShape.isRequired,
  labelKey: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default injectIntl(HeaderFlatButton);
