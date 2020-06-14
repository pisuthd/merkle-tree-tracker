const TableShoppingSource = `import React from "react";
import { Table, Input } from "reactstrap";
import { Edit, Trash2 } from "react-feather";

import coffeeMug from "../../../assets/img/elements/01.png";
import camera from "../../../assets/img/elements/11.png";
import headphone from "../../../assets/img/elements/07.png";
import beer from "../../../assets/img/elements/14.png";
import penDrive from "../../../assets/img/elements/04.png";

export default class Example extends React.Component {
   render() {
      return (
         <Table responsive>
            <thead>
               <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Totel</th>
                  <th>Actions</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <th scope="row">
                     <img
                        src={coffeeMug}
                        alt="coffee-mug"
                        className="img-fluid width-50"
                     />
                  </th>
                  <td>Coffee Mug</td>
                  <td>$15</td>
                  <td><Input type="number" name="number" id="exampleNumber" value="2" className="width-100"/></td>
                  <td>$30</td>
                  <td>
                     <Edit size={18} className="mr-2" />{" "}
                     <Trash2 size={18} color="#FF586B" />
                  </td>
               </tr>
               <tr>
                  <th scope="row">
                     <img
                        src={headphone}
                        alt="head-phon"
                        className="img-fluid width-50"
                     />
                  </th>
                  <td>Headphone</td>
                  <td>$250</td>
                  <td><Input type="number" name="number2" id="exampleNumber2" value="2" className="width-100"/></td>
                  <td>$500</td>
                  <td>
                     <Edit size={18} className="mr-2" />{" "}
                     <Trash2 size={18} color="#FF586B" />
                  </td>
               </tr>
               <tr>
                  <th scope="row">
                     <img
                        src={camera}
                        alt="camera"
                        className="img-fluid width-50"
                     />
                  </th>
                  <td>Camera</td>
                  <td>$999</td>
                  <td><Input type="number" name="number3" id="exampleNumber3" value="1" className="width-100"/></td>
                  <td>$999</td>
                  <td>
                     <Edit size={18} className="mr-2" />{" "}
                     <Trash2 size={18} color="#FF586B" />
                  </td>
               </tr>
               <tr>
                  <th scope="row">
                     <img
                        src={beer}
                        alt="beer"
                        className="img-fluid width-50"
                     />
                  </th>
                  <td>Beer</td>
                  <td>$5</td>
                  <td><Input type="number" name="number4" id="exampleNumber4" value="10" className="width-100"/></td>
                  <td>$50</td>
                  <td>
                     <Edit size={18} className="mr-2" />{" "}
                     <Trash2 size={18} color="#FF586B" />
                  </td>
               </tr>
               <tr>
               <th scope="row">
                     <img
                        src={penDrive}
                        alt="pend-drive"
                        className="img-fluid width-50"
                     />
                  </th>
                  <td>Pendrive</td>
                  <td>$99</td>
                  <td><Input type="number" name="number5" id="exampleNumber5" value="5" className="width-100"/></td>
                  <td>$495</td>
                  <td>
                     <Edit size={18} className="mr-2" />{" "}
                     <Trash2 size={18} color="#FF586B" />
                  </td>
               </tr>
            </tbody>
         </Table>
      );
   }
}
`;

export default TableShoppingSource;