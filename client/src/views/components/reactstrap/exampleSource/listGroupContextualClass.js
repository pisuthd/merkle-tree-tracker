const ListGorupContextualClassSource = `import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class ListGroupContextualClass extends Component {
   render() {
      return (
         <div>
            <ListGroup>
               <ListGroupItem color="success">Cras justo odio</ListGroupItem>
               <ListGroupItem color="info">
                  Dapibus ac facilisis in
               </ListGroupItem>
               <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
               <ListGroupItem color="danger">
                  Porta ac consectetur ac
               </ListGroupItem>
            </ListGroup>
         </div>
      );
   }
}

export default ListGroupContextualClass;`

export default ListGorupContextualClassSource;