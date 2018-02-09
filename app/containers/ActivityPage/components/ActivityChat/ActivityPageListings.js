import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { makeSelectListings, makeSelectLoadingListings } from 'containers/ActivityPage/ActivityPage.selectors';
import _ from 'lodash';

import {
  ChatRow,
  ChatRowInfoWrap,
  Height100,
} from './styles';

export function ActivityPageListings({ listings, listingRowClick, loading }) {
  if (loading) {
    return <span>loading</span>;
  }
  return (
    <div style={Height100}>
      {listings.map((item) => (
        <ChatRow onClick={_.partial(listingRowClick, item)}>
          <img src={item.primaryImage} alt="" />
          <ChatRowInfoWrap>
            <span>{item.address.location}</span>
            You received offer
          </ChatRowInfoWrap>
        </ChatRow>
      ))}
    </div>

  );
}

ActivityPageListings.propTypes = {
  listings: PropTypes.array,
  listingRowClick: PropTypes.func,
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  listings: makeSelectListings(),
  loading: makeSelectLoadingListings(),
});

export default connect(mapStateToProps)(ActivityPageListings);
