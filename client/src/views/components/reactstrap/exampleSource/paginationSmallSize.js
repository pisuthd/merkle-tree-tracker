const PaginationSmallSizeSource = `import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class PaginationSmallSize extends Component {
   render() {
      return (
         <div>
            <Pagination size="sm" aria-label="Page navigation example">
               <PaginationItem>
                  <PaginationLink previous href="#" />
               </PaginationItem>
               <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
               </PaginationItem>
               <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
               </PaginationItem>
               <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
               </PaginationItem>
               <PaginationItem>
                  <PaginationLink next href="#" />
               </PaginationItem>
            </Pagination>
         </div>
      );
   }
}

export default PaginationSmallSize;`;

export default PaginationSmallSizeSource;