import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

const PaginationWrap = styled.div`
  position: absolute;
  bottom: 5px;
  height 50px;
  width: 100%;
  text-align: center;

  ul li {
    display: inline-block;
    width: 30px;
    font-size: 18px;
    color: #17679c;
  }

  ul {
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
  }

  .break a {
    cursor: default;
  }

  .active {
    color: #2ea5f5;
  }
`;

function Pagination({
   pageCount,
   handlePageClick }) {
  return (
    <PaginationWrap>
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        breakLabel={<a href="">...</a>}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
    </PaginationWrap>
  );
}

Pagination.propTypes = {
  pageCount: PropTypes.number,
  handlePageClick: PropTypes.func,
};

export default Pagination;
