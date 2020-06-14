import React, { Component, Fragment } from "react";
import ContentHeader from "../../components/contentHead/contentHeader";
import { Table, Card, CardBody, CardTitle, Row, Col } from "reactstrap";

//Prism
// eslint-disable-next-line
import Prism from "prismjs"; //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

class TextUtility extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Text Utilities </ContentHeader>
            {/* Contextual color */}
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Contextual colors</CardTitle>
                        <p>
                           Convey meaning through color with a handful of
                           emphasis utility classes. These may also be applied
                           to links and will darken on hover just like our
                           default link styles.
                        </p>
                     </CardBody>
                     <Table responsive>
                        <thead>
                           <tr>
                              <th>Example</th>
                              <th>Classes</th>
                              <th>Snippet</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 <p className="text-muted">
                                    Fusce dapibus, tellus ac cursus commodo,
                                    tortor mauris nibh.
                                 </p>
                              </td>
                              <td>
                                 <code>.text-muted</code>
                              </td>
                              <td>
                                 <PrismCode
                                    component="pre"
                                    className="language-markup"
                                 >
                                    &lt;p className="text-muted"&gt;Your
                                    Text.&lt;/p&gt;
                                 </PrismCode>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="text-primary">
                                    Nullam id dolor id nibh ultricies vehicula
                                    ut id elit.
                                 </p>
                              </td>
                              <td>
                                 <code>.text-primary</code>
                              </td>
                              <td>
                                 <PrismCode
                                    component="pre"
                                    className="language-markup"
                                 >
                                    &lt;p className="text-primary"&gt;Your
                                    Text.&lt;/p&gt;
                                 </PrismCode>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="text-success">
                                    Duis mollis, est non commodo luctus, nisi
                                    erat porttitor ligula.
                                 </p>
                              </td>
                              <td>
                                 <code>.text-success</code>
                              </td>
                              <td>
                                 <PrismCode
                                    component="pre"
                                    className="language-markup"
                                 >
                                    &lt;p className="text-success"&gt;Your
                                    Text.&lt;/p&gt;
                                 </PrismCode>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="text-info">
                                    Maecenas sed diam eget risus varius blandit
                                    sit amet non magna.
                                 </p>
                              </td>
                              <td>
                                 <code>.text-info</code>
                              </td>
                              <td>
                                 <PrismCode
                                    component="pre"
                                    className="language-markup"
                                 >
                                    &lt;p className="text-info"&gt;Your
                                    Text.&lt;/p&gt;
                                 </PrismCode>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="text-warning">
                                    Fusce dapibus, tellus ac cursus commodo,
                                    tortor mauris nibh.
                                 </p>
                              </td>
                              <td>
                                 <code>.text-warning</code>
                              </td>
                              <td>
                                 <PrismCode
                                    component="pre"
                                    className="language-markup"
                                 >
                                    &lt;p className="text-warning"&gt;Your
                                    Text.&lt;/p&gt;
                                 </PrismCode>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="text-danger">
                                    Donec ullamcorper nulla non metus auctor
                                    fringilla.
                                 </p>
                              </td>
                              <td>
                                 <code>.text-danger</code>
                              </td>
                              <td>
                                 <PrismCode
                                    component="pre"
                                    className="language-markup"
                                 >
                                    &lt;p className="text-danger"&gt;Your
                                    Text.&lt;/p&gt;
                                 </PrismCode>
                              </td>
                           </tr>
                        </tbody>
                     </Table>
                     <CardBody>
                        <p>
                           APEX React Admin also provide custom
                           <a href="link" target="_blank">
                              color palette
                           </a>
                           for the text, below table show you usage.
                        </p>
                        <p>
                           You can also use text lighten, darken and accent
                           classes.
                        </p>
                        <ul>
                           <li>
                              <code>li.red .lighten-*</code> For lighten red
                              text color, this two classes needed. Here *:
                              1,2,3,4 for lighten red color options.
                           </li>
                           <li>
                              <code>.red .darken-*</code> For darken red text
                              color, this two classes needed. Here *: 1,2,3,4
                              for darken red color options.
                           </li>
                           <li>
                              <code>.red .accent-*</code> For accent red text
                              color, this two classes needed. Here *: 1,2,3,4
                              for accent red color options.
                           </li>
                        </ul>
                     </CardBody>
                     <Table responsive>
                        <thead>
                           <tr>
                              <th>Example</th>
                              <th>Classes</th>
                              <th>Snippet</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 <p className="red">
                                    Fusce dapibus, tellus ac cursus commodo,
                                    tortor mauris nibh.
                                 </p>
                              </td>
                              <td>
                                 <code>.red</code>
                              </td>
                              <td>
                                 <PrismCode
                                    component="pre"
                                    className="language-markup"
                                 >
                                    &lt;p className="red"&gt;Your
                                    Text.&lt;/p&gt;
                                 </PrismCode>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="purple">
                                    Nullam id dolor id nibh ultricies vehicula
                                    ut id elit.
                                 </p>
                              </td>
                              <td>
                                 <code>.purple</code>
                              </td>
                              <td>
                                 <PrismCode
                                    component="pre"
                                    className="language-markup"
                                 >
                                    &lt;p className="purple"&gt;Your
                                    Text.&lt;/p&gt;
                                 </PrismCode>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="cyan">
                                    Duis mollis, est non commodo luctus, nisi
                                    erat porttitor ligula.
                                 </p>
                              </td>
                              <td>
                                 <code>.cyan</code>
                              </td>
                              <td>
                                 <PrismCode
                                    component="pre"
                                    className="language-markup"
                                 >
                                    &lt;p className="cyan"&gt;Your
                                    Text.&lt;/p&gt;
                                 </PrismCode>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="blue">
                                    Maecenas sed diam eget risus varius blandit
                                    sit amet non magna.
                                 </p>
                              </td>
                              <td>
                                 <code>.blue</code>
                              </td>
                              <td>
                                 <PrismCode
                                    component="pre"
                                    className="language-markup"
                                 >
                                    &lt;p className="blue"&gt;Your
                                    Text.&lt;/p&gt;
                                 </PrismCode>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="teal">
                                    Fusce dapibus, tellus ac cursus commodo,
                                    tortor mauris nibh.
                                 </p>
                              </td>
                              <td>
                                 <code>.teal</code>
                              </td>
                              <td>
                                 <PrismCode
                                    component="pre"
                                    className="language-markup"
                                 >
                                    &lt;p className="teal"&gt;Your
                                    Text.&lt;/p&gt;
                                 </PrismCode>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="blue-grey">
                                    Donec ullamcorper nulla non metus auctor
                                    fringilla.
                                 </p>
                              </td>
                              <td>
                                 <code>.blue-grey</code>
                              </td>
                              <td>
                                 <PrismCode
                                    component="pre"
                                    className="language-markup"
                                 >
                                    &lt;p className="blue-grey"&gt;Your
                                    Text.&lt;/p&gt;
                                 </PrismCode>
                              </td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card>
               </Col>
            </Row>
            {/* Contextual background */}
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Contextual background</CardTitle>
                        <p>
                           Contextual text color classes, easily set the
                           background of an element to any contextual class.
                           Anchor components will darken on hover, just like the
                           text classes.
                        </p>
                     </CardBody>
                     <Table responsive>
                        <thead>
                           <tr>
                              <th>Example</th>
                              <th>Classes</th>
                              <th>Snippet</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 <span className="bg-primary text-highlight white">
                                    Nullam id dolor id nibh ultricies vehicula
                                    ut id elit.
                                 </span>
                              </td>
                              <td>
                                 <code>.bg-primary</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="bg-primary"&gt;Your
                                       Text.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <span className="bg-success text-highlight white">
                                    Duis mollis, est non commodo luctus, nisi
                                    erat porttitor ligula.
                                 </span>
                              </td>
                              <td>
                                 <code>.bg-success</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="bg-success"&gt;Your
                                       Text.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <span className="bg-info text-highlight white">
                                    Maecenas sed diam eget risus varius blandit
                                    sit amet non magna.
                                 </span>
                              </td>
                              <td>
                                 <code>.bg-info</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="bg-info"&gt;Your
                                       Text.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <span className="bg-warning text-highlight white">
                                    Fusce dapibus, tellus ac cursus commodo,
                                    tortor mauris nibh.
                                 </span>
                              </td>
                              <td>
                                 <code>.bg-warning</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="bg-warning"&gt;Your
                                       Text.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <span className="bg-danger text-highlight white">
                                    Donec ullamcorper nulla non metus auctor
                                    fringilla.
                                 </span>
                              </td>
                              <td>
                                 <code>.bg-danger</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="bg-danger"&gt;Your
                                       Text.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <span className="bg-dark text-highlight white">
                                    Fusce dapibus, tellus ac cursus commodo,
                                    tortor mauris nibh.
                                 </span>
                              </td>
                              <td>
                                 <code>.bg-dark</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="bg-dark"&gt;Your
                                       Text.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                        </tbody>
                     </Table>
                     <CardBody>
                        <p>
                           APEX Admin also provide custom{" "}
                           <a href="link" target="_blank">
                              color palette
                           </a>{" "}
                           for the background colors, below table show you
                           usage.
                        </p>
                        <p>
                           You can also use background lighten, darken and
                           accent classes.
                        </p>
                        <ul>
                           <li>
                              <code>.bg-red .bg-lighten-*</code> For lighten red
                              text color, this two classes needed. Here *:
                              1,2,3,4 for lighten red color options.
                           </li>
                           <li>
                              <code>.bg-red .bg-darken-*</code> For darken red
                              text color, this two classes needed. Here *:
                              1,2,3,4 for darken red color options.
                           </li>
                           <li>
                              <code>.bg-red .bg-accent-*</code> For accent red
                              text color, this two classes needed. Here *:
                              1,2,3,4 for accent red color options.
                           </li>
                        </ul>
                     </CardBody>
                     <Table responsive>
                        <thead>
                           <tr>
                              <th>Example</th>
                              <th>Classes</th>
                              <th>Snippet</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 <span className="bg-red bg-dark text-highlight white">
                                    {" "}
                                    Fusce dapibus, tellus ac cursus commodo.
                                 </span>
                              </td>
                              <td>
                                 <code>.bg-red</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="bg-red bg-dark"&gt;Your
                                       Text.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <span className="bg-purple bg-dark text-highlight white">
                                    {" "}
                                    Nullam id dolor id nibh ultricies.
                                 </span>
                              </td>
                              <td>
                                 <code>.purple</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="bg-purple
                                       bg-dark"&gt;Your Text.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <span className="bg-cyan bg-dark text-highlight white">
                                    {" "}
                                    Duis mollis, est non commodo luctus, nisi
                                    erat.
                                 </span>
                              </td>
                              <td>
                                 <code>.bg-cyan</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="bg-cyan bg-dark"&gt;Your
                                       Text.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <span className="bg-blue bg-dark text-highlight white">
                                    {" "}
                                    Maecenas sed diam eget risus varius blandit
                                    sit.
                                 </span>
                              </td>
                              <td>
                                 <code>.bg-blue</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="bg-blue bg-dark"&gt;Your
                                       Text.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <span className="bg-teal bg-dark text-highlight white">
                                    {" "}
                                    Fusce dapibus, tellus ac cursus commodo.
                                 </span>
                              </td>
                              <td>
                                 <code>.bg-teal</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="bg-teal bg-dark"&gt;Your
                                       Text.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <span className="bg-blue-grey bg-dark text-highlight white">
                                    {" "}
                                    Donec ullamcorper nulla non metus.
                                 </span>
                              </td>
                              <td>
                                 <code>.blue-grey</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="blue-grey
                                       bg-dark"&gt;Your Text.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card>
               </Col>
            </Row>
            {/* Text alignment */}
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Text alignment</CardTitle>
                        <p>
                           Easily realign text to components with text alignment
                           classes.
                        </p>
                     </CardBody>
                     <Table responsive>
                        <thead>
                           <tr>
                              <th>Example</th>
                              <th>Classes</th>
                              <th>Snippet</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 <p className="text-justify">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s.
                                 </p>
                              </td>
                              <td>
                                 <code>.text-justify</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p
                                       className="text-justify"&gt;Justified
                                       text.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="text-nowrap">
                                    It is a long established fact that a reader.
                                 </p>
                              </td>
                              <td>
                                 <code>.text-nowrap</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code className="language-markup">
                                       &lt;p className="text-nowrap"&gt;No wrap
                                       text.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card>
               </Col>
            </Row>
            {/* Text transform */}
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Text transform</CardTitle>
                        <p>
                           Transform text in components with text capitalization
                           classes.
                        </p>
                        <p>
                           Note how{" "}
                           <code className="highlighter-rouge">
                              text-capitalize
                           </code>{" "}
                           only changes the first letter of each word, leaving
                           the case of any other letters unaffected.
                        </p>
                     </CardBody>
                     <Table responsive>
                        <thead>
                           <tr>
                              <th>Example</th>
                              <th>Classes</th>
                              <th>Snippet</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 <p className="text-lowercase">
                                    Lowercased text.
                                 </p>
                              </td>
                              <td>
                                 <code>.text-lowercase</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p
                                       className="text-lowercase"&gt;Lowercased
                                       text.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="text-uppercase">
                                    Uppercased text.
                                 </p>
                              </td>
                              <td>
                                 <code>.text-uppercase</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code className="language-markup">
                                       &lt;p
                                       className="text-uppercase"&gt;Uppercased
                                       text.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="text-capitalize">
                                    CapiTaliZed text.
                                 </p>
                              </td>
                              <td>
                                 <code>.text-capitalize</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code className="language-markup">
                                       &lt;p
                                       className="text-capitalize"&gt;CapiTaliZed
                                       text.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card>
               </Col>
            </Row>
            {/* Text Option */}
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Text Option</CardTitle>
                        <p>
                           APEX Admin provide font large & small sizes variant
                           classes to change font size.
                        </p>
                        <p>
                           Note how{" "}
                           <code className="highlighter-rouge">
                              text-capitalize
                           </code>{" "}
                           only changes the first letter of each word, leaving
                           the case of any other letters unaffected.
                        </p>
                     </CardBody>
                     <Table responsive>
                        <thead>
                           <tr>
                              <th>Example</th>
                              <th>Classes</th>
                              <th>Snippet</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 <p className="font-large-3">Large lg text size.</p>
                              </td>
                              <td>
                                 <code>.font-large-3</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="font-large-3" &gt;Large lg
                                       text size.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="font-large-2">Large lg text size.</p>
                              </td>
                              <td>
                                 <code>.font-large-2</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="font-large-2" &gt;Large lg
                                       text size.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="font-large-1">Large lg text size.</p>
                              </td>
                              <td>
                                 <code>.font-large-1</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="font-large-1" &gt;Large lg
                                       text size.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="font-medium-3">
                                    Large md text size.
                                 </p>
                              </td>
                              <td>
                                 <code>.font-medium-3</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="font-medium-3" &gt;Large md
                                       text size.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="font-medium-2">
                                    Large md text size.
                                 </p>
                              </td>
                              <td>
                                 <code>.font-medium-2</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="font-medium-2" &gt;Large md
                                       text size.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="font-medium-1">
                                    Large sm text size.
                                 </p>
                              </td>
                              <td>
                                 <code>.font-medium-1</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="font-medium-1" &gt;Large sm
                                       text size.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>Normal base text size.</p>
                              </td>
                              <td>N/A</td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p&gt;Normal base text size.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="font-small-3">Small lg text size.</p>
                              </td>
                              <td>
                                 <code>.font-small-3</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="font-small-3" &gt;Small lg
                                       text size.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="font-small-2">Small md text size.</p>
                              </td>
                              <td>
                                 <code>.font-small-2</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="font-small-2" &gt;Small md
                                       text size.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="font-small-1">Small sm text size.</p>
                              </td>
                              <td>
                                 <code>.font-small-1</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="font-small-1" &gt;Small sm
                                       text size.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                        </tbody>
                     </Table>

                     <CardBody>
                        <CardTitle>Text Option</CardTitle>
                        <p>
                           APEX Admin provide font large & small sizes variant
                           classes to change font size.
                        </p>
                        <p>
                           Note how{" "}
                           <code className="highlighter-rouge">
                              text-capitalize
                           </code>{" "}
                           only changes the first letter of each word, leaving
                           the case of any other letters unaffected.
                        </p>
                     </CardBody>

                     <CardBody>
                        <CardTitle>Font weight</CardTitle>
                        <p>
                           APEX Admin provide font weight class{" "}
                           <code>
                              .text-bold-
                              [weight]
                           </code>
                           , where{" "}
                           <code>[weight] value can be 100,200 ... 900.</code>
                        </p>
                     </CardBody>
                     <Table responsive>
                        <thead>
                           <tr>
                              <th>Example</th>
                              <th>Classes</th>
                              <th>Snippet</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 <p className="text-bold-300">Font weight 300</p>
                              </td>
                              <td>
                                 <code>.text-bold-300</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="text-bold-300"&gt;Font
                                       weight 300.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="text-bold-400">Font weight 400</p>
                              </td>
                              <td>
                                 <code>.text-bold-400</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="text-bold-400"&gt;Font
                                       weight 400.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="text-bold-600">Font weight 600</p>
                              </td>
                              <td>
                                 <code>.text-bold-600</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="text-bold-600"&gt;Font
                                       weight 600.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p className="text-bold-700">Font weight 700</p>
                              </td>
                              <td>
                                 <code>.text-bold-700</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p className="text-bold-700"&gt;Font
                                       weight 700.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                        </tbody>
                     </Table>

                     <CardBody>
                        <CardTitle>Inline text elements</CardTitle>
                        <p>Styling for common inline HTML5 elements.</p>
                        <p>
                           <code className="highlighter-rouge">.mark</code> and{" "}
                           <code className="highlighter-rouge">.small</code> classes
                           are also available to apply the same styles as{" "}
                           <code className="highlighter-rouge">&lt;mark&gt;</code>{" "}
                           and{" "}
                           <code className="highlighter-rouge">&lt;small&gt;</code>{" "}
                           while avoiding any unwanted semantic implications
                           that the tags would bring.
                        </p>
                     </CardBody>
                     <Table responsive>
                        <thead>
                           <tr>
                              <th>Example</th>
                              <th>Snippet</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 <p>
                                    You can use the mark tag to
                                    <mark>highlight</mark> text.
                                 </p>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p&gt;You can use the mark tag to
                                       &lt;mark&gt;highlight&lt;/mark&gt;
                                       text.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>
                                    <del>
                                       This line of text is meant to be treated
                                       as deleted text.
                                    </del>
                                 </p>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p&gt;&lt;del&gt;This line of text is
                                       meant to be treated as deleted
                                       text.&lt;/del&gt;&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>
                                    <s>
                                       This line of text is meant to be treated
                                       as no longer accurate.
                                    </s>
                                 </p>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p&gt;&lt;s&gt;This line of text is
                                       meant to be treated as no longer
                                       accurate.&lt;/s&gt;&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>
                                    This line of text
                                    <ins>
                                       is meant to be treated as an addition to
                                       the document.
                                    </ins>
                                 </p>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p&gt;&lt;ins&gt;This line of text is
                                       meant to be treated as an addition to the
                                       document.&lt;/ins&gt;&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>
                                    <u>
                                       This line of text will render as
                                       underlined
                                    </u>
                                 </p>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p&gt;&lt;u&gt;This line of text will
                                       render as underlined.&lt;/u&gt;&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>
                                    <small>
                                       This line of text is meant to be treated
                                       as fine print.
                                    </small>
                                 </p>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p&gt;&lt;small&gt;This line of text
                                       is meant to be treated as fine
                                       print.&lt;/small&gt;&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>
                                    <strong>
                                       This line rendered as bold text.
                                    </strong>
                                 </p>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p&gt;&lt;strong&gt;This line rendered
                                       as bold text.&lt;/strong&gt;&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>
                                    <em>
                                       This line rendered as italicized text.
                                    </em>
                                 </p>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p&gt;&lt;em&gt;This line rendered as
                                       italicized text.&lt;/em&gt;&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>
                                    Sample
                                    <abbr
                                       title=""
                                       data-popup="tooltip"
                                       data-original-title="Abbr title"
                                    >
                                       abbreviation
                                    </abbr>
                                 </p>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p&gt; Sample
                                       &lt;abbr&gt;Abbreviations.&lt;/abbr&gt;&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>
                                    Sample
                                    <abbr
                                       title="HyperText Markup Language"
                                       className="initialism"
                                    >
                                       HTML
                                    </abbr>{" "}
                                    title.
                                 </p>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p&gt; Sample &lt;abbr
                                       title="HyperText Markup Language"
                                       className="initialism"&gt;HTML.&lt;/abbr&gt;&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <var>y</var> =<var>m</var>
                                 <var>x</var> +<var>b</var>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p&gt; For indicating variables use
                                       the &lt;var&gt; tag.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <p>
                                    Edit settings, press
                                    <kbd>
                                       <kbd>ctrl</kbd> +<kbd>,</kbd>
                                    </kbd>
                                 </p>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p&gt; Use the &lt;kbd&gt; to indicate
                                       input that is typically entered via
                                       keyboard.&lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <samp>
                                    This text is meant to be treated as sample
                                    output from a computer program.
                                 </samp>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p&gt; For indicating sample output
                                       from a program use the &lt;samp&gt; tag.
                                       &lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <code>Inline code snippet</code>
                              </td>
                              <td>
                                 <pre className="language-markup">
                                    <code>
                                       &lt;p&gt; Wrap inline snippets of code
                                       with &lt;code&gt; tag. &lt;/p&gt;
                                    </code>
                                 </pre>
                              </td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card>
               </Col>
            </Row>
         </Fragment>
      );
   }
}

export default TextUtility;
