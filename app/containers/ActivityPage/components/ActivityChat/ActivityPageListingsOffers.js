import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  makeSelectListingsOffers,
  makeSelectLoadingListingsOffers,
} from 'containers/ActivityPage/ActivityPage.selectors';
import { getListingsOffers } from 'containers/ActivityPage/ActivityPage.actions';
import _ from 'lodash';
import FlatButton from 'material-ui/FlatButton';

import {
  ChatRow,
  ChatRowInfoWrap,
  RowWrap,
  FiveBest,
  Score,
} from './styles';

class ActivityPageListingsOffers extends React.Component {
  componentWillMount() {
    // get offers
    this.props.handleGetListingsOffers(this.props.data.id);
  }
  render() {
    const { offers, loading, offerClick } = this.props;
    return (
      <RowWrap>
        {offers.length > 0 &&
          <FiveBest>5 best offers</FiveBest>
        }
        {loading &&
          <span>loading</span>
        }
        {offers.map((item) => (
          <ChatRow onClick={_.partial(offerClick, item)}>
            <img src={item.user.thumbnail} alt="" />
            <ChatRowInfoWrap>
              <span>{item.user.firstName} {item.user.lastName}</span>
              + {item.roomates.length + item.garantors.length} others
            </ChatRowInfoWrap>
            <Score>{item.score}</Score>
          </ChatRow>
        ))}
        {offers.length > 5 &&
          <FlatButton primary label="Show all" />
        }
        {!offers.length &&
          <span>No offers yet</span>
        }
      </RowWrap>
    );
  }
}

ActivityPageListingsOffers.propTypes = {
  offers: PropTypes.array,
  loading: PropTypes.bool,
  handleGetListingsOffers: PropTypes.func,
  data: PropTypes.object,
  offerClick: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    handleGetListingsOffers: (id) => dispatch(getListingsOffers(id)),
  };
}

const mapStateToProps = createStructuredSelector({
  offers: makeSelectListingsOffers(),
  loading: makeSelectLoadingListingsOffers(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActivityPageListingsOffers);
