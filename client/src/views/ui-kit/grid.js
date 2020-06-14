import React, { Component, Fragment } from "react";
import ContentHeader from "../../components/contentHead/contentHeader";
import ContentSubHeader from "../../components/contentHead/contentSubHeader";
import { Table, Card, CardBody, CardTitle, Row, Col } from "reactstrap";

class Grid extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Grid </ContentHeader>
            <ContentSubHeader>
               We use{" "}
               <a
                  href="https://getbootstrap.com/docs/4.1/layout/grid/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Bootstrap’s grid
               </a>{" "}
               system, It uses a series of containers, rows, and columns to
               layout and align content. It’s built with flexbox and is fully
               responsive. Below is an example and an in-depth look at how the
               grid comes together.{" "}
            </ContentSubHeader>
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Bootstrap Grid options</CardTitle>
                        <Table striped responsive>
                           <thead>
                              <tr>
                                 <th />
                                 <th>
                                    {" "}
                                    Extra small devices{" "}
                                    <small>Phones (&lt;768px)</small>{" "}
                                 </th>
                                 <th>
                                    {" "}
                                    Small devices{" "}
                                    <small>Tablets (≥768px)</small>{" "}
                                 </th>
                                 <th>
                                    {" "}
                                    Medium devices{" "}
                                    <small>Desktops (≥992px)</small>{" "}
                                 </th>
                                 <th>
                                    {" "}
                                    Large devices{" "}
                                    <small>Desktops (≥1200px)</small>{" "}
                                 </th>
                              </tr>
                           </thead>
                           <tbody>
                              <tr>
                                 <th className="text-nowrap" scope="row">
                                    Grid behavior
                                 </th>
                                 <td>Horizontal at all times</td>
                                 <td colSpan="3">
                                    Collapsed to start, horizontal above
                                    breakpoints
                                 </td>
                              </tr>
                              <tr>
                                 <th className="text-nowrap" scope="row">
                                    Container width
                                 </th>
                                 <td>None (auto)</td>
                                 <td>750px</td>
                                 <td>970px</td>
                                 <td>1170px</td>
                              </tr>
                              <tr>
                                 <th className="text-nowrap" scope="row">
                                    Class prefix
                                 </th>
                                 <td>
                                    <code>.col-</code>
                                 </td>
                                 <td>
                                    <code>.col-</code>
                                 </td>
                                 <td>
                                    <code>.col-md-</code>
                                 </td>
                                 <td>
                                    <code>.col-lg-</code>
                                 </td>
                              </tr>
                              <tr>
                                 <th className="text-nowrap" scope="row">
                                    # of columns
                                 </th>
                                 <td colSpan="4">12</td>
                              </tr>
                              <tr>
                                 <th className="text-nowrap" scope="row">
                                    Column width
                                 </th>
                                 <td className="text-muted">Auto</td>
                                 <td>~62px</td>
                                 <td>~81px</td>
                                 <td>~97px</td>
                              </tr>
                              <tr>
                                 <th className="text-nowrap" scope="row">
                                    Gutter width
                                 </th>
                                 <td colSpan="4">
                                    30px (15px on each side of a column)
                                 </td>
                              </tr>
                              <tr>
                                 <th className="text-nowrap" scope="row">
                                    Nestable
                                 </th>
                                 <td colSpan="4">Yes</td>
                              </tr>
                              <tr>
                                 <th className="text-nowrap" scope="row">
                                    Offsets
                                 </th>
                                 <td colSpan="4">Yes</td>
                              </tr>
                              <tr>
                                 <th className="text-nowrap" scope="row">
                                    Column ordering
                                 </th>
                                 <td colSpan="4">Yes</td>
                              </tr>
                           </tbody>
                        </Table>
                     </CardBody>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col md="12">
                  <h4 className="title">Bootstrap Grid</h4>
                  <p>
                     Using a single set of <code>&lt;Col md="*"&gt;</code> grid
                     classes, you can create a basic grid system that starts out
                     stacked on mobile devices and tablet devices (the extra
                     small to small range) before becoming horizontal on desktop
                     (medium) devices. Place grid columns in any{" "}
                     <code>.row</code>.
                  </p>
               </Col>
               <Col md="12">
                  <Card>
                     <div className="text-center py-3">12</div>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col md="11">
                  <Card>
                     <div className="text-center py-3">11</div>
                  </Card>
               </Col>
               <Col md="1">
                  <Card>
                     <div className="text-center py-3">1</div>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col md="10">
                  <Card>
                     <div className="text-center py-3">10</div>
                  </Card>
               </Col>
               <Col md="2">
                  <Card>
                     <div className="text-center py-3">2</div>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col md="9">
                  <Card>
                     <div className="text-center py-3">9</div>
                  </Card>
               </Col>
               <Col md="3">
                  <Card>
                     <div className="text-center py-3">3</div>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col md="8">
                  <Card>
                     <div className="text-center py-3">8</div>
                  </Card>
               </Col>
               <Col md="4">
                  <Card>
                     <div className="text-center py-3">4</div>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col md="7">
                  <Card>
                     <div className="text-center py-3">7</div>
                  </Card>
               </Col>
               <Col md="5">
                  <Card>
                     <div className="text-center py-3">5</div>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col md="6">
                  <Card>
                     <div className="text-center py-3">6</div>
                  </Card>
               </Col>
               <Col md="6">
                  <Card>
                     <div className="text-center py-3">6</div>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col md="5">
                  <Card>
                     <div className="text-center py-3">5</div>
                  </Card>
               </Col>
               <Col md="7">
                  <Card>
                     <div className="text-center py-3">7</div>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col md="4">
                  <Card>
                     <div className="text-center py-3">4</div>
                  </Card>
               </Col>
               <Col md="8">
                  <Card>
                     <div className="text-center py-3">8</div>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col md="3">
                  <Card>
                     <div className="text-center py-3">3</div>
                  </Card>
               </Col>
               <Col md="9">
                  <Card>
                     <div className="text-center py-3">9</div>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col md="2">
                  <Card>
                     <div className="text-center py-3">2</div>
                  </Card>
               </Col>
               <Col md="10">
                  <Card>
                     <div className="text-center py-3">10</div>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col md="1">
                  <Card>
                     <div className="text-center py-3">1</div>
                  </Card>
               </Col>
               <Col md="11">
                  <Card>
                     <div className="text-center py-3">11</div>
                  </Card>
               </Col>
            </Row>
         </Fragment>
      );
   }
}

export default Grid;
