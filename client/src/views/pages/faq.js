// import external modules
import React, { Fragment } from "react";
import { Row, Col, Card, CardBody, CardHeader, Input } from "reactstrap";
import { HelpCircle } from "react-feather";
// import internal(own) modules
import Accordion from "../../components/accordion/Accordion";

const FAQ = props => {
   return (
      <Fragment>
         <Row>
            <Col xs="12">
               <div className="content-header">FAQs</div>
               <p className="content-sub-header">We're here to help</p>
            </Col>
         </Row>

         <Row>
            <Col xs="12">
               <Card className="gradient-purple-bliss white text-center p-4">
                  <CardHeader className="p-0">
                     <h1>We're here to help!!</h1>
                     <p>
                        <em>If you have any question you can ask below or enter what you are looking for!</em>
                     </p>
                  </CardHeader>
                  <CardBody className="p-0">
                     <Col xl="12" lg="10" xs="12" className="form-group">
                        <Input type="text" className="form-control" placeholder="Search in faqs.." />
                     </Col>
                  </CardBody>
               </Card>
            </Col>
         </Row>
         <Row>
            <Col xs="12">
               <Card className="accordion">
                  <CardBody>
                     <Accordion>
                        <Accordion.AccordionItem
                           render={() => (
                              <CardHeader className="border-bottom-grey border-bottom-lighten-3">
                                 <span aria-expanded="true" aria-disabled="false" aria-controls="1" className="primary mx-0 cursor-pointer">
                                    <h5>
                                       <HelpCircle size={24} strokeWidth={1} />{" "}
                                       <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</span>
                                    </h5>
                                 </span>
                              </CardHeader>
                           )}
                        >
                           <CardBody>
                              Aenean eget leo vel lorem tincidunt tempor sit amet non ex. Aenean porta, velit ut efficitur
                              fringilla, enim est suscipit augue, in porta ex nisi quis est. Phasellus ut odio in dolor
                              eleifend tincidunt eget id tellus.
                           </CardBody>
                        </Accordion.AccordionItem>
                        <Accordion.AccordionItem
                           render={() => (
                              <CardHeader className="border-bottom-grey border-bottom-lighten-3">
                                 <span aria-expanded="true" aria-disabled="false" aria-controls="1" className="primary mx-0 cursor-pointer">
                                    <h5>
                                       <HelpCircle size={24} strokeWidth={1} />{" "}
                                       <span>Vestibulum hendrerit eros id finibus fermentum ?</span>
                                    </h5>
                                 </span>
                              </CardHeader>
                           )}
                        >
                           <CardBody>
                              Nam tincidunt rhoncus dolor nec imperdiet. Ut ut mauris tortor. Nulla cursus mattis elit, sed
                              egestas augue laoreet id. Etiam eu velit felis. Duis at vehicula ligula, et suscipit nunc.
                           </CardBody>
                        </Accordion.AccordionItem>
                        <Accordion.AccordionItem
                           render={() => (
                              <CardHeader className="border-bottom-grey border-bottom-lighten-3">
                                 <span aria-expanded="true" aria-disabled="false" aria-controls="1" className="primary mx-0 cursor-pointer">
                                    <h5>
                                       <HelpCircle size={24} strokeWidth={1} />{" "}
                                       <span>Lorem ipsum, dolor sit amet consectetur ad ?</span>
                                    </h5>
                                 </span>
                              </CardHeader>
                           )}
                        >
                           <CardBody>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus sit maxime ipsam iusto illo
                              quis rerum tempora soluta ratione quisquam, recusandae vel laboriosam illum quia vt
                              exercitationem temporibus itaque. Corporis hic corrupti sequi ea repudiandae mollitia
                              voluptates provident!
                           </CardBody>
                        </Accordion.AccordionItem>
                        <Accordion.AccordionItem
                           render={() => (
                              <CardHeader className="border-bottom-grey border-bottom-lighten-3">
                                 <span aria-expanded="true" aria-disabled="false" aria-controls="1" className="primary mx-0 cursor-pointer">
                                    <h5>
                                       <HelpCircle size={24} strokeWidth={1} />{" "}
                                       <span>Lorem ipsum dolor sit amet, consectetur cing elit. Explicabo ?</span>
                                    </h5>
                                 </span>
                              </CardHeader>
                           )}
                        >
                           <CardBody>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus sit maxime ipsam iusto illo
                              quis rerum tempora soluta ratione quisquam, recusandae vel laboriosam illum. Corporis hic
                              corrupti sequi ea repudiandae mollitia voluptates provident!
                           </CardBody>
                        </Accordion.AccordionItem>
                        <Accordion.AccordionItem
                           render={() => (
                              <CardHeader className="border-bottom-grey border-bottom-lighten-3">
                                 <span aria-expanded="true" aria-disabled="false" aria-controls="1" className="primary mx-0 cursor-pointer">
                                    <h5>
                                       <HelpCircle size={24} strokeWidth={1} />{" "}
                                       <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</span>
                                    </h5>
                                 </span>
                              </CardHeader>
                           )}
                        >
                           <CardBody>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus sit maxime ipsam iusto illo
                              quis rerum tempora soluta ratione quisquam, recusandae vel laboriosam illum quia vt
                              exercitationem temporibus itaque. Corporis hic corrupti sequi ea repudiandae mollitia
                              voluptates provident!
                           </CardBody>
                        </Accordion.AccordionItem>
                        <Accordion.AccordionItem
                           render={() => (
                              <CardHeader className="border-bottom-grey border-bottom-lighten-3">
                                 <span aria-expanded="true" aria-disabled="false" aria-controls="1" className="primary mx-0 cursor-pointer">
                                    <h5>
                                       <HelpCircle size={24} strokeWidth={1} />{" "}
                                       <span>Lorem ipsum dolor sit amet, consectetur cing elit. Explicabo ?</span>
                                    </h5>
                                 </span>
                              </CardHeader>
                           )}
                        >
                           <CardBody>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus sit maxime ipsam iusto illo
                              quis rerum tempora soluta ratione quisquam, recusandae vel laboriosam illum. Corporis hic
                              corrupti sequi ea repudiandae mollitia voluptates provident!
                           </CardBody>
                        </Accordion.AccordionItem>
                        <Accordion.AccordionItem
                           render={() => (
                              <CardHeader className="border-bottom-grey border-bottom-lighten-3">
                                 <span aria-expanded="true" aria-disabled="false" aria-controls="1" className="primary mx-0 cursor-pointer">
                                    <h5>
                                       <HelpCircle size={24} strokeWidth={1} />{" "}
                                       <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</span>
                                    </h5>
                                 </span>
                              </CardHeader>
                           )}
                        >
                           <CardBody>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus sit maxime ipsam iusto illo
                              quis rerum tempora soluta ratione quisquam, recusandae vel laboriosam illum quia vt
                              exercitationem temporibus itaque. Corporis hic corrupti sequi ea repudiandae mollitia
                              voluptates provident!
                           </CardBody>
                        </Accordion.AccordionItem>
                        <Accordion.AccordionItem
                           render={() => (
                              <CardHeader className="border-bottom-grey border-bottom-lighten-3">
                                 <span aria-expanded="true" aria-disabled="false" aria-controls="1" className="primary mx-0 cursor-pointer">
                                    <h5>
                                       <HelpCircle size={24} strokeWidth={1} />{" "}
                                       <span>Lorem ipsum dolor sit amet, consectetur cing elit. Explicabo ?</span>
                                    </h5>
                                 </span>
                              </CardHeader>
                           )}
                        >
                           <CardBody>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus sit maxime ipsam iusto illo
                              quis rerum tempora soluta ratione quisquam, recusandae vel laboriosam illum. Corporis hic
                              corrupti sequi ea repudiandae mollitia voluptates provident!
                           </CardBody>
                        </Accordion.AccordionItem>
                        <Accordion.AccordionItem
                           render={() => (
                              <CardHeader>
                                 <span aria-expanded="true" aria-disabled="false" aria-controls="1" className="primary mx-0 cursor-pointer">
                                    <h5>
                                       <HelpCircle size={24} strokeWidth={1} />{" "}
                                       <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit ?</span>
                                    </h5>
                                 </span>
                              </CardHeader>
                           )}
                        >
                           <CardBody>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus sit maxime ipsam iusto illo
                              quis rerum tempora soluta ratione quisquam, recusandae vel laboriosam illum quia vt
                              exercitationem temporibus itaque. Corporis hic corrupti sequi ea repudiandae mollitia
                              voluptates provident!
                           </CardBody>
                        </Accordion.AccordionItem>
                     </Accordion>
                  </CardBody>
               </Card>
            </Col>
         </Row>
      </Fragment>
   );
};

export default FAQ;
