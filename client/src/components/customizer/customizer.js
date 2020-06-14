import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { Settings } from "react-feather";

import { FoldedContentConsumer } from "../../utility/context/toggleContentContext";

import PerfectScrollbar from "react-perfect-scrollbar";

import bgImg1 from "../../assets/img/sidebar-bg/01.jpg";
import bgImg2 from "../../assets/img/sidebar-bg/02.jpg";
import bgImg3 from "../../assets/img/sidebar-bg/03.jpg";
import bgImg4 from "../../assets/img/sidebar-bg/04.jpg";
import bgImg5 from "../../assets/img/sidebar-bg/05.jpg";
import bgImg6 from "../../assets/img/sidebar-bg/06.jpg";

const circleStyle = {
   width: "20px",
   height: "20px"
};

class Customizer extends Component {
   state = {
      customizer: false
   };

   toggleCustomizer = () => {
      this.setState({
         customizer: !this.state.customizer
      });
   };

   handleSizeChange = size => {
      this.props.handleSidebarSize(size);
   };
   
    handleLayout = layout => {
        this.props.handleLayout(layout);
    };

   handleSidebarChange = state => {
      this.props.handleCollapsedSidebar(state);
   };

   render() {
      return (
         <FoldedContentConsumer>
            {context => (
               <div
                  className={
                     `customizer border-left-blue-grey border-left-lighten-4 d-none d-sm-none d-md-block ` +
                     (this.state.customizer === true ? `open` : ``)
                  }
               >
                  <Link to="/" className="customizer-close">
                     <i className="ft-x font-medium-3" />{" "}
                  </Link>{" "}
                  <span className="customizer-toggle bg-danger" id="customizer-toggle-icon" onClick={this.toggleCustomizer}>
                     <Settings size={18} className="white spinner" />
                  </span>
                  <PerfectScrollbar>
                     <div className="customizer-content p-3">
                        <h4 className="text-uppercase mb-0 text-bold-400">Theme Customizer</h4>
                        <p>Customize & Preview in Real Time</p>
                        <hr className="my-3" />

                        <h6 className="text-center text-bold-500 mb-3 text-uppercase">Sidebar Color Options</h6>
                        <div className="cz-bg-color">
                           <div className="row p-1">
                              <div className="col">
                                 <span
                                    className="gradient-pomegranate d-block rounded-circle"
                                    style={circleStyle}
                                    onClick={() => this.props.sidebarBgColor("pomegranate")}
                                 />
                              </div>
                              <div className="col">
                                 <span
                                    className="gradient-king-yna d-block rounded-circle"
                                    style={circleStyle}
                                    onClick={() => this.props.sidebarBgColor("king-yna")}
                                 />
                              </div>
                              <div className="col">
                                 <span
                                    className="gradient-ibiza-sunset d-block rounded-circle"
                                    style={circleStyle}
                                    onClick={() => this.props.sidebarBgColor("ibiza-sunset")}
                                 />
                              </div>
                              <div className="col">
                                 <span
                                    className="gradient-flickr d-block rounded-circle"
                                    style={circleStyle}
                                    onClick={() => this.props.sidebarBgColor("flickr")}
                                 />
                              </div>
                              <div className="col">
                                 <span
                                    className="gradient-purple-bliss d-block rounded-circle"
                                    style={circleStyle}
                                    onClick={() => this.props.sidebarBgColor("purple-bliss")}
                                 />
                              </div>
                              <div className="col">
                                 <span
                                    className="gradient-man-of-steel d-block rounded-circle"
                                    style={circleStyle}
                                    onClick={() => this.props.sidebarBgColor("man-of-steel")}
                                 />
                              </div>
                              <div className="col">
                                 <span
                                    className="gradient-purple-love d-block rounded-circle"
                                    style={circleStyle}
                                    onClick={() => this.props.sidebarBgColor("purple-love")}
                                 />
                              </div>
                           </div>
                           <div className="row p-1">
                              <div className="col">
                                 <span
                                    className="bg-black d-block rounded-circle"
                                    style={circleStyle}
                                    onClick={() => this.props.sidebarBgColor("black")}
                                 />
                              </div>
                              <div className="col">
                                 <span
                                    className="bg-grey d-block rounded-circle"
                                    style={circleStyle}
                                    onClick={() => this.props.sidebarBgColor("white")}
                                 />
                              </div>
                              <div className="col">
                                 <span
                                    className="bg-blue d-block rounded-circle"
                                    style={circleStyle}
                                    onClick={() => this.props.sidebarBgColor("blue")}
                                 />
                              </div>
                              <div className="col">
                                 <span
                                    className="bg-purple d-block rounded-circle"
                                    style={circleStyle}
                                    onClick={() => this.props.sidebarBgColor("purple")}
                                 />
                              </div>
                              <div className="col">
                                 <span
                                    className="bg-red d-block rounded-circle"
                                    style={circleStyle}
                                    onClick={() => this.props.sidebarBgColor("red")}
                                 />
                              </div>
                              <div className="col">
                                 <span
                                    className="bg-orange d-block rounded-circle"
                                    style={circleStyle}
                                    onClick={() => this.props.sidebarBgColor("orange")}
                                 />
                              </div>
                              <div className="col">
                                 <span
                                    className="bg-indigo d-block rounded-circle"
                                    style={circleStyle}
                                    onClick={() => this.props.sidebarBgColor("navy-blue")}
                                 />
                              </div>
                           </div>
                        </div>

                        <hr className="my-3" />

                        <h6 className="text-center text-bold-500 mb-2 text-uppercase">Sidebar Bg Image</h6>
                        <div className="cz-bg-image py-3">
                           <img
                              className="rounded width-50 height-100"
                              src={bgImg1}
                              width="90"
                              alt="bg-image01"
                              onClick={() => this.props.sidebarImageUrl(bgImg1)}
                           />

                           <img
                              className="rounded width-50 height-100"
                              src={bgImg2}
                              width="90"
                              alt="bg-image02"
                              onClick={() => this.props.sidebarImageUrl(bgImg2)}
                           />

                           <img
                              className="rounded width-50 height-100"
                              src={bgImg3}
                              width="90"
                              alt="bg-image03"
                              onClick={() => this.props.sidebarImageUrl(bgImg3)}
                           />

                           <img
                              className="rounded width-50 height-100"
                              src={bgImg4}
                              width="90"
                              alt="bg-image04"
                              onClick={() => this.props.sidebarImageUrl(bgImg4)}
                           />

                           <img
                              className="rounded width-50 height-100"
                              src={bgImg5}
                              width="90"
                              alt="bg-image05"
                              onClick={() => this.props.sidebarImageUrl(bgImg5)}
                           />

                           <img
                              className="rounded width-50 height-100"
                              src={bgImg6}
                              width="90"
                              alt="bg-image06"
                              onClick={() => this.props.sidebarImageUrl(bgImg6)}
                           />
                        </div>

                        <hr className="my-3" />

                        <div>
                           <Form>
                              <div className="togglebutton">
                                 <FormGroup check>
                                    <Label check>
                                       <Input
                                          type="checkbox"
                                          id="cz-bg-image-display"
                                          onChange={e => {
                                             if (e.target.checked === true) {
                                                this.handleLayout('layout-dark');
                                             } else {
                                                this.handleLayout('layout-light');
                                             }
                                          }}
                                       />{" "}
                                       Layout dark
                                    </Label>
                                 </FormGroup>
                              </div>

                              <hr className="my-3" />

                              <div className="togglebutton">
                                 <FormGroup check>
                                    <Label check>
                                       <Input
                                          type="checkbox"
                                          id="cz-bg-image-display"
                                          onChange={e => {
                                             if (e.target.checked === true) {
                                                context.makeNormalContent();
                                                this.handleSidebarChange(false);
                                             } else {
                                                context.makeFullContent();
                                                this.handleSidebarChange(true);
                                             }
                                          }}
                                          defaultChecked
                                       />{" "}
                                       Compact Menu
                                    </Label>
                                 </FormGroup>
                              </div>

                              <hr className="my-3" />

                              <div>
                                 <FormGroup>
                                    <Label for="largeSelect">Sidebar Width</Label>
                                    <Input
                                       type="select"
                                       id="sidebarWidth"
                                       name="sidebarWidth"
                                       defaultValue="sidebar-md"
                                       onChange={e => this.handleSizeChange(e.target.value)}
                                    >
                                       <option value="sidebar-sm">Small</option>
                                       <option value="sidebar-md">Medium</option>
                                       <option value="sidebar-lg">Large</option>
                                    </Input>
                                 </FormGroup>
                              </div>
                           </Form>
                        </div>

                        {/* <Form>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" defaultChecked onChange={e => {
                                                if (e.target.checked === true) sidebarImage(true);
                                                else sidebarImage(false);
                                            }} />{' '}
                                            Sidebar Bg Image
                                        </Label>
                                    </FormGroup> 
                                        <div className="switch"><span>Sidebar Bg Image</span>
                                            <div className="float-right">
                                            <div className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
                                                <input className="custom-control-input cz-bg-image-display" id="sidebar-bg-img" type="checkbox" checked="" />
                                                <label className="custom-control-label" for="sidebar-bg-img"></label>
                                            </div>
                                            </div>
                                        </div> 
                                </Form> */}
                     </div>
                  </PerfectScrollbar>
               </div>
            )}
         </FoldedContentConsumer>
      );
   }
}

export default Customizer;
