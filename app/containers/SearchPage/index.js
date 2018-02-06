import React from 'react';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import ListingCard from 'components/ListingCard';
import PropTypes from 'prop-types';

import reducer from './SearchPage.reducer';
import saga from './SearchPage.saga';
import { getListings } from './SearchPage.actions';
import { makeSelectData } from './SearchPage.selectors';
import {
  SearchPageWrap,
} from './styles';

class SearchPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.getListings();
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <Helmet>
          <title>Search TODO Translate</title>
          <meta name="description" content="Search page of Nookpad" />
        </Helmet>
        <SearchPageWrap>
          {data.map((item) =>
            <ListingCard data={item} key={item.id} />
          )}
        </SearchPageWrap>
      </div>
    );
  }
}

SearchPage.propTypes = {
  data: PropTypes.object,
  getListings: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    getListings: () => dispatch(getListings()),
  };
}

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'searchPage', reducer });
const withSaga = injectSaga({ key: 'searchPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SearchPage);
