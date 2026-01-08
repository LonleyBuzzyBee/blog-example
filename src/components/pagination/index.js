import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Pagination_Component = ({postsPerPage, totalPosts, paginate, prev,next}) => {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumbers.push(i);
  }

  return (
    <Pagination >
     
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
      {pageNumbers.map(number => (
        
      <PaginationItem>
          <PaginationLink onClick={() => paginate(number)} href="#" >
          {number}
          </PaginationLink>
      </PaginationItem>
    ))}
        <PaginationItem>
          <PaginationLink next href="#"/>
        </PaginationItem>
    </Pagination>
  )
}
export default Pagination_Component;