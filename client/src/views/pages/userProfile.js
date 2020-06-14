// import external modules
import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";

import {
   TabContent,
   TabPane,
   NavLink,
   Row,
   Col,
   Button,
   Form,
   Input,
   FormGroup,
   Card,
   CardHeader,
   CardBody,
   CardFooter
} from "reactstrap";
import classnames from "classnames";

// import internal(own) modules
import gallery1 from "../../assets/img/gallery/1.jpg";
import gallery2 from "../../assets/img/gallery/2.jpg";
import gallery3 from "../../assets/img/gallery/3.jpg";
import gallery4 from "../../assets/img/gallery/4.jpg";
import gallery5 from "../../assets/img/gallery/5.jpg";
import gallery6 from "../../assets/img/gallery/6.jpg";
import gallery7 from "../../assets/img/gallery/7.jpg";
import gallery8 from "../../assets/img/gallery/8.jpg";
import gallery9 from "../../assets/img/gallery/9.jpg";
import gallery10 from "../../assets/img/gallery/10.jpg";
import gallery11 from "../../assets/img/gallery/11.jpg";
import gallery12 from "../../assets/img/gallery/12.jpg";
import gallery13 from "../../assets/img/gallery/13.jpg";
import gallery14 from "../../assets/img/gallery/14.jpg";
import gallery15 from "../../assets/img/gallery/15.jpg";
import gallery16 from "../../assets/img/gallery/16.jpg";

import avatarm8 from "../../assets/img/portrait/medium/avatar-m-8.png";
import avatarS3 from "../../assets/img/portrait/small/avatar-s-3.png";
import avatarS5 from "../../assets/img/portrait/small/avatar-s-5.png";
import avatarS6 from "../../assets/img/portrait/small/avatar-s-6.png";
import avatarS9 from "../../assets/img/portrait/small/avatar-s-9.png";
import avatarS11 from "../../assets/img/portrait/small/avatar-s-11.png";
import avatarS12 from "../../assets/img/portrait/small/avatar-s-12.png";
import avatarS14 from "../../assets/img/portrait/small/avatar-s-14.png";
import avatarS16 from "../../assets/img/portrait/small/avatar-s-16.png";
import avatarS18 from "../../assets/img/portrait/small/avatar-s-18.png";
import photo6 from "../../assets/img/photos/06.jpg";
import photo7 from "../../assets/img/photos/07.jpg";
import photo8 from "../../assets/img/photos/08.jpg";
import photo9 from "../../assets/img/photos/09.jpg";
import photo14 from "../../assets/img/photos/14.jpg";

class UserProfile extends Component {
   state = {
      activeTab: "1"
   };

   toggle = tab => {
      if (this.state.activeTab !== tab) {
         this.setState({
            activeTab: tab
         });
      }
   };

