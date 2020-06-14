import React, { Component, Fragment } from "react";
import ContentHeader from "../../components/contentHead/contentHeader";
import { Row, Col } from "reactstrap";

class ColorPallete extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Color Pallete </ContentHeader>
            <section className="color-palette mt-4">
               <Row className=" app-color color-palette overflow-hidden">
                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#009DA0" }}>
                           <span className="name light-strong">Primary</span>
                           <span className="shade light-strong">500</span>
                           <span className="hex light-strong">#009DA0</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#E0F3F4" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#E0F3F4</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#B3E2E3" }}>
                           <span className="shade">100</span>
                           <span className="hex">#B3E2E3</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#80CED0" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#80CED0</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#4DBABD" }}>
                           <span className="shade">300</span>
                           <span className="hex">#4DBABD</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#26ACAE" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#26ACAE</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#009DA0" }}>
                           <span className="shade">500</span>
                           <span className="hex">#009DA0</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#009598" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#009598</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#008B8E" }}>
                           <span className="shade">700</span>
                           <span className="hex">#008B8E</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#008184" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#008184</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#006F73" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#006F73</span>
                        </li>
                        <li className="color dark divide" style={{ "backgroundColor": "#A1FBFF" }}>
                           <span className="shade accent">A100</span>
                           <span className="hex">#A1FBFF</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#6EF9FF" }}>
                           <span className="shade accent expanded">A200</span>
                           <span className="hex">#6EF9FF</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#3BF7FF" }}>
                           <span className="shade accent expanded">A400</span>
                           <span className="hex">#3BF7FF</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#22F6FF" }}>
                           <span className="shade accent">A700</span>
                           <span className="hex">#22F6FF</span>
                        </li>
                     </ul>
                  </Col>
                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#0CC27E" }}>
                           <span className="name light-strong">Success</span>
                           <span className="shade light-strong">500</span>
                           <span className="hex light-strong">#0CC27E</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#E2F8F0" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#E2F8F0</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#B6EDD8" }}>
                           <span className="shade">100</span>
                           <span className="hex">#B6EDD8</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#86E1BF" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#86E1BF</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#55D4A5" }}>
                           <span className="shade">300</span>
                           <span className="hex">#55D4A5</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#30CB91" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#30CB91</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#0CC27E" }}>
                           <span className="shade">500</span>
                           <span className="hex">#0CC27E</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#0ABC76" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#0ABC76</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#08B46B" }}>
                           <span className="shade">700</span>
                           <span className="hex">#08B46B</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#06AC61" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#06AC61</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#039F4E" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#039F4E</span>
                        </li>
                        <li className="color dark divide" style={{ "backgroundColor": "#C9FFE0" }}>
                           <span className="shade accent">A100</span>
                           <span className="hex">#C9FFE0</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#96FFC3" }}>
                           <span className="shade accent expanded">A200</span>
                           <span className="hex">#96FFC3</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#63FFA5" }}>
                           <span className="shade accent expanded">A400</span>
                           <span className="hex">#63FFA5</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#4AFF96" }}>
                           <span className="shade accent">A700</span>
                           <span className="hex">#4AFF96</span>
                        </li>
                     </ul>
                  </Col>
                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#FF586B" }}>
                           <span className="name light-strong">Danger</span>
                           <span className="shade light-strong">500</span>
                           <span className="hex light-strong">#FF586B</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#FFEBED" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#FFEBED</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#FFCDD3" }}>
                           <span className="shade">100</span>
                           <span className="hex">#FFCDD3</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#FFACB5" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#FFACB5</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#FF8A97" }}>
                           <span className="shade">300</span>
                           <span className="hex">#FF8A97</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#FF7181" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#FF7181</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#FF586B" }}>
                           <span className="shade">500</span>
                           <span className="hex">#FF586B</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#FF5063" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#FF5063</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#FF4758" }}>
                           <span className="shade">700</span>
                           <span className="hex">#FF4758</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#FF3D4E" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#FF3D4E</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#FF2D3C" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#FF2D3C</span>
                        </li>
                        <li className="color dark divide" style={{ "backgroundColor": "#FFFFFF" }}>
                           <span className="shade accent">A100</span>
                           <span className="hex">#FFFFFF</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#FBEBED" }}>
                           <span className="shade accent expanded">A200</span>
                           <span className="hex">#FBEBED</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#FFD9DB" }}>
                           <span className="shade accent expanded">A400</span>
                           <span className="hex">#FFD9DB</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#FFBFC3" }}>
                           <span className="shade accent">A700</span>
                           <span className="hex">#FFBFC3</span>
                        </li>
                     </ul>
                  </Col>
                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#1CBCD8" }}>
                           <span className="name light-strong">Info</span>
                           <span className="shade light-strong">500</span>
                           <span className="hex light-strong">#1CBCD8</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#E4F7FA" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#E4F7FA</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#BBEBF3" }}>
                           <span className="shade">100</span>
                           <span className="hex">#BBEBF3</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#8EDEEC" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#8EDEEC</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#60D0E4" }}>
                           <span className="shade">300</span>
                           <span className="hex">#60D0E4</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#3EC6DE" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#3EC6DE</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#1CBCD8" }}>
                           <span className="shade">500</span>
                           <span className="hex">#1CBCD8</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#19B6D4" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#19B6D4</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#14ADCE" }}>
                           <span className="shade">700</span>
                           <span className="hex">#14ADCE</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#11A5C8" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#11A5C8</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#0997BF" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#0997BF</span>
                        </li>
                        <li className="color dark divide" style={{ "backgroundColor": "#EAFAFF" }}>
                           <span className="shade accent">A100</span>
                           <span className="hex">#EAFAFF</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#B7EDFF" }}>
                           <span className="shade accent expanded">A200</span>
                           <span className="hex">#B7EDFF</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#84E1FF" }}>
                           <span className="shade accent expanded">A400</span>
                           <span className="hex">#84E1FF</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#6ADAFF" }}>
                           <span className="shade accent">A700</span>
                           <span className="hex">#6ADAFF</span>
                        </li>
                     </ul>
                  </Col>
                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#FF8D60" }}>
                           <span className="name light-strong">Warning</span>
                           <span className="shade light-strong">500</span>
                           <span className="hex light-strong">#FF8D60</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#FFF1EC" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#FFF1EC</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#FFDDCF" }}>
                           <span className="shade">100</span>
                           <span className="hex">#FFDDCF</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#FFC6B0" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#FFC6B0</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#FFAF90" }}>
                           <span className="shade">300</span>
                           <span className="hex">#FFAF90</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#FF9E78" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#FF9E78</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#FF8D60" }}>
                           <span className="shade">500</span>
                           <span className="hex">#FF8D60</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#FF8558" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#FF8558</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#FF7A4E" }}>
                           <span className="shade">700</span>
                           <span className="hex">#FF7A4E</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#FF7044" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#FF7044</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#FF5D33" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#FF5D33</span>
                        </li>
                        <li className="color dark divide" style={{ "backgroundColor": "#FFFFFF" }}>
                           <span className="shade accent">A100</span>
                           <span className="hex">#FFFFFF</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#FFEFEC" }}>
                           <span className="shade accent expanded">A200</span>
                           <span className="hex">#FFEFEC</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#FFE4DE" }}>
                           <span className="shade accent expanded">A400</span>
                           <span className="hex">#FFE4DE</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#FFCFC4" }}>
                           <span className="shade accent">A700</span>
                           <span className="hex">#FFCFC4</span>
                        </li>
                     </ul>
                  </Col>
               </Row>
            </section>
            <section className="color-palette" id="other-colors">
               <Row>
                  <Col>
                     <div className="content-header mb-3">Palette with More Colors</div>
                  </Col>
               </Row>
               <Row>
                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#f44336" }}>
                           <span className="name light-strong">Red</span>
                           <span className="shade light-strong">500</span>
                           <span className="hex light-strong">#f44336</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffebee" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#ffebee</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffcdd2" }}>
                           <span className="shade">100</span>
                           <span className="hex">#ffcdd2</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ef9a9a" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#ef9a9a</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#e57373" }}>
                           <span className="shade">300</span>
                           <span className="hex">#e57373</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#ef5350" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#ef5350</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#f44336" }}>
                           <span className="shade">500</span>
                           <span className="hex">#f44336</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#e53935" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#e53935</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#d32f2f" }}>
                           <span className="shade">700</span>
                           <span className="hex">#d32f2f</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#c62828" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#c62828</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#b71c1c" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#b71c1c</span>
                        </li>
                        <li className="color dark divide" style={{ "backgroundColor": "#ff8a80" }}>
                           <span className="shade accent">A100</span>
                           <span className="hex">#ff8a80</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#ff5252" }}>
                           <span className="shade accent expanded">A200</span>
                           <span className="hex">#ff5252</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#ff1744" }}>
                           <span className="shade accent expanded">A400</span>
                           <span className="hex">#ff1744</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#d50000" }}>
                           <span className="shade accent">A700</span>
                           <span className="hex">#d50000</span>
                        </li>
                     </ul>
                  </Col>

                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#E91E63" }}>
                           <span className="name light-strong">Pink</span>
                           <span className="shade light-strong">500</span>
                           <span className="hex light-strong">#e91e63</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#fce4ec" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#fce4ec</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#f8bbd0" }}>
                           <span className="shade">100</span>
                           <span className="hex">#f8bbd0</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#f48fb1" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#f48fb1</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#f06292" }}>
                           <span className="shade">300</span>
                           <span className="hex">#f06292</span>
                        </li>
                        <li className="color " style={{ "backgroundColor": "#ec407a" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#ec407a</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#e91e63" }}>
                           <span className="shade">500</span>
                           <span className="hex">#e91e63</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#d81b60" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#d81b60</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#c2185b" }}>
                           <span className="shade">700</span>
                           <span className="hex">#c2185b</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#ad1457" }}>
                           <span className="shade">800</span>
                           <span className="hex">#ad1457</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#880e4f" }}>
                           <span className="shade">900</span>
                           <span className="hex">#880e4f</span>
                        </li>
                        <li className="color dark divide" style={{ "backgroundColor": "#ff80ab" }}>
                           <span className="shade accent">A100</span>
                           <span className="hex">#ff80ab</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#ff4081" }}>
                           <span className="shade accent expanded">A200</span>
                           <span className="hex">#ff4081</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#f50057" }}>
                           <span className="shade accent expanded">A400</span>
                           <span className="hex">#f50057</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#c51162" }}>
                           <span className="shade accent">A700</span>
                           <span className="hex">#c51162</span>
                        </li>
                     </ul>
                  </Col>

                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#9c27b0" }}>
                           <span className="name">Purple</span>
                           <span className="shade">500</span>
                           <span className="hex">#9c27b0</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#f3e5f5" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#f3e5f5</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#e1bee7" }}>
                           <span className="shade">100</span>
                           <span className="hex">#e1bee7</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ce93d8" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#ce93d8</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#ba68c8" }}>
                           <span className="shade">300</span>
                           <span className="hex">#ba68c8</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#ab47bc" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#ab47bc</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#9c27b0" }}>
                           <span className="shade">500</span>
                           <span className="hex">#9c27b0</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#8e24aa" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#8e24aa</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#7b1fa2" }}>
                           <span className="shade">700</span>
                           <span className="hex">#7b1fa2</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#6a1b9a" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#6a1b9a</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#4a148c" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#4a148c</span>
                        </li>
                        <li className="color dark divide" style={{ "backgroundColor": "#ea80fc" }}>
                           <span className="shade accent">A100</span>
                           <span className="hex">#ea80fc</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#e040fb" }}>
                           <span className="shade accent expanded">A200</span>
                           <span className="hex">#e040fb</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#d500f9" }}>
                           <span className="shade accent expanded">A400</span>
                           <span className="hex">#d500f9</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#aa00ff" }}>
                           <span className="shade accent">A700</span>
                           <span className="hex">#aa00ff</span>
                        </li>
                     </ul>
                  </Col>

                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#673ab7" }}>
                           <span className="name">Deep Purple</span>
                           <span className="shade">500</span>
                           <span className="hex">#673ab7</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ede7f6" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#ede7f6</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#d1c4e9" }}>
                           <span className="shade">100</span>
                           <span className="hex">#d1c4e9</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#b39ddb" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#b39ddb</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#9575cd" }}>
                           <span className="shade">300</span>
                           <span className="hex">#9575cd</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#7e57c2" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#7e57c2</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#673ab7" }}>
                           <span className="shade">500</span>
                           <span className="hex">#673ab7</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#5e35b1" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#5e35b1</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#512da8" }}>
                           <span className="shade">700</span>
                           <span className="hex">#512da8</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#4527a0" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#4527a0</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#311b92" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#311b92</span>
                        </li>
                        <li className="color dark divide" style={{ "backgroundColor": "#b388ff" }}>
                           <span className="shade accent">A100</span>
                           <span className="hex">#b388ff</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#7c4dff" }}>
                           <span className="shade accent expanded">A200</span>
                           <span className="hex">#7c4dff</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#651fff" }}>
                           <span className="shade accent expanded">A400</span>
                           <span className="hex">#651fff</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#6200ea" }}>
                           <span className="shade accent">A700</span>
                           <span className="hex">#6200ea</span>
                        </li>
                     </ul>
                  </Col>

                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#3f51b5" }}>
                           <span className="name">Indigo</span>
                           <span className="shade">500</span>
                           <span className="hex">#3f51b5</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#e8eaf6" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#e8eaf6</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#c5cae9" }}>
                           <span className="shade">100</span>
                           <span className="hex">#c5cae9</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#9fa8da" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#9fa8da</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#7986cb" }}>
                           <span className="shade">300</span>
                           <span className="hex">#7986cb</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#5c6bc0" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#5c6bc0</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#3f51b5" }}>
                           <span className="shade">500</span>
                           <span className="hex">#3f51b5</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#3949ab" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#3949ab</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#303f9f" }}>
                           <span className="shade">700</span>
                           <span className="hex">#303f9f</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#283593" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#283593</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#1a237e" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#1a237e</span>
                        </li>
                        <li className="color dark divide" style={{ "backgroundColor": "#8c9eff" }}>
                           <span className="shade accent">A100</span>
                           <span className="hex">#8c9eff</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#536dfe" }}>
                           <span className="shade accent expanded">A200</span>
                           <span className="hex">#536dfe</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#3d5afe" }}>
                           <span className="shade accent expanded">A400</span>
                           <span className="hex">#3d5afe</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#304ffe" }}>
                           <span className="shade accent">A700</span>
                           <span className="hex">#304ffe</span>
                        </li>
                     </ul>
                  </Col>

                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#2196F3" }}>
                           <span className="name light-strong">Blue</span>
                           <span className="shade light-strong">500</span>
                           <span className="hex light-strong">#2196f3</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#e3f2fd" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#e3f2fd</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#bbdefb" }}>
                           <span className="shade">100</span>
                           <span className="hex">#bbdefb</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#90caf9" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#90caf9</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#64b5f6" }}>
                           <span className="shade">300</span>
                           <span className="hex">#64b5f6</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#42a5f5" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#42a5f5</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#2196f3" }}>
                           <span className="shade">500</span>
                           <span className="hex">#2196f3</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#1e88e5" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#1e88e5</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#1976d2" }}>
                           <span className="shade">700</span>
                           <span className="hex">#1976d2</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#1565c0" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#1565c0</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#0d47a1" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#0d47a1</span>
                        </li>
                        <li className="color dark divide" style={{ "backgroundColor": "#82b1ff" }}>
                           <span className="shade accent">A100</span>
                           <span className="hex">#82b1ff</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#448aff" }}>
                           <span className="shade accent expanded">A200</span>
                           <span className="hex">#448aff</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#2979ff" }}>
                           <span className="shade accent expanded">A400</span>
                           <span className="hex">#2979ff</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#2962ff" }}>
                           <span className="shade accent">A700</span>
                           <span className="hex">#2962ff</span>
                        </li>
                     </ul>
                  </Col>

                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#03a9f4" }}>
                           <span className="name dark">Light Blue</span>
                           <span className="shade dark">500</span>
                           <span className="hex dark">#03a9f4</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#e1f5fe" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#e1f5fe</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#b3e5fc" }}>
                           <span className="shade">100</span>
                           <span className="hex">#b3e5fc</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#81d4fa" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#81d4fa</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#4fc3f7" }}>
                           <span className="shade">300</span>
                           <span className="hex">#4fc3f7</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#29b6f6" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#29b6f6</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#03a9f4" }}>
                           <span className="shade">500</span>
                           <span className="hex">#03a9f4</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#039be5" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#039be5</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#0288d1" }}>
                           <span className="shade">700</span>
                           <span className="hex">#0288d1</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#0277bd" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#0277bd</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#01579b" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#01579b</span>
                        </li>
                        <li className="color dark divide" style={{ "backgroundColor": "#80d8ff" }}>
                           <span className="shade accent">A100</span>
                           <span className="hex">#80d8ff</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#40c4ff" }}>
                           <span className="shade accent expanded">A200</span>
                           <span className="hex">#40c4ff</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#00b0ff" }}>
                           <span className="shade accent expanded">A400</span>
                           <span className="hex">#00b0ff</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#0091ea" }}>
                           <span className="shade accent">A700</span>
                           <span className="hex">#0091ea</span>
                        </li>
                     </ul>
                  </Col>

                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#00bcd4" }}>
                           <span className="name dark">Cyan</span>
                           <span className="shade dark">500</span>
                           <span className="hex dark">#00bcd4</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#e0f7fa" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#e0f7fa</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#b2ebf2" }}>
                           <span className="shade">100</span>
                           <span className="hex">#b2ebf2</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#80deea" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#80deea</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#4dd0e1" }}>
                           <span className="shade">300</span>
                           <span className="hex">#4dd0e1</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#26c6da" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#26c6da</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#00bcd4" }}>
                           <span className="shade">500</span>
                           <span className="hex">#00bcd4</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#00acc1" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#00acc1</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#0097a7" }}>
                           <span className="shade">700</span>
                           <span className="hex">#0097a7</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#00838f" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#00838f</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#006064" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#006064</span>
                        </li>
                        <li className="color dark divide" style={{ "backgroundColor": "#84ffff" }}>
                           <span className="shade accent">A100</span>
                           <span className="hex">#84ffff</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#18ffff" }}>
                           <span className="shade accent expanded">A200</span>
                           <span className="hex">#18ffff</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#00e5ff" }}>
                           <span className="shade accent expanded">A400</span>
                           <span className="hex">#00e5ff</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#00b8d4" }}>
                           <span className="shade accent">A700</span>
                           <span className="hex">#00b8d4</span>
                        </li>
                     </ul>
                  </Col>

                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#009688" }}>
                           <span className="name light-strong">Teal</span>
                           <span className="shade light-strong">500</span>
                           <span className="hex light-strong">#009688</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#e0f2f1" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#e0f2f1</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#b2dfdb" }}>
                           <span className="shade">100</span>
                           <span className="hex">#b2dfdb</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#80cbc4" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#80cbc4</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#4db6ac" }}>
                           <span className="shade">300</span>
                           <span className="hex">#4db6ac</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#26a69a" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#26a69a</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#009688" }}>
                           <span className="shade">500</span>
                           <span className="hex">#009688</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#00897b" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#00897b</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#00796b" }}>
                           <span className="shade">700</span>
                           <span className="hex">#00796b</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#00695c" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#00695c</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#004d40" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#004d40</span>
                        </li>
                        <li className="color dark divide" style={{ "backgroundColor": "#a7ffeb" }}>
                           <span className="shade accent">A100</span>
                           <span className="hex">#a7ffeb</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#64ffda" }}>
                           <span className="shade accent expanded">A200</span>
                           <span className="hex">#64ffda</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#1de9b6" }}>
                           <span className="shade accent expanded">A400</span>
                           <span className="hex">#1de9b6</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#00bfa5" }}>
                           <span className="shade accent">A700</span>
                           <span className="hex">#00bfa5</span>
                        </li>
                     </ul>
                  </Col>

                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#4caf50" }}>
                           <span className="name dark">Green</span>
                           <span className="shade dark">500</span>
                           <span className="hex dark">#4caf50</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#e8f5e9" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#e8f5e9</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#c8e6c9" }}>
                           <span className="shade">100</span>
                           <span className="hex">#c8e6c9</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#a5d6a7" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#a5d6a7</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#81c784" }}>
                           <span className="shade">300</span>
                           <span className="hex">#81c784</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#66bb6a" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#66bb6a</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#4caf50" }}>
                           <span className="shade">500</span>
                           <span className="hex">#4caf50</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#43a047" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#43a047</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#388e3c" }}>
                           <span className="shade">700</span>
                           <span className="hex">#388e3c</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#2e7d32" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#2e7d32</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#1b5e20" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#1b5e20</span>
                        </li>
                        <li className="color dark divide" style={{ "backgroundColor": "#b9f6ca" }}>
                           <span className="shade accent">A100</span>
                           <span className="hex">#b9f6ca</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#69f0ae" }}>
                           <span className="shade accent expanded">A200</span>
                           <span className="hex">#69f0ae</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#00e676" }}>
                           <span className="shade accent expanded">A400</span>
                           <span className="hex">#00e676</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#00c853" }}>
                           <span className="shade accent">A700</span>
                           <span className="hex">#00c853</span>
                        </li>
                     </ul>
                  </Col>

                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#8bc34a" }}>
                           <span className="name dark">Light Green</span>
                           <span className="shade dark">500</span>
                           <span className="hex dark">#8bc34a</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#f1f8e9" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#f1f8e9</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#dcedc8" }}>
                           <span className="shade">100</span>
                           <span className="hex">#dcedc8</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#c5e1a5" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#c5e1a5</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#aed581" }}>
                           <span className="shade">300</span>
                           <span className="hex">#aed581</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#9ccc65" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#9ccc65</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#8bc34a" }}>
                           <span className="shade">500</span>
                           <span className="hex">#8bc34a</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#7cb342" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#7cb342</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#689f38" }}>
                           <span className="shade">700</span>
                           <span className="hex">#689f38</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#558b2f" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#558b2f</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#33691e" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#33691e</span>
                        </li>
                        <li className="color dark divide" style={{ "backgroundColor": "#ccff90" }}>
                           <span className="shade accent">A100</span>
                           <span className="hex">#ccff90</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#b2ff59" }}>
                           <span className="shade accent expanded">A200</span>
                           <span className="hex">#b2ff59</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#76ff03" }}>
                           <span className="shade accent expanded">A400</span>
                           <span className="hex">#76ff03</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#64dd17" }}>
                           <span className="shade accent">A700</span>
                           <span className="hex">#64dd17</span>
                        </li>
                     </ul>
                  </Col>

                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#cddc39" }}>
                           <span className="name dark">Lime</span>
                           <span className="shade dark">500</span>
                           <span className="hex dark">#cddc39</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#f9fbe7" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#f9fbe7</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#f0f4c3" }}>
                           <span className="shade">100</span>
                           <span className="hex">#f0f4c3</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#e6ee9c" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#e6ee9c</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#dce775" }}>
                           <span className="shade">300</span>
                           <span className="hex">#dce775</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#d4e157" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#d4e157</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#cddc39" }}>
                           <span className="shade">500</span>
                           <span className="hex">#cddc39</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#c0ca33" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#c0ca33</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#afb42b" }}>
                           <span className="shade">700</span>
                           <span className="hex">#afb42b</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#9e9d24" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#9e9d24</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#827717" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#827717</span>
                        </li>
                        <li className="color dark divide" style={{ "backgroundColor": "#f4ff81" }}>
                           <span className="shade accent">A100</span>
                           <span className="hex">#f4ff81</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#eeff41" }}>
                           <span className="shade accent expanded">A200</span>
                           <span className="hex">#eeff41</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#c6ff00" }}>
                           <span className="shade accent expanded">A400</span>
                           <span className="hex">#c6ff00</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#aeea00" }}>
                           <span className="shade accent">A700</span>
                           <span className="hex">#aeea00</span>
                        </li>
                     </ul>
                  </Col>

                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#ffeb3b" }}>
                           <span className="name dark">Yellow</span>
                           <span className="shade dark">500</span>
                           <span className="hex dark">#ffeb3b</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#fffde7" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#fffde7</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#fff9c4" }}>
                           <span className="shade">100</span>
                           <span className="hex">#fff9c4</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#fff59d" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#fff59d</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#fff176" }}>
                           <span className="shade">300</span>
                           <span className="hex">#fff176</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffee58" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#ffee58</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffeb3b" }}>
                           <span className="shade">500</span>
                           <span className="hex">#ffeb3b</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#fdd835" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#fdd835</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#fbc02d" }}>
                           <span className="shade">700</span>
                           <span className="hex">#fbc02d</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#f9a825" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#f9a825</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#f57f17" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#f57f17</span>
                        </li>
                        <li className="color dark divide" style={{ "backgroundColor": "#ffff8d" }}>
                           <span className="shade accent">A100</span>
                           <span className="hex">#ffff8d</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffff00" }}>
                           <span className="shade accent expanded">A200</span>
                           <span className="hex">#ffff00</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffea00" }}>
                           <span className="shade accent expanded">A400</span>
                           <span className="hex">#ffea00</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffd600" }}>
                           <span className="shade accent">A700</span>
                           <span className="hex">#ffd600</span>
                        </li>
                     </ul>
                  </Col>

                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#ffc107" }}>
                           <span className="name dark">Amber</span>
                           <span className="shade dark">500</span>
                           <span className="hex dark">#ffc107</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#fff8e1" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#fff8e1</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffecb3" }}>
                           <span className="shade">100</span>
                           <span className="hex">#ffecb3</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffe082" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#ffe082</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffd54f" }}>
                           <span className="shade">300</span>
                           <span className="hex">#ffd54f</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffca28" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#ffca28</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffc107" }}>
                           <span className="shade">500</span>
                           <span className="hex">#ffc107</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffb300" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#ffb300</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffa000" }}>
                           <span className="shade">700</span>
                           <span className="hex">#ffa000</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ff8f00" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#ff8f00</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ff6f00" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#ff6f00</span>
                        </li>
                        <li className="color dark divide" style={{ "backgroundColor": "#ffe57f" }}>
                           <span className="shade accent">A100</span>
                           <span className="hex">#ffe57f</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffd740" }}>
                           <span className="shade accent expanded">A200</span>
                           <span className="hex">#ffd740</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffc400" }}>
                           <span className="shade accent expanded">A400</span>
                           <span className="hex">#ffc400</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffab00" }}>
                           <span className="shade accent">A700</span>
                           <span className="hex">#ffab00</span>
                        </li>
                     </ul>
                  </Col>

                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#ff9800" }}>
                           <span className="name dark-when-small">Orange</span>
                           <span className="shade dark-when-small">500</span>
                           <span className="hex dark-when-small">#ff9800</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#fff3e0" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#fff3e0</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffe0b2" }}>
                           <span className="shade">100</span>
                           <span className="hex">#ffe0b2</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffcc80" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#ffcc80</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffb74d" }}>
                           <span className="shade">300</span>
                           <span className="hex">#ffb74d</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffa726" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#ffa726</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ff9800" }}>
                           <span className="shade">500</span>
                           <span className="hex">#ff9800</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#fb8c00" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#fb8c00</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#f57c00" }}>
                           <span className="shade">700</span>
                           <span className="hex">#f57c00</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#ef6c00" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#ef6c00</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#e65100" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#e65100</span>
                        </li>
                        <li className="color dark divide" style={{ "backgroundColor": "#ffd180" }}>
                           <span className="shade accent">A100</span>
                           <span className="hex">#ffd180</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffab40" }}>
                           <span className="shade accent expanded">A200</span>
                           <span className="hex">#ffab40</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ff9100" }}>
                           <span className="shade accent expanded">A400</span>
                           <span className="hex">#ff9100</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ff6d00" }}>
                           <span className="shade accent">A700</span>
                           <span className="hex">#ff6d00</span>
                        </li>
                     </ul>
                  </Col>

                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#ff5722" }}>
                           <span className="name light-strong">Deep Orange</span>
                           <span className="shade light-strong">500</span>
                           <span className="hex light-strong">#ff5722</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#fbe9e7" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#fbe9e7</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffccbc" }}>
                           <span className="shade">100</span>
                           <span className="hex">#ffccbc</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffab91" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#ffab91</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ff8a65" }}>
                           <span className="shade">300</span>
                           <span className="hex">#ff8a65</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ff7043" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#ff7043</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#ff5722" }}>
                           <span className="shade">500</span>
                           <span className="hex">#ff5722</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#f4511e" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#f4511e</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#e64a19" }}>
                           <span className="shade">700</span>
                           <span className="hex">#e64a19</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#d84315" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#d84315</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#bf360c" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#bf360c</span>
                        </li>
                        <li className="color dark divide" style={{ "backgroundColor": "#ff9e80" }}>
                           <span className="shade accent">A100</span>
                           <span className="hex">#ff9e80</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ff6e40" }}>
                           <span className="shade accent expanded">A200</span>
                           <span className="hex">#ff6e40</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#ff3d00" }}>
                           <span className="shade accent expanded">A400</span>
                           <span className="hex">#ff3d00</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#dd2c00" }}>
                           <span className="shade accent">A700</span>
                           <span className="hex">#dd2c00</span>
                        </li>
                     </ul>
                  </Col>

                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#795548" }}>
                           <span className="name">Brown</span>
                           <span className="shade">500</span>
                           <span className="hex">#795548</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#efebe9" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#efebe9</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#d7ccc8" }}>
                           <span className="shade">100</span>
                           <span className="hex">#d7ccc8</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#bcaaa4" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#bcaaa4</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#a1887f" }}>
                           <span className="shade">300</span>
                           <span className="hex">#a1887f</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#8d6e63" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#8d6e63</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#795548" }}>
                           <span className="shade">500</span>
                           <span className="hex">#795548</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#6d4c41" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#6d4c41</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#5d4037" }}>
                           <span className="shade">700</span>
                           <span className="hex">#5d4037</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#4e342e" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#4e342e</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#3e2723" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#3e2723</span>
                        </li>
                     </ul>
                  </Col>

                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#9e9e9e" }}>
                           <span className="name dark-when-small">Grey</span>
                           <span className="shade dark-when-small">500</span>
                           <span className="hex dark-when-small">#9e9e9e</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#fafafa" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#fafafa</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#f5f5f5" }}>
                           <span className="shade">100</span>
                           <span className="hex">#f5f5f5</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#eeeeee" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#eeeeee</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#e0e0e0" }}>
                           <span className="shade">300</span>
                           <span className="hex">#e0e0e0</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#bdbdbd" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#bdbdbd</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#9e9e9e" }}>
                           <span className="shade">500</span>
                           <span className="hex">#9e9e9e</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#757575" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#757575</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#616161" }}>
                           <span className="shade">700</span>
                           <span className="hex">#616161</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#424242" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#424242</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#212121" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#212121</span>
                        </li>
                     </ul>
                  </Col>

                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color main-color" style={{ "backgroundColor": "#607d8b" }}>
                           <span className="name light-strong">Blue Grey</span>
                           <span className="shade light-strong">500</span>
                           <span className="hex light-strong">#607d8b</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#eceff1" }}>
                           <span className="shade expanded">50</span>
                           <span className="hex">#eceff1</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#cfd8dc" }}>
                           <span className="shade">100</span>
                           <span className="hex">#cfd8dc</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#b0bec5" }}>
                           <span className="shade expanded">200</span>
                           <span className="hex">#b0bec5</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#90a4ae" }}>
                           <span className="shade">300</span>
                           <span className="hex">#90a4ae</span>
                        </li>
                        <li className="color light-strong" style={{ "backgroundColor": "#78909c" }}>
                           <span className="shade expanded">400</span>
                           <span className="hex">#78909c</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#607d8b" }}>
                           <span className="shade">500</span>
                           <span className="hex">#607d8b</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#546e7a" }}>
                           <span className="shade expanded">600</span>
                           <span className="hex">#546e7a</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#455a64" }}>
                           <span className="shade">700</span>
                           <span className="hex">#455a64</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#37474f" }}>
                           <span className="shade expanded">800</span>
                           <span className="hex">#37474f</span>
                        </li>
                        <li className="color" style={{ "backgroundColor": "#263238" }}>
                           <span className="shade expanded">900</span>
                           <span className="hex">#263238</span>
                        </li>
                     </ul>
                  </Col>

                  <Col sm={4} className="color-group mb-3">
                     <ul className="pl-0">
                        <li className="color" style={{ "backgroundColor": "#000000" }}>
                           <span className="shade accent">Black</span>
                           <span className="hex">#000000</span>
                        </li>
                        <li className="color dark" style={{ "backgroundColor": "#ffffff" }}>
                           <span className="shade accent expanded">White</span>
                           <span className="hex">#ffffff</span>
                        </li>
                     </ul>
                  </Col>
                  <div className="module-end" />
               </Row>
            </section>
            <section className="color-palette" id="gradient-color">
               <Row>
                  <Col className="sm-12">
                     <div className="content-header mb-3">Gradient Color Palette</div>
                  </Col>
               </Row>
               <Row>
                  <Col className="py-4 text-center gradient-strawberry m-1 white font-medium-2 text-bold-400">
                     .gradient-strawberry
                  </Col>
                  <Col className="py-4 text-center gradient-blueberry m-1 white font-medium-2 text-bold-400">
                     .gradient-blueberry
                  </Col>
                  <Col className="py-4 text-center gradient-mint m-1 white font-medium-2 text-bold-400">
                     .gradient-mint
                  </Col>
                  <Col className="py-4 text-center gradient-orange m-1 white font-medium-2 text-bold-400">
                     .gradient-orange
                  </Col>
                  <Col className="py-4 text-center gradient-pomegranate m-1 white font-medium-2 text-bold-400">
                     .gradient-pomegranate
                  </Col>
               </Row>
               <Row>
                  <Col className="py-4 text-center gradient-green-tea m-1 white font-medium-2 text-bold-400">
                     .gradient-green-tea
                  </Col>
                  <Col className="py-4 text-center gradient-blackberry m-1 white font-medium-2 text-bold-400">
                     .gradient-blackberry
                  </Col>
                  <Col className="py-4 text-center gradient-plum m-1 white font-medium-2 text-bold-400">
                     .gradient-plum
                  </Col>
                  <Col className="py-4 text-center gradient-passion-fruit m-1 white font-medium-2 text-bold-400">
                     .gradient-passion-fruit
                  </Col>
                  <Col className="py-4 text-center gradient-sublime-vivid m-1 white font-medium-2 text-bold-400">
                     .gradient-sublime-vivid
                  </Col>
               </Row>
               <Row>
                  <Col className="py-4 text-center gradient-king-yna m-1 white font-medium-2 text-bold-400">
                     .gradient-king-yna
                  </Col>
                  <Col className="py-4 text-center gradient-summer m-1 white font-medium-2 text-bold-400">
                     .gradient-summer
                  </Col>
                  <Col className="py-4 text-center gradient-crystal-clear m-1 white font-medium-2 text-bold-400">
                     .gradient-crystal-clear
                  </Col>
                  <Col className="py-4 text-center gradient-celestial m-1 white font-medium-2 text-bold-400">
                     .gradient-celestial
                  </Col>
                  <Col className="py-4 text-center gradient-mini m-1 white font-medium-2 text-bold-400">
                     .gradient-mini
                  </Col>
               </Row>
               <Row>
                  <Col className="py-4 text-center gradient-ibiza-sunset m-1 white font-medium-2 text-bold-400">
                     .gradient-ibiza-sunset
                  </Col>
                  <Col className="py-4 text-center gradient-dawn m-1 white font-medium-2 text-bold-400">
                     .gradient-dawn
                  </Col>
                  <Col className="py-4 text-center gradient-brady-brady-fun-fun m-1 white font-medium-2 text-bold-400">
                     .gradient-brady-brady-fun-fun
                  </Col>
                  <Col className="py-4 text-center gradient-cosmic-fusion m-1 white font-medium-2 text-bold-400">
                     .gradient-cosmic-fusion
                  </Col>
                  <Col className="py-4 text-center gradient-nepal m-1 white font-medium-2 text-bold-400">
                     .gradient-nepal
                  </Col>
               </Row>
               <Row>
                  <Col className="py-4 text-center gradient-love-couple m-1 white font-medium-2 text-bold-400">
                     .gradient-love-couple
                  </Col>
                  <Col className="py-4 text-center gradient-sunset m-1 white font-medium-2 text-bold-400">
                     .gradient-sunset
                  </Col>
                  <Col className="py-4 text-center gradient-grapefruit-sunset m-1 white font-medium-2 text-bold-400">
                     .gradient-grapefruit-sunset
                  </Col>
                  <Col className="py-4 text-center gradient-politics m-1 white font-medium-2 text-bold-400">
                     .gradient-politics
                  </Col>
                  <Col className="py-4 text-center gradient-red-ocean m-1 white font-medium-2 text-bold-400">
                     .gradient-red-ocean
                  </Col>
               </Row>
               <Row>
                  <Col className="py-4 text-center gradient-back-to-earth m-1 white font-medium-2 text-bold-400">
                     .gradient-back-to-earth
                  </Col>
                  <Col className="py-4 text-center gradient-flickr m-1 white font-medium-2 text-bold-400">
                     .gradient-flickr
                  </Col>
                  <Col className="py-4 text-center gradient-virgin-america m-1 white font-medium-2 text-bold-400">
                     .gradient-virgin-america
                  </Col>
                  <Col className="py-4 text-center gradient-purple-bliss m-1 white font-medium-2 text-bold-400">
                     .gradient-purple-bliss
                  </Col>
                  <Col className="py-4 text-center gradient-man-of-steel m-1 white font-medium-2 text-bold-400">
                     .gradient-man-of-steel
                  </Col>
               </Row>
               <Row>
                  <Col className="py-4 text-center gradient-shdow-night m-1 white font-medium-2 text-bold-400">
                     .gradient-shdow-night
                  </Col>
                  <Col className="py-4 text-center gradient-dracula m-1 white font-medium-2 text-bold-400">
                     .gradient-dracula
                  </Col>
                  <Col className="py-4 text-center gradient-bloody-mary m-1 white font-medium-2 text-bold-400">
                     .gradient-bloody-mary
                  </Col>
                  <Col className="py-4 text-center gradient-harmonic-energy m-1 white font-medium-2 text-bold-400">
                     .gradient-harmonic-energy
                  </Col>
                  <Col className="py-4 text-center gradient-purple-love m-1 white font-medium-2 text-bold-400">
                     .gradient-purple-love
                  </Col>
               </Row>
               <Row>
                  <Col className="py-4 text-center gradient-indigo-light-blue m-1 font-medium-2 text-bold-400">
                     .gradient-indigo-light-blue
                  </Col>
                  <Col className="py-4 text-center gradient-light-blue-indigo m-1 font-medium-2 text-bold-400">
                     .gradient-light-blue-indigo
                  </Col>
                  <Col className="py-4 text-center gradient-yellow-green m-1 font-medium-2 text-bold-400">
                     .gradient-yellow-green
                  </Col>
                  <Col className="py-4 text-center gradient-orange-deep-orange m-1 font-medium-2 text-bold-400">
                     .gradient-orange-deep-orange
                  </Col>
                  <Col className="py-4 text-center gradient-deep-purple-purple m-1 font-medium-2 text-bold-400">
                     .gradient-deep-purple-purple
                  </Col>
               </Row>
               <Row>
                  <Col className="py-4 text-center gradient-red-pink m-1 white font-medium-2 text-bold-400">
                     .gradient-red-pink
                  </Col>
                  <Col className="py-4 text-center gradient-light-green-amber m-1 font-medium-2 text-bold-400">
                     .gradient-light-green-amber
                  </Col>
                  <Col className="py-4 text-center gradient-amber-amber m-1 white font-medium-2 text-bold-400">
                     .gradient-amber-amber
                  </Col>
                  <Col className="py-4 text-center gradient-purple-pink m-1 font-medium-2 text-bold-400">
                     .gradient-purple-pink
                  </Col>
                  <Col className="py-4 text-center gradient-indigo-dark-blue m-1 white font-medium-2 text-bold-400">
                     .gradient-indigo-dark-blue
                  </Col>
               </Row>
               <Row>
                  <Col className="py-4 text-center gradient-teal-cyan m-1 font-medium-2 text-bold-400">
                     .gradient-teal-cyan
                  </Col>
                  <Col className="py-4 text-center gradient-blue-grey-blue-grey m-1 white font-medium-2 text-bold-400">
                     .gradient-blue-grey-blue-grey
                  </Col>
                  <Col className="py-4 text-center gradient-cyan-dark-green m-1 white font-medium-2 text-bold-400">
                     .gradient-cyan-dark-green
                  </Col>
                  <Col className="py-4 text-center gradient-orange-amber m-1 white font-medium-2 text-bold-400">
                     .gradient-orange-amber
                  </Col>
                  <Col className="py-4 text-center gradient-indigo-blue m-1 white font-medium-2 text-bold-400">
                     .gradient-indigo-blue
                  </Col>
               </Row>
               <Row>
                  <Col className="py-4 text-center gradient-brown-brown m-1 white font-medium-2 text-bold-400">
                     .gradient-brown-brown
                  </Col>
                  <Col className="py-4 text-center gradient-blue-grey-blue m-1 white font-medium-2 text-bold-400">
                     .gradient-blue-grey-blue
                  </Col>
                  <Col className="py-4 text-center gradient-purple-deep-orange m-1 white font-medium-2 text-bold-400">
                     .gradient-purple-deep-orange
                  </Col>
                  <Col className="py-4 text-center gradient-green-teal m-1 white font-medium-2 text-bold-400">
                     .gradient-green-teal
                  </Col>
                  <Col className="py-4 text-center gradient-purple-light-blue m-1 white font-medium-2 text-bold-400">
                     .gradient-purple-light-blue
                  </Col>
               </Row>
               <Row>
                  <Col className="py-4 text-center gradient-cyan-cyan m-1 font-medium-2 text-bold-400">
                     .gradient-cyan-cyan
                  </Col>
                  <Col className="py-4 text-center gradient-yellow-teal m-1 font-medium-2 text-bold-400">
                     .gradient-yellow-teal
                  </Col>
                  <Col className="py-4 text-center gradient-purple-deep-purple m-1 white font-medium-2 text-bold-400">
                     .gradient-purple-deep-purple
                  </Col>
                  <Col className="py-4 text-center gradient-cyan-light-green m-1 font-medium-2 text-bold-400">
                     .gradient-cyan-light-green
                  </Col>
                  <Col className="py-4 text-center gradient-purple-amber m-1 white font-medium-2 text-bold-400">
                     .gradient-purple-amber
                  </Col>
               </Row>
               <Row>
                  <Col className="py-4 text-center gradient-indigo-purple m-1 white font-medium-2 text-bold-400">
                     .gradient-indigo-purple
                  </Col>
                  <Col className="py-4 text-center gradient-deep-purple-blue m-1 white font-medium-2 text-bold-400">
                     .gradient-deep-purple-blue
                  </Col>
                  <Col className="py-4 text-center gradient-deep-orange-orange m-1 white font-medium-2 text-bold-400">
                     .gradient-deep-orange-orange
                  </Col>
                  <Col className="py-4 text-center gradient-light-blue-cyan m-1 white font-medium-2 text-bold-400">
                     .gradient-light-blue-cyan
                  </Col>
                  <Col className="py-4 text-center gradient-blue-indigo m-1 white font-medium-2 text-bold-400">
                     .gradient-blue-indigo
                  </Col>
               </Row>
            </section>
         </Fragment>
      );
   }
}

export default ColorPallete;
