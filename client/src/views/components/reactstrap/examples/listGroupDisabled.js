import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class ListGroupDisabled extends Component {
   render() {
      return (
         <div>
            <ListGroup>
               <ListGroupItem disabled tag="a" href="#">
                  Cras justo odio
               </ListGroupItem>
               <ListGroupItem tag="a" href="#">
                  Dapibus ac facilisis in
               </ListGroupItem>
               <ListGroupItem tag="a" href="#">
                  Morbi leo risus
               </ListGroupItem>
               <ListGroupItem tag="a" href="#">
                  Porta ac consectetur ac
               </ListGroupItem>
               <ListGroupItem tag="a" href="#">
                  Vestibulum at eros
               </ListGroupItem>
            </ListGroup>
         </div>
      );
   }
}

export default ListGroupDisabled;
