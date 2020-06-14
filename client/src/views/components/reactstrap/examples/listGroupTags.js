import React, { Component } from "react";
import { ListGroup, ListGroupItem, Badge } from "reactstrap";

class ListGroupTags extends Component {
   render() {
      return (
         <div>
            <ListGroup>
               <ListGroupItem className="justify-content-between">
                  Cras justo odio <Badge pill color="primary">14</Badge>
               </ListGroupItem>
               <ListGroupItem className="justify-content-between">
                  Dapibus ac facilisis in <Badge pill color="danger">2</Badge>
               </ListGroupItem>
               <ListGroupItem className="justify-content-between">
                  Morbi leo risus <Badge pill color="warning">9</Badge>
               </ListGroupItem>
               <ListGroupItem className="justify-content-between">
                    Porta ac consectetur ac <Badge pill color="success">4</Badge>
               </ListGroupItem>
               <ListGroupItem className="justify-content-between">
                Vestibulum at eros <Badge pill color="info">8</Badge>
               </ListGroupItem>
            </ListGroup>
         </div>
      );
   }
}

export default ListGroupTags;