   render() {
      return (
         <Fragment>
            <Row>
               <Col xs="12" id="user-profile">
                  <Card className="profile-with-cover">
                     <div
                        className="card-img-top img-fluid bg-cover height-300"
                        style={{ background: `url("${photo14}") 50%` }}
                     />
                     <Row className="media profil-cover-details">
                        <Col xs="5">
                           <div className="align-self-start halfway-fab pl-3 pt-2">
                              <div className="text-left">
                                 <h3 className="card-title text-white">Jose Diaz</h3>
                              </div>
                           </div>
                        </Col>
                        <Col xs="2">
                           <div className="align-self-center halfway-fab text-center">
                              <Link to="/pages/user-profile" className="profile-image">
                                 <img
                                    src={avatarm8}
                                    className="rounded-circle img-border gradient-summer width-100"
                                    alt="Card avatar"
                                 />
                              </Link>
                           </div>
                        </Col>
                        <Col xs="5">
                           <div className="profile-cover-buttons">
                              <div className="media-body halfway-fab align-self-end">
                                 <div className="text-right d-none d-sm-none d-md-none d-lg-block">
                                    <Button color="primary" className="btn-raised mr-2">
                                       <i className="fa fa-plus" /> Follow
                                    </Button>
                                    <Button color="success" className="btn-raised mr-3">
                                       <i className="fa fa-dashcube" /> Message
                                    </Button>
                                 </div>
                                 <div className="text-right">
                                    <Button
                                       color="primary"
                                       className="btn-raised mr-2 d-block d-sm-block d-md-block d-lg-none float-right"
                                    >
                                       <i className="fa fa-plus" />
                                    </Button>
                                 </div>
                              </div>
                           </div>
                        </Col>
                     </Row>
                     <div className="profile-section">
                        <Row>
                           <Col lg="5" md="5">
                              <ul className="profile-menu no-list-style">
                                 <li>
                                    <NavLink
                                       className={classnames("primary font-medium-2 font-weight-600", {
                                          active: this.state.activeTab === "1"
                                       })}
                                       onClick={() => {
                                          this.toggle("1");
                                       }}
                                    >
                                       Timeline
                                    </NavLink>
                                 </li>
                                 <li>
                                    <NavLink
                                       className={classnames("primary font-medium-2 font-weight-600", {
                                          active: this.state.activeTab === "2"
                                       })}
                                       onClick={() => {
                                          this.toggle("2");
                                       }}
                                    >
                                       About
                                    </NavLink>
                                 </li>
                              </ul>
                           </Col>

                           <Col lg="2" md="2" className="text-center">
                              <span className="font-medium-2 text-uppercase">Jose Diaz</span>
                              <p className="grey font-small-2">Ninja Developer</p>
                           </Col>

                           <Col lg="5" md="5">
                              <ul className="profile-menu no-list-style">
                                 <li>
                                    <NavLink
                                       className={classnames("primary font-medium-2 font-weight-600", {
                                          active: this.state.activeTab === "3"
                                       })}
                                       onClick={() => {
                                          this.toggle("3");
                                       }}
                                    >
                                       Friends
                                    </NavLink>
                                 </li>
                                 <li>
                                    <NavLink
                                       className={classnames("primary font-medium-2 font-weight-600", {
                                          active: this.state.activeTab === "4"
                                       })}
                                       onClick={() => {
                                          this.toggle("4");
                                       }}
                                    >
                                       Photos
                                    </NavLink>
                                 </li>
                              </ul>
                           </Col>
                        </Row>
                     </div>
                  </Card>
               </Col>
            </Row>

            <TabContent activeTab={this.state.activeTab}>
               <TabPane tabId="1">
                  <Row>
                     <Col xs="12">
                        <div className="content-header">User Timeline</div>
                     </Col>
                  </Row>
                  <div id="timeline" className="timeline-center timeline-wrapper">
                     <ul className="timeline">
                        <li className="timeline-line" />
                        <li className="timeline-group">
                           <Button color="primary">
                              <i className="fa fa-calendar-o" /> Today
                           </Button>
                        </li>
                     </ul>
                     <ul className="timeline">
                        <li className="timeline-line" />
                        <li className="timeline-item">
                           <div className="timeline-badge">
                              <span
                                 className="bg-red bg-lighten-1"
                                 data-toggle="tooltip"
                                 data-placement="right"
                                 title="Portfolio project work"
                              >
                                 <i className="fa fa-plane" />
                              </span>
                           </div>
                           <Card className="timeline-card border-grey border-lighten-2">
                              <CardHeader>
                                 <h4 className="mb-0 card-title">
                                    <Link to="/pages/user-profile">Portfolio project work</Link>
                                 </h4>
                                 <div className="card-subtitle text-muted mt-0">
                                    <span className="font-small-3">5 hours ago</span>
                                 </div>
                              </CardHeader>
                              <CardBody>
                                 <img className="img-fluid" src={photo6} alt="Timeline 2" />
                                 <CardBody>
                                    <p className="card-text">
                                       Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit
                                       auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum
                                       nisi.
                                    </p>
                                    <div className="list-inline mb-1">
                                       <span className="pr-1">
                                          <Link to="/pages/user-profile" className="primary">
                                             <span className="fa fa-thumbs-o-up" />
                                             Like
                                          </Link>
                                       </span>
                                       <span className="pr-1">
                                          <Link to="/pages/user-profile" className="primary">
                                             <span className="fa fa-commenting-o" />
                                             Comment
                                          </Link>
                                       </span>
                                       <span>
                                          <Link to="/pages/user-profile" className="primary">
                                             <span className="fa fa-share-alt" />
                                             Share
                                          </Link>
                                       </span>
                                    </div>
                                 </CardBody>
                                 <CardFooter className="px-0 py-0">
                                    <Form>
                                       <FormGroup className="position-relative has-icon-left mb-0">
                                          <Input type="text" className="form-control" placeholder="Write comments..." />
                                          <div className="form-control-position">
                                             <i className="fa fa-dashcube" />
                                          </div>
                                       </FormGroup>
                                    </Form>
                                 </CardFooter>
                              </CardBody>
                           </Card>
                        </li>
                        <li className="timeline-item mt-5">
                           <div className="timeline-badge">
                              <span
                                 className="avatar avatar-online"
                                 data-toggle="tooltip"
                                 data-placement="right"
                                 title="Eu pid nunc urna integer"
                              >
                                 <img src={avatarS5} alt="avatar" width="40" />
                              </span>
                           </div>
                           <div className="timeline-card card card-inverse">
                              <img className="card-img img-fluid" src={photo7} alt="Card avatar2" />
                              <div className="card-img-overlay bg-overlay">
                                 <h4 className="card-title">Good Morning</h4>
                                 <p className="card-text">
                                    <small>15 hours ago</small>
                                 </p>
                              </div>
                           </div>
                        </li>
                     </ul>

                     <ul className="timeline">
                        <li className="timeline-line" />
                        <li className="timeline-group">
                           <Button color="primary">
                              <i className="fa fa-calendar-o" /> 2016
                           </Button>
                        </li>
                     </ul>
                     <ul className="timeline">
                        <li className="timeline-line" />
                        <li className="timeline-item">
                           <div className="timeline-badge">
                              <span
                                 className="bg-warning bg-darken-1"
                                 data-toggle="tooltip"
                                 data-placement="right"
                                 title="Application API Support"
                              >
                                 <i className="fa fa-life-ring" />
                              </span>
                           </div>
                           <Card className="timeline-card border-grey border-lighten-2">
                              <CardHeader>
                                 <div className="media">
                                    <div className="media-left">
                                       <Link to="/pages/user-profile">
                                          <span className="avatar avatar-md avatar-busy">
                                             <img src={avatarS11} alt="avatar" width="50" />
                                          </span>
                                          <i />
                                       </Link>
                                    </div>
                                    <div className="media-body">
                                       <h4 className="mb-0 card-title">
                                          <Link to="/pages/user-profile">Application API Support</Link>
                                       </h4>
                                       <div className="card-subtitle text-muted mt-0">
                                          <span className="font-small-3">15 Oct, 2016 at 8.00 A.M</span>
                                          <span className="tag tag-pill tag-default tag-warning float-right">High</span>
                                       </div>
                                    </div>
                                 </div>
                              </CardHeader>
                              <CardBody>
                                 <img className="img-fluid" src={photo8} alt="Timeline 3" />
                                 <CardBody>
                                    <p className="card-text">
                                       Nullam facilisis fermentum aliquam. Suspendisse ornare dolor vitae libero hendrerit
                                       auctor lacinia a ligula. Curabitur elit tellus, porta ut orci sed, fermentum bibendum
                                       nisi.
                                    </p>
                                    <div className="list-inline mb-1">
                                       <span className="pr-1">
                                          <Link to="/pages/user-profile" className="primary">
                                             <span className="fa fa-commenting-o" />
                                             Comment
                                          </Link>
                                       </span>
                                    </div>
                                 </CardBody>
                                 <CardFooter className="px-0 py-0">
                                    <div className="media">
                                       <div className="media-left">
                                          <Link to="/pages/user-profile">
                                             <span className="avatar avatar-online">
                                                <img src={avatarS14} alt="avatar" width="50" />
                                             </span>
                                          </Link>
                                       </div>
                                       <div className="media-body">
                                          <p className="text-bold-600 mb-0">
                                             <Link to="/pages/user-profile">Crystal Lawson</Link>
                                          </p>
                                          <p className="m-0">
                                             Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                             sollicitudin commodo.
                                          </p>
                                          <div className="media">
                                             <div className="media-left">
                                                <Link to="/pages/user-profile">
                                                   <span className="avatar avatar-online">
                                                      <img src={avatarS16} alt="avatar" width="50" />
                                                   </span>
                                                </Link>
                                             </div>
                                             <div className="media-body">
                                                <p className="text-bold-600 mb-0">
                                                   <Link to="/pages/user-profile">Rafila Găitan</Link>
                                                </p>
                                                <p>Gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <Form>
                                       <FormGroup className="position-relative has-icon-left mb-0">
                                          <Input type="text" className="form-control" placeholder="Write comments..." />
                                          <div className="form-control-position">
                                             <i className="fa fa-dashcube" />
                                          </div>
                                       </FormGroup>
                                    </Form>
                                 </CardFooter>
                              </CardBody>
                           </Card>
                        </li>
                        <li className="timeline-item mt-5">
                           <div className="timeline-badge">
                              <span
                                 className="bg-amber bg-darken-1"
                                 data-toggle="tooltip"
                                 data-placement="left"
                                 title="Quote of the day"
                              >
                                 <i className="fa fa-smile-o" />
                              </span>
                           </div>
                           <Card className="timeline-card border-grey border-lighten-2">
                              <CardHeader>
                                 <h4 className="mb-0 card-title">
                                    <Link to="/pages/user-profile">Quote of the day</Link>
                                 </h4>
                                 <div className="card-subtitle text-muted mt-0">
                                    <span className="font-small-3">03 March, 2016 at 5 P.M</span>
                                 </div>
                              </CardHeader>
                              <CardBody>
                                 <img className="img-fluid" src={photo9} alt="Timeline 1" />

                                 <blockquote className="card-blockquote">
                                    <p className="card-text">
                                       Eu pid nunc urna integer, sed, cras tortor scelerisque penatibus facilisis a pulvinar,
                                       rhoncus sagittis ut nunc elit! Sociis in et?
                                    </p>
                                    <footer>
                                       Someone famous in
                                       <cite title="Source Title">- Source Title</cite>
                                    </footer>
                                 </blockquote>
                              </CardBody>
                           </Card>
                        </li>
                     </ul>

                     <ul className="timeline">
                        <li className="timeline-line" />
                        <li className="timeline-group">
                           <Button color="primary">
                              <i className="fa fa-calendar-o" /> Founded in 2015
                           </Button>
                        </li>
                     </ul>
                  </div>
               </TabPane>
               {/* Friends */}
               <TabPane tabId="2">
                  <Row>
                     <Col xs="12">
                        <div className="content-header">About</div>
                     </Col>
                  </Row>
                  <Row>
                     <Col sm="12">
                        <Card>
                           <CardHeader>
                              <h5>Personal Information</h5>
                           </CardHeader>
                           <CardBody>
                              <div className="mb-3">
                                 <span className="text-bold-500 primary">About Me:</span>
                                 <span className="display-block overflow-hidden">
                                    Hi, I’m Jose, I’m 29 and I work as a Ninja Developer for the “PIXINVENT” Creative Studio.
                                    In my research, I follow the flow of early medieval slavery from viking raids in the
                                    west, through the booming ports of the Scandinavian north, and out into the Islamic
                                    world. Reading texts against the grain and seeing artifacts as traces of the past can
                                    make their lives once again visible to us today. This website documents my efforts to do
                                    just that, and I hope it will prove a resource and an inspiration for others in similar
                                    pursuits.
                                 </span>
                              </div>
                              <hr />
                              <Row>
                                 <Col xs="12" md="6" lg="4">
                                    <ul className="no-list-style">
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/useer-profile">Birthday:</Link>
                                          </span>
                                          <span className="display-block overflow-hidden">June 10th, 1988</span>
                                       </li>
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/user-profile">Birthplace:</Link>
                                          </span>
                                          <span className="d-block overflow-hidden">New Jersey, USA</span>
                                       </li>
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/user-profile">Lives in:</Link>
                                          </span>
                                          <span className="display-block overflow-hidden">Denver, USA</span>
                                       </li>
                                    </ul>
                                 </Col>
                                 <Col xs="12" md="6" lg="4">
                                    <ul className="no-list-style">
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/user-profile">Gender:</Link>
                                          </span>
                                          <span className="display-block overflow-hidden">Male</span>
                                       </li>
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/user-profile">Email:</Link>
                                          </span>
                                          <Link to="/pages/user-profile" className="display-block overflow-hidden">
                                             jose@yourmail.com
                                          </Link>
                                       </li>
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/user-profile">Website:</Link>
                                          </span>
                                          <Link to="/pages/user-profile" className="display-block overflow-hidden">
                                             pixinvent.com
                                          </Link>
                                       </li>
                                    </ul>
                                 </Col>
                                 <Col xs="12" md="6" lg="4">
                                    <ul className="no-list-style">
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/user-profile">Phone Number:</Link>
                                          </span>
                                          <span className="display-block overflow-hidden">(012) 345 - 678 - 9910</span>
                                       </li>
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/user-profile">Occupation:</Link>
                                          </span>
                                          <span className="display-block overflow-hidden">Ninja Developer</span>
                                       </li>
                                       <li className="mb-2">
                                          <span className="text-bold-500 primary">
                                             <Link to="/pages/user-profile">Joined:</Link>
                                          </span>
                                          <span className="display-block overflow-hidden">April 1st, 2012</span>
                                       </li>
                                    </ul>
                                 </Col>
                              </Row>
                              <hr />
                              <div className="mt-3">
                                 <span className="text-bold-500 primary">Hobbies:</span>
                                 <span className="display-block overflow-hidden">
                                    I like to ride the cycle to work, swimming, listning music and working out. I also like
                                    reading magazines, go to museums, watching good movies and eat spicy food while it’s
                                    raining outside.Twin siblings Dipper and Mabel Pines spend the summer at their uncle's
                                    tourist trap in the enigmatic town of Gravity Falls.A mysterious Hollywood stuntman and
                                    mechanic moonlights as a getaway driver.Scuba Diving, Skiing, Surfing, Photography, Long
                                    drive.
                                 </span>
                              </div>
                              <div className="mt-2 overflow-hidden">
                                 <span className="mr-3 mt-2 text-center float-left width-100">
                                    <i className="icon-plane danger font-large-2" />
                                    <div className="mt-2">Travelling</div>
                                 </span>
                                 <span className="mr-3 mt-2 text-center float-left width-100">
                                    <i className="icon-speedometer danger font-large-2" />
                                    <div className="mt-2">Driving</div>
                                 </span>
                                 <span className="mr-3 mt-2 text-center float-left width-100">
                                    <i className="icon-camera danger font-large-2" />
                                    <div className="mt-2">Photography</div>
                                 </span>
                                 <span className="mr-3 mt-2 text-center float-left width-100">
                                    <i className="icon-game-controller danger font-large-2" />
                                    <div className="mt-2">Gaming</div>
                                 </span>
                                 <span className="mr-3 mt-2 text-center float-left width-100">
                                    <i className="icon-music-tone-alt danger font-large-2" />
                                    <div className="mt-2">Music</div>
                                 </span>
                                 <span className="mr-3 mt-2 text-center float-left width-100">
                                    <i className="icon-basket-loaded danger font-large-2" />
                                    <div className="mt-2">Shopping</div>
                                 </span>
                              </div>
                           </CardBody>
                        </Card>
                     </Col>
                     <Col sm="12">
                        <Card>
                           <CardHeader>
                              <h5>Educational Information</h5>
                           </CardHeader>
                           <CardBody>
                              <Row>
                                 <Col sm="12" xs="12" md="6" lg="6">
                                    <ul className="no-list-style">
                                       <li className="mb-2">
                                          <span className="primary text-bold-500">
                                             <Link to="/pages/user-profile">
                                                <i className="ft-home font-small-3" />
                                                Broklin Institute
                                             </Link>
                                          </span>
                                          <span className="grey line-height-0 display-block mb-2 font-small-2">
                                             2008 - 2009
                                          </span>
                                          <span className="line-height-2 display-block overflow-hidden">
                                             Professor: Leonardo Stagg. Six months of best Developing tools course.
                                          </span>
                                       </li>
                                       <li className="mb-2">
                                          <span className="primary text-bold-500">
                                             <Link to="/pages/user-profile">
                                                <i className="ft-home font-small-3" />
                                                The Ninja College
                                             </Link>
                                          </span>
                                          <span className="grey line-height-0 display-block mb-2 font-small-2">
                                             2012 - 2013
                                          </span>
                                          <span className="line-height-2 display-block overflow-hidden">
                                             Professor: Steve Ustreil. Gave me the best educational information for Ninja.
                                          </span>
                                       </li>
                                    </ul>
                                 </Col>
                                 <Col sm="12" xs="12" md="6" lg="6">
                                    <ul className="no-list-style">
                                       <li className="mb-2">
                                          <span className="primary text-bold-500">
                                             <Link to="/pages/user-profile">
                                                <i className="ft-home font-small-3" />
                                                Ninja Developer
                                             </Link>
                                          </span>
                                          <span className="grey line-height-0 display-block mb-2 font-small-2">
                                             2009-2011
                                          </span>
                                          <span className="line-height-2 display-block overflow-hidden">
                                             Ninja Developer for the “PIXINVENT” creative studio.
                                          </span>
                                       </li>
                                       <li className="mb-2">
                                          <span className="primary text-bold-500">
                                             <Link to="/pages/user-profile">
                                                <i className="ft-home font-small-3" />
                                                Senior Ninja Developer
                                             </Link>
                                          </span>
                                          <span className="grey line-height-0 display-block mb-2 font-small-2">
                                             2014-Now
                                          </span>
                                          <span className="line-height-2 display-block overflow-hidden">
                                             Senior Ninja Developer for the “PIXINVENT” creative studio.
                                          </span>
                                       </li>
                                    </ul>
                                 </Col>
                              </Row>
                           </CardBody>
                        </Card>
                     </Col>
                  </Row>
               </TabPane>
               {/* User Timeline */}

               <TabPane tabId="3">
                  <Row>
                     <Col xs="12">
                        <div className="content-header" />
                     </Col>
                  </Row>
                  <Row>
                     <Col xs="12" md="6" lg="4">
                        <Card>
                           <CardHeader className="text-center">
                              <img src={avatarS3} alt="Brek" width="150" className="rounded-circle gradient-mint" />
                           </CardHeader>
                           <CardBody>
                              <h4 className="card-title">Brek Padio</h4>
                              <p className="category text-gray font-small-4">CEO / Co-Founder</p>
                              <Link
                                 to="/pages/user-profile"
                                 className="btn btn-lg gradient-mint font-small-2 white p-2 mr-2"
                              >
                                 Add as Friend
                              </Link>
                              <Link to="/pages/user-profile" className="btn btn-lg btn-outline-grey font-small-2 p-2">
                                 Message
                              </Link>
                              <hr className="grey" />
                              <Row className="grey">
                                 <Col xs="4">
                                    <Link to="/pages/user-profile">
                                       <i className="ft-star mr-1" />
                                       <span>4.9</span>
                                    </Link>
                                 </Col>
                                 <Col xs="4">
                                    <Link to="/pages/user-profile">
                                       <i className="ft-globe mr-1" />
                                       <span>USA</span>
                                    </Link>
                                 </Col>
                                 <Col xs="4">
                                    <Link to="/pages/user-profile">
                                       <i className="ft-book mr-1" />
                                       <span>21</span>
                                    </Link>
                                 </Col>
                              </Row>
                           </CardBody>
                        </Card>
                     </Col>
                     <Col xs="12" md="6" lg="4">
                        {/*  */}
                        <Card>
                           <CardHeader className="text-center">
                              <img src={avatarS18} alt="Jassi" width="150" className="rounded-circle gradient-pomegranate" />
                           </CardHeader>
                           <CardBody>
                              <h4 className="card-title">Jassi Lee</h4>
                              <p className="category text-gray font-small-4">Ninja Developer</p>
                              <Link
                                 to="/pages/user-profile"
                                 className="btn btn-lg gradient-pomegranate font-small-2 white p-2 mr-2"
                              >
                                 Add as Friend
                              </Link>
                              <Link to="/pages/user-profile" className="btn btn-lg btn-outline-grey font-small-2 p-2">
                                 Message
                              </Link>
                              <hr className="grey" />
                              <Row className="grey">
                                 <Col xs="4">
                                    <Link to="/pages/user-profile">
                                       <i className="ft-star mr-1">star</i>
                                       <span>4.7</span>
                                    </Link>
                                 </Col>
                                 <Col xs="4">
                                    <Link to="/pages/user-profile">
                                       <i className="ft-globe mr-1" />
                                       <span>Canada</span>
                                    </Link>
                                 </Col>
                                 <Col xs="4">
                                    <Link to="/pages/user-profile">
                                       <i className="ft-book mr-1" />
                                       <span>14</span>
                                    </Link>
                                 </Col>
                              </Row>
                           </CardBody>
                        </Card>
                        {/*  */}
                     </Col>
                     <Col xs="12" md="6" lg="4">
                        <Card>
                           <CardHeader className="text-center">
                              <img src={avatarS11} alt="Brek" width="150" className="rounded-circle gradient-orange-amber" />
                           </CardHeader>
                           <CardBody>
                              <h4 className="card-title">Peter Steven</h4>
                              <p className="category text-gray font-small-4">Android Developer</p>
                              <Link
                                 to="/pages/user-profile"
                                 className="btn btn-lg gradient-orange-amber font-small-2 white p-2 mr-2"
                              >
                                 Add as Friend
                              </Link>
                              <Link to="/pages/user-profile" className="btn btn-lg btn-outline-grey font-small-2 p-2">
                                 Message
                              </Link>
                              <hr className="grey" />
                              <Row className="grey">
                                 <Col xs="4">
                                    <Link to="/pages/user-profile">
                                       <i className="ft-star mr-1">star</i>
                                       <span>5.0</span>
                                    </Link>
                                 </Col>
                                 <Col xs="4">
                                    <Link to="/pages/user-profile">
                                       <i className="ft-globe mr-1" />
                                       <span>India</span>
                                    </Link>
                                 </Col>
                                 <Col xs="4">
                                    <Link to="/pages/user-profile">
                                       <i className="ft-book mr-1" />
                                       <span>18</span>
                                    </Link>
                                 </Col>
                              </Row>
                           </CardBody>
                        </Card>
                     </Col>
                     <Col xs="12" md="6" lg="4">
                        <Card>
                           <CardHeader className="text-center">
                              <img src={avatarS6} alt="Maitri" width="150" className="rounded-circle gradient-red-pink" />
                           </CardHeader>
                           <CardBody>
                              <h4 className="card-title">Maitri Rajput</h4>
                              <p className="category text-gray font-small-4">UX Designer</p>
                              <Link
                                 to="/pages/user-profile"
                                 className="btn btn-lg gradient-red-pink font-small-2 white p-2 mr-2"
                              >
                                 Add as Friend
                              </Link>
                              <Link to="/pages/user-profile" className="btn btn-lg btn-outline-grey font-small-2 p-2">
                                 Message
                              </Link>
                              <hr className="grey" />
                              <Row className="grey">
                                 <Col xs="4">
                                    <Link to="/pages/user-profile">
                                       <i className="ft-star mr-1">star</i>
                                       <span>4.5</span>
                                    </Link>
                                 </Col>
                                 <Col xs="4">
                                    <Link to="/pages/user-profile">
                                       <i className="ft-globe mr-1" />
                                       <span>India</span>
                                    </Link>
                                 </Col>
                                 <Col xs="4">
                                    <Link to="/pages/user-profile">
                                       <i className="ft-book mr-1" />
                                       <span>19</span>
                                    </Link>
                                 </Col>
                              </Row>
                           </CardBody>
                        </Card>
                     </Col>
                     <Col xs="12" md="6" lg="4">
                        <Card>
                           <CardHeader className="text-center">
                              <img src={avatarS9} alt="Anibal" width="150" className="rounded-circle gradient-blackberry" />
                           </CardHeader>
                           <CardBody>
                              <h4 className="card-title">Anibal Santo</h4>
                              <p className="category text-gray font-small-4">Project Developer</p>
                              <Link
                                 to="/pages/user-profile"
                                 className="btn btn-lg gradient-blackberry font-small-2 white p-2 mr-2"
                              >
                                 Add as Friend
                              </Link>
                              <Link to="/pages/user-profile" className="btn btn-lg btn-outline-grey font-small-2 p-2">
                                 Message
                              </Link>
                              <hr className="grey" />
                              <Row className="grey">
                                 <Col xs="4">
                                    <Link to="/pages/user-profile">
                                       <i className="ft-star mr-1">star</i>
                                       <span>4.8</span>
                                    </Link>
                                 </Col>
                                 <Col xs="4">
                                    <Link to="/pages/user-profile">
                                       <i className="ft-globe mr-1" />
                                       <span>London</span>
                                    </Link>
                                 </Col>
                                 <Col xs="4">
                                    <Link to="/pages/user-profile">
                                       <i className="ft-book mr-1" />
                                       <span>20</span>
                                    </Link>
                                 </Col>
                              </Row>
                           </CardBody>
                        </Card>
                     </Col>
                     <Col xs="12" md="6" lg="4">
                        <Card>
                           <CardHeader className="text-center">
                              <img
                                 src={avatarS12}
                                 alt="Gini"
                                 width="150"
                                 className="rounded-circle gradient-back-to-earth"
                              />
                           </CardHeader>
                           <CardBody>
                              <h4 className="card-title">Gini Fredre</h4>
                              <p className="category text-gray font-small-4">HR</p>
                              <Link
                                 to="/pages/user-profile"
                                 className="btn btn-lg gradient-back-to-earth font-small-2 white p-2 mr-2"
                              >
                                 Add as Friend
                              </Link>
                              <Link to="/pages/user-profile" className="btn btn-lg btn-outline-grey font-small-2 p-2">
                                 Message
                              </Link>
                              <hr className="grey" />
                              <Row className="grey">
                                 <Col xs="4">
                                    <Link to="/pages/user-profile">
                                       <i className="ft-star mr-1">star</i>
                                       <span>4.4</span>
                                    </Link>
                                 </Col>
                                 <Col xs="4">
                                    <Link to="/pages/user-profile">
                                       <i className="ft-globe mr-1" />
                                       <span>Korea</span>
                                    </Link>
                                 </Col>
                                 <Col xs="4">
                                    <Link to="/pages/user-profile">
                                       <i className="ft-book mr-1" />
                                       <span>15</span>
                                    </Link>
                                 </Col>
                              </Row>
                           </CardBody>
                        </Card>
                     </Col>
                  </Row>
               </TabPane>
               {/* Photos */}
               <TabPane tabId="4">
                  <Row>
                     <Col>
                        <div className="content-header">Photos</div>
                     </Col>
                  </Row>
                  <Row>
                     <Col xs="12">
                        <Card>
                           <CardHeader>
                              <h5>Photos Uploaded</h5>
                           </CardHeader>
                           <CardBody>
                              <Row>
                                 <Col lg="3" md="6" xs="12">
                                    <img
                                       className="img-thumbnail img-fluid"
                                       src={gallery1}
                                       itemProp="thumbnail"
                                       alt="description1"
                                    />
                                 </Col>
                                 <Col lg="3" md="6" xs="12">
                                    <img
                                       className="img-thumbnail img-fluid"
                                       src={gallery2}
                                       itemProp="thumbnail"
                                       alt="description2"
                                    />
                                 </Col>
                                 <Col lg="3" md="6" xs="12">
                                    <img
                                       className="img-thumbnail img-fluid"
                                       src={gallery3}
                                       itemProp="thumbnail"
                                       alt="description3"
                                    />
                                 </Col>
                                 <Col lg="3" md="6" xs="12">
                                    <img
                                       className="img-thumbnail img-fluid"
                                       src={gallery4}
                                       itemProp="thumbnail"
                                       alt="description4"
                                    />
                                 </Col>
                              </Row>
                              <Row>
                                 <Col lg="3" md="6" xs="12">
                                    <img
                                       className="img-thumbnail img-fluid"
                                       src={gallery5}
                                       itemProp="thumbnail"
                                       alt="description5"
                                    />
                                 </Col>
                                 <Col lg="3" md="6" xs="12">
                                    <img
                                       className="img-thumbnail img-fluid"
                                       src={gallery6}
                                       itemProp="thumbnail"
                                       alt="description6"
                                    />
                                 </Col>
                                 <Col lg="3" md="6" xs="12">
                                    <img
                                       className="img-thumbnail img-fluid"
                                       src={gallery7}
                                       itemProp="thumbnail"
                                       alt="description7"
                                    />
                                 </Col>
                                 <Col lg="3" md="6" xs="12">
                                    <img
                                       className="img-thumbnail img-fluid"
                                       src={gallery8}
                                       itemProp="thumbnail"
                                       alt="description8"
                                    />
                                 </Col>
                              </Row>
                              <Row>
                                 <Col lg="3" md="6" xs="12">
                                    <img
                                       className="img-thumbnail img-fluid"
                                       src={gallery9}
                                       itemProp="thumbnail"
                                       alt="description9"
                                    />
                                 </Col>
                                 <Col lg="3" md="6" xs="12">
                                    <img
                                       className="img-thumbnail img-fluid"
                                       src={gallery10}
                                       itemProp="thumbnail"
                                       alt="description10"
                                    />
                                 </Col>
                                 <Col lg="3" md="6" xs="12">
                                    <img
                                       className="img-thumbnail img-fluid"
                                       src={gallery11}
                                       itemProp="thumbnail"
                                       alt="description11"
                                    />
                                 </Col>
                                 <Col lg="3" md="6" xs="12">
                                    <img
                                       className="img-thumbnail img-fluid"
                                       src={gallery12}
                                       itemProp="thumbnail"
                                       alt="description12"
                                    />
                                 </Col>
                              </Row>
                              <Row>
                                 <Col lg="3" md="6" xs="12">
                                    <img
                                       className="img-thumbnail img-fluid"
                                       src={gallery13}
                                       itemProp="thumbnail"
                                       alt="description13"
                                    />
                                 </Col>
                                 <Col lg="3" md="6" xs="12">
                                    <img
                                       className="img-thumbnail img-fluid"
                                       src={gallery14}
                                       itemProp="thumbnail"
                                       alt="description14"
                                    />
                                 </Col>
                                 <Col lg="3" md="6" xs="12">
                                    <img
                                       className="img-thumbnail img-fluid"
                                       src={gallery15}
                                       itemProp="thumbnail"
                                       alt="description15"
                                    />
                                 </Col>
                                 <Col lg="3" md="6" xs="12">
                                    <img
                                       className="img-thumbnail img-fluid"
                                       src={gallery16}
                                       itemProp="thumbnail"
                                       alt="description16"
                                    />
                                 </Col>
                              </Row>
                           </CardBody>
                        </Card>
                     </Col>
                  </Row>
               </TabPane>
            </TabContent>
         </Fragment>
      );
   }
}

export default UserProfile;
