// import external modules
import React from "react";
import { Row, Col, Button, Card, CardHeader, CardImg, CardBody } from "reactstrap";

import ImgSrc from "../../assets/img/logos/logo-color-big.png";

const Maintainance = props => {
   return (
      <div className="container-fluid gradient-ibiza-sunset">
         <Row className="full-height-vh">
            <Col xs="12" className="d-flex align-items-center justify-content-center">
               <Card className="border-grey border-lighten-3 px-1 py-1 box-shadow-3">                  
                  <CardHeader>
                     <CardImg
                        alt="element 06"
                        className="img-fluid mx-auto d-block pt-2 mb-1 m-auto width-100"
                        src={ImgSrc}
                     />
                  </CardHeader>
                  <CardBody className="text-center">
                     <h3>This page is under maintenance</h3>
                     <p>
                        We're sorry for the inconvenience.
                        <br /> Please come back later.
                     </p>
                     <div className="mt-2">
                        <i className="fa fa-cog spinner font-large-2" />
                     </div>

                     <hr />
                     <p className="socialIcon card-text text-center pt-2 pb-2">
                        <Button className="btn-social-icon mr-1 mb-1 btn-outline-facebook bg-white">
                           <span className="fa fa-facebook" />
                        </Button>
                        <Button className="btn-social-icon mr-1 mb-1 btn-outline-twitter bg-white">
                           <span className="fa fa-twitter" />
                        </Button>
                        <Button className="btn-social-icon mr-1 mb-1 btn-outline-linkedin bg-white">
                           <span className="fa fa-linkedin font-medium-4" />
                        </Button>
                        <Button className="btn-social-icon mr-1 mb-1 btn-outline-github bg-white">
                           <span className="fa fa-github font-medium-4" />
                        </Button>
                     </p>
                  </CardBody>
               </Card>
            </Col>
         </Row>
      </div>
   );
};

export default Maintainance;
