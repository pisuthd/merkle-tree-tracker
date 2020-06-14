import React, { Component, Fragment } from "react";
import ContentHeader from "../../components/contentHead/contentHeader";
import ContentSubHeader from "../../components/contentHead/contentSubHeader";
import CustomTabs from "../../components/tabs/customTabs";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

import * as Icon from "react-feather";

//Prism
// eslint-disable-next-line
import Prism from "prismjs"; //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

// Table exmple pages
import FeatherIconsExample from "./examples/featherIcons";

//Table exmple souece pages
import FeatherIconExampleSource from "./example-source/featherIcons";

class Feather extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Feather Icons </ContentHeader>
            <ContentSubHeader>
               <a href="https://www.npmjs.com/package/react-feather" target="_blank" rel="noopener noreferrer">
                  React Feather Icons
               </a>{" "}
               is a collection of simply beautiful open source icons. Each icon is designed on a 24x24 grid with an emphasis
               on simplicity, consistency and readability.
            </ContentSubHeader>
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Example usage</CardTitle>
                        <CustomTabs
                           TabContent1={<FeatherIconsExample />}
                           TabContent2={
                              <PrismCode component="pre" className="language-javascript">
                                 {FeatherIconExampleSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col sm="12">
                  <Card className="feather-icons">
                     <CardBody>
                        <CardTitle>Icons</CardTitle>
                        <Row>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Activity size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Activity</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Airplay size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Airplay</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.AlertCircle size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">AlertCircle</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.AlertOctagon size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">AlertOctagon</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.AlertTriangle size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">AlertTriangle</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.AlignCenter size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">AlignCenter</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.AlignJustify size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">AlignJustify</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.AlignLeft size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">AlignLeft</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.AlignRight size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">AlignRight</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Anchor size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Anchor</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Aperture size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Aperture</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Archive size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Archive</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ArrowDownCircle size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ArrowDownCircle</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ArrowDownLeft size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ArrowDownLeft</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ArrowDownRight size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ArrowDownRight</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ArrowDown size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ArrowDown</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ArrowLeftCircle size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ArrowLeftCircle</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ArrowLeft size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ArrowLeft</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ArrowRightCircle size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ArrowRightCircle</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ArrowRight size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ArrowRight</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ArrowUpCircle size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ArrowUpCircle</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ArrowUpLeft size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ArrowUpLeft</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ArrowUpRight size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ArrowUpRight</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ArrowUp size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ArrowUp</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.AtSign size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">AtSign</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Award size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Award</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.BarChart2 size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">BarChart2</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.BarChart size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">BarChart</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.BatteryCharging size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">BatteryCharging</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Battery size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Battery</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.BellOff size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">BellOff</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Bell size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Bell</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Bluetooth size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Bluetooth</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Bold size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Bold</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.BookOpen size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">BookOpen</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Book size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Book</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Bookmark size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Bookmark</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Box size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Box</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Briefcase size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Briefcase</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Calendar size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Calendar</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.CameraOff size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">CameraOff</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Camera size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Camera</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Cast size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Cast</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.CheckCircle size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">CheckCircle</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.CheckSquare size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">CheckSquare</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Check size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Check</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ChevronDown size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ChevronDown</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ChevronLeft size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ChevronLeft</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ChevronRight size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ChevronRight</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ChevronUp size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ChevronUp</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ChevronsDown size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ChevronsDown</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ChevronsLeft size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ChevronsLeft</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ChevronsRight size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ChevronsRight</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ChevronsUp size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ChevronsUp</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Chrome size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Chrome</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Circle size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Circle</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Clipboard size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Clipboard</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Clock size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Clock</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.CloudDrizzle size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">CloudDrizzle</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.CloudLightning size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">CloudLightning</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.CloudOff size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">CloudOff</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.CloudRain size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">CloudRain</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.CloudSnow size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">CloudSnow</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Cloud size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Cloud</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Code size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Code</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Codepen size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Codepen</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Command size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Command</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Compass size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Compass</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Copy size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Copy</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.CornerDownLeft size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">CornerDownLeft</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.CornerDownRight size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">CornerDownRight</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.CornerLeftDown size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">CornerLeftDown</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.CornerLeftUp size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">CornerLeftUp</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.CornerRightDown size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">CornerRightDown</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.CornerRightUp size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">CornerRightUp</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.CornerUpLeft size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">CornerUpLeft</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.CornerUpRight size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">CornerUpRight</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Cpu size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Cpu</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.CreditCard size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">CreditCard</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Crop size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Crop</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Crosshair size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Crosshair</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Database size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Database</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Delete size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Delete</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Disc size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Disc</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.DollarSign size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">DollarSign</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.DownloadCloud size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">DownloadCloud</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Download size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Download</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Droplet size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Droplet</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Edit2 size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Edit2</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Edit3 size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Edit3</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Edit size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Edit</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ExternalLink size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ExternalLink</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.EyeOff size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">EyeOff</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Eye size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Eye</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Facebook size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Facebook</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.FastForward size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">FastForward</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Feather size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Feather</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.FileMinus size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">FileMinus</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.FilePlus size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">FilePlus</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.FileText size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">FileText</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.File size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">File</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Film size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Film</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Filter size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Filter</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Flag size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Flag</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.FolderMinus size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">FolderMinus</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.FolderPlus size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">FolderPlus</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Folder size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Folder</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Gift size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Gift</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.GitBranch size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">GitBranch</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.GitCommit size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">GitCommit</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.GitMerge size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">GitMerge</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.GitPullRequest size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">GitPullRequest</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Gitlab size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Gitlab</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Globe size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Globe</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Grid size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Grid</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.HardDrive size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">HardDrive</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Hash size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Hash</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Headphones size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Headphones</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Heart size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Heart</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.HelpCircle size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">HelpCircle</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Home size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Home</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Image size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Image</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Inbox size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Inbox</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Info size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Info</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Instagram size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Instagram</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Italic size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Italic</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Layers size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Layers</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Layout size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Layout</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.LifeBuoy size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">LifeBuoy</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Link2 size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Link2</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Link size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Link</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Linkedin size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Linkedin</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.List size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">List</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Loader size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Loader</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Lock size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Lock</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.LogIn size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">LogIn</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.LogOut size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">LogOut</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Mail size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Mail</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.MapPin size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">MapPin</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Map size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Map</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Maximize2 size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Maximize2</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Maximize size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Maximize</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Menu size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Menu</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.MessageCircle size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">MessageCircle</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.MessageSquare size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">MessageSquare</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.MicOff size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">MicOff</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Mic size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Mic</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Minimize2 size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Minimize2</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Minimize size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Minimize</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.MinusCircle size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">MinusCircle</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.MinusSquare size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">MinusSquare</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Minus size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Minus</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Monitor size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Monitor</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Moon size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Moon</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.MoreHorizontal size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">MoreHorizontal</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.MoreVertical size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">MoreVertical</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Move size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Move</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Music size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Music</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Navigation2 size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Navigation2</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Navigation size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Navigation</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Octagon size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Octagon</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Package size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Package</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Paperclip size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Paperclip</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.PauseCircle size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">PauseCircle</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Pause size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Pause</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Percent size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Percent</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.PhoneCall size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">PhoneCall</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.PhoneForwarded size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">PhoneForwarded</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.PhoneIncoming size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">PhoneIncoming</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.PhoneMissed size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">PhoneMissed</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.PhoneOff size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">PhoneOff</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.PhoneOutgoing size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">PhoneOutgoing</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Phone size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Phone</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.PieChart size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">PieChart</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.PlayCircle size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">PlayCircle</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Play size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Play</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.PlusCircle size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">PlusCircle</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.PlusSquare size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">PlusSquare</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Plus size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Plus</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Pocket size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Pocket</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Power size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Power</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Printer size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Printer</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Radio size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Radio</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.RefreshCcw size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">RefreshCcw</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.RefreshCw size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">RefreshCw</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Repeat size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Repeat</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Rewind size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Rewind</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.RotateCcw size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">RotateCcw</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.RotateCw size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">RotateCw</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Rss size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Rss</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Save size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Save</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Scissors size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Scissors</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Search size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Search</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Send size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Send</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Server size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Server</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Settings size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Settings</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Share2 size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Share2</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Share size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Share</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ShieldOff size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ShieldOff</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Shield size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Shield</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ShoppingBag size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ShoppingBag</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ShoppingCart size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ShoppingCart</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Shuffle size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Shuffle</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Sidebar size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Sidebar</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.SkipBack size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">SkipBack</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.SkipForward size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">SkipForward</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Slack size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Slack</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Slash size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Slash</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Sliders size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Sliders</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Smartphone size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Smartphone</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Speaker size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Speaker</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Square size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Square</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Star size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Star</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.StopCircle size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">StopCircle</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Sun size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Sun</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Sunrise size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Sunrise</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Sunset size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Sunset</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Tablet size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Tablet</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Tag size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Tag</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Target size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Target</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Terminal size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Terminal</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Thermometer size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Thermometer</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ThumbsDown size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ThumbsDown</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ThumbsUp size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ThumbsUp</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ToggleLeft size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ToggleLeft</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ToggleRight size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ToggleRight</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Trash2 size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Trash2</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Trash size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Trash</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.TrendingDown size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">TrendingDown</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.TrendingUp size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">TrendingUp</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Triangle size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Triangle</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Truck size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Truck</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Tv size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Tv</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Twitter size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Twitter</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Type size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Type</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Umbrella size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Umbrella</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Underline size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Underline</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Unlock size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Unlock</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.UploadCloud size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">UploadCloud</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Upload size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Upload</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.UserCheck size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">UserCheck</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.UserMinus size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">UserMinus</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.UserPlus size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">UserPlus</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.UserX size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">UserX</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.User size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">User</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Users size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Users</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.VideoOff size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">VideoOff</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Video size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Video</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Voicemail size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Voicemail</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Volume1 size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Volume1</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Volume2 size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Volume2</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.VolumeX size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">VolumeX</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Volume size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Volume</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Watch size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Watch</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.WifiOff size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">WifiOff</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Wifi size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Wifi</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Wind size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Wind</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.XCircle size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">XCircle</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.XSquare size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">XSquare</label>
                           </Col>

                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.X size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">X</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Youtube size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Youtube</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ZapOff size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ZapOff</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.Zap size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">Zap</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ZoomIn size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ZoomIn</label>
                           </Col>
                           <Col sm="12" md="4" className="fonticon-container">
                              <Icon.ZoomOut size={32} className="mr-4 fonticon-wrap" />
                              <label className="fonticon-classname">ZoomOut</label>
                           </Col>
                        </Row>
                     </CardBody>
                  </Card>
               </Col>
            </Row>
         </Fragment>
      );
   }
}

export default Feather;
