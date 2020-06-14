const ListGroupCustomContentSource = `import React, { Component } from "react";
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from "reactstrap";

class ListGroupCustomContent extends Component {
   render() {
      return (
         <div>
            <ListGroup>
               <ListGroupItem active>
                  <ListGroupItemHeading>
                     List group item heading
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                     Donec id elit non mi porta gravida at eget metus. Maecenas
                     sed diam eget risus varius blandit.
                  </ListGroupItemText>
               </ListGroupItem>
               <ListGroupItem>
                  <ListGroupItemHeading>
                     List group item heading
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                     Donec id elit non mi porta gravida at eget metus. Maecenas
                     sed diam eget risus varius blandit.
                  </ListGroupItemText>
               </ListGroupItem>
               <ListGroupItem>
                  <ListGroupItemHeading>
                     List group item heading
                  </ListGroupItemHeading>
                  <ListGroupItemText>
                     Donec id elit non mi porta gravida at eget metus. Maecenas
                     sed diam eget risus varius blandit.
                  </ListGroupItemText>
               </ListGroupItem>
            </ListGroup>
         </div>
      );
   }
}

export default ListGroupCustomContent;`;

export default ListGroupCustomContentSource;