import React, { Component, Fragment } from "react";
import ContentHeader from "../../components/contentHead/contentHeader";
import { Table, Card, CardBody, CardTitle, Row, Col } from "reactstrap";

class TypoGraphy extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Typography </ContentHeader>
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>
                           Customizing headings
                           <small className="text-muted ml-2">Default</small>
                        </CardTitle>
                        <p>
                           Use the included utility classes to recreate the
                           small secondary heading text.
                        </p>
                        <Table borderless responsive>
                           <tbody>
                              <tr>
                                 <td>
                                    <h1>
                                       Display heading <small className="text-muted ml-2">
                                          Secondary text
                                       </small>
                                    </h1>
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <h2>
                                       Display heading <small className="text-muted ml-2">
                                          Secondary text
                                       </small>
                                    </h2>
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <h3>
                                       Display heading <small className="text-muted ml-2">
                                          Secondary text
                                       </small>
                                    </h3>
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <h4>
                                       Display heading <small className="text-muted ml-2">
                                          Secondary text
                                       </small>
                                    </h4>
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <h5>
                                       Display heading <small className="text-muted ml-2">
                                          Secondary text
                                       </small>
                                    </h5>
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <h6>
                                       Display heading <small className="text-muted ml-2">
                                          Secondary text
                                       </small>
                                    </h6>
                                 </td>
                              </tr>
                           </tbody>
                        </Table>
                     </CardBody>
                  </Card>
               </Col>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>
                           Customizing headings
                           <small className="text-muted ml-2">Default</small>
                        </CardTitle>
                        <p>
                           Traditional heading elements are designed to work
                           best in the meat of your page content. When you need
                           a heading to stand out, consider using a <strong>display heading</strong>
                           —a larger, slightly more opinionated heading style.
                        </p>
                        <Table borderless responsive>
                           <tbody>
                              <tr>
                                 <td>
                                    <h1 className="primary">Display heading</h1>
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <h2 className="success">Display heading</h2>
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <h3 className="info">Display heading</h3>
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <h4 className="warning">Display heading</h4>
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <h5 className="danger">Display heading</h5>
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <h6 className="">Display heading</h6>
                                 </td>
                              </tr>
                           </tbody>
                        </Table>
                     </CardBody>
                  </Card>
               </Col>
            </Row>
            <Row className="row-eq-height">
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>
                           HTML headings
                           <small className="text-muted ml-2">Default</small>
                        </CardTitle>
                        <p>
                           All HTML headings,
                           <code className="highlighter-rouge">&lt;h1&gt;</code>
                           through
                           <code className="highlighter-rouge">&lt;h6&gt;</code>
                           ,are available.
                        </p>
                        <Table borderless>
                           <tbody>
                              <tr>
                                 <td>
                                    <h1>H1. Heading</h1>
                                 </td>
                                 <td className="type-info text-right">
                                    Semibold 2rem
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <h2>H2. Heading</h2>
                                 </td>
                                 <td className="type-info text-right">
                                    Semibold 1.74rem
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <h3>H3. Heading</h3>
                                 </td>
                                 <td className="type-info text-right">
                                    Semibold 1.51rem
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <h4>H4. Heading</h4>
                                 </td>
                                 <td className="type-info text-right">
                                    Semibold 1.32rem
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <h5>H5. Heading</h5>
                                 </td>
                                 <td className="type-info text-right">
                                    Semibold 1.14rem
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <h6>H6. Heading</h6>
                                 </td>
                                 <td className="type-info text-right">
                                    Semibold 1rem
                                 </td>
                              </tr>
                           </tbody>
                        </Table>
                     </CardBody>
                  </Card>
               </Col>
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>Heading class</CardTitle>
                        <p>
                           <code className="highlighter-rouge">.h1</code> through <code className="highlighter-rouge">.h6</code> classes are also available, for when you want to
                           match the font styling of a heading but cannot use
                           the associated HTML element.
                        </p>
                        <Table borderless>
                           <tbody>
                              <tr>
                                 <td>
                                    <p className="h1">H1. Heading</p>
                                 </td>
                                 <td className="type-info text-right">
                                    Semibold 2rem
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <p className="h2">H2. Heading</p>
                                 </td>
                                 <td className="type-info text-right">
                                    Semibold 1.74rem
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <p className="h3">H3. Heading</p>
                                 </td>
                                 <td className="type-info text-right">
                                    Semibold 1.51rem
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <p className="h4">H4. Heading</p>
                                 </td>
                                 <td className="type-info text-right">
                                    Semibold 1.32rem
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <p className="h5">H5. Heading</p>
                                 </td>
                                 <td className="type-info text-right">
                                    Semibold 1.14rem
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <p className="h6">H6. Heading</p>
                                 </td>
                                 <td className="type-info text-right">
                                    Semibold 1rem
                                 </td>
                              </tr>
                           </tbody>
                        </Table>
                     </CardBody>
                  </Card>
               </Col>
            </Row>
            <Row>
               <Col sm="12">
                  <h4 className="title">Blockquotes</h4>
                  <p>
                     For quoting blocks of content from another source within
                     your document. Wrap
                     <code className="highlighter-rouge">
                        &lt;blockquote className="blockquote"&gt;
                     </code>
                     around any
                     <abbr title="HyperText Markup Language">HTML</abbr> as the
                     quote.
                  </p>
               </Col>
            </Row>

            <Row className="row-eq-height">
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>
                           Blockquotes
                           <small className="text-muted ml-2">Default</small>
                        </CardTitle>
                        <p>Left aligned basic blockquotes</p>
                        <blockquote className="blockquote">
                           <p className="mb-0">
                              Design is not just what it looks like and feels
                              like. Design is how it works.
                           </p>
                        </blockquote>
                     </CardBody>
                  </Card>
               </Col>
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>
                           Blockquotes
                           <small className="text-muted ml-2">Right</small>
                        </CardTitle>
                        <p>
                           Add <code className="highlighter-rouge">
                              .blockquote-reverse
                           </code> for a blockquote with right-aligned content.
                        </p>
                        <blockquote className="blockquote-reverse">
                           <p className="mb-0">
                              Design is not just what it looks like and feels
                              like. Design is how it works.
                           </p>
                        </blockquote>
                     </CardBody>
                  </Card>
               </Col>
            </Row>

            <Row className="row-eq-height">
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>
                           Naming a source
                           <small className="text-muted ml-2">Default</small>
                        </CardTitle>
                        <p>
                           Add a <code className="highlighter-rouge">
                              &lt;footer className="blockquote-footer"&gt;
                           </code> for identifying the source. Wrap the name of the
                           source work in <code className="highlighter-rouge">&lt;cite&gt;</code>.
                        </p>
                        <blockquote className="blockquote">
                           <p>
                              Being the richest man in the cemetery doesn't
                              matter to me. Going to bed at night saying we've
                              done something wonderful, that's what matters to
                              me.
                           </p>
                           <div className="blockquote-footer pl-0 pt-1">
                              Steve Jobs
                              <cite title="Source Title">Entrepreneur</cite>
                           </div>
                        </blockquote>
                     </CardBody>
                  </Card>
               </Col>
               <Col sm="12" md="6">
                  <Card>
                     <CardBody>
                        <CardTitle>
                           Naming a source
                           <small className="text-muted ml-2">Right</small>
                        </CardTitle>
                        <p>
                           Add a <code className="highlighter-rouge">
                              &lt;footer className="blockquote-footer"&gt;
                           </code> for identifying the source with <code className="highlighter-rouge">
                              .blockquote-reverse
                           </code> for a blockquote with right-aligned content.
                        </p>
                        <blockquote className="blockquote-reverse">
                           <p>
                              Being the richest man in the cemetery doesn't
                              matter to me. Going to bed at night saying we've
                              done something wonderful, that's what matters to
                              me.
                           </p>
                           <div className="blockquote-footer pt-1">
                              Steve Jobs
                              <cite title="Source Title">Entrepreneur</cite>
                           </div>
                        </blockquote>
                     </CardBody>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col sm="12">
                  <h4 className="title">Lists</h4>
                  <p>Remove the default <code className="highlighter-rouge">list-style</code> and left margin on list items (immediate children only). <strong>This only applies to immediate children list items</strong>, meaning you will need to add the class for any nested lists as well.</p>
               </Col>
            </Row>

            <Row className="row-eq-height">
               <Col sm="12" md="4">
                  <Card>
                     <CardBody>
                        <CardTitle>Lists Unstyled</CardTitle>
                        <p>
                           Use class <code>.list-unstyled</code> for Lists
                           Unstyled. It remove the default <code className="highlighter-rouge">list-style</code> and
                           left margin on list items (immediate children only). <strong>
                              This only applies to immediate children list items
                           </strong>
                           , meaning you will need to add the class for any
                           nested lists as well.
                        </p>
                        <ul className="list-unstyled">
                           <li>Lorem ipsum dolor sit amet</li>
                           <li>Consectetur adipiscing elit</li>
                           <li>Integer molestie lorem at massa</li>
                           <li>Facilisis in pretium nisl aliquet</li>
                           <li>
                              Nulla volutpat aliquam velit
                              <ul>
                                 <li>Phasellus iaculis neque</li>
                                 <li>Purus sodales ultricies</li>
                                 <li>Vestibulum laoreet porttitor sem</li>
                                 <li>Ac tristique libero volutpat at</li>
                              </ul>
                           </li>
                           <li>Faucibus porta lacus fringilla vel</li>
                           <li>Aenean sit amet erat nunc</li>
                           <li>Eget porttitor lorem</li>
                        </ul>
                     </CardBody>
                  </Card>
               </Col>
               <Col sm="12" md="4">
                  <Card>
                     <CardBody>
                        <CardTitle>
                           Lists Unordered
                           <small className="text-muted ml-2">Default</small>
                        </CardTitle>
                        <p>
                           List of items in which the order does not explicitly
                           matter.
                        </p>
                        <ul>
                           <li>Lorem ipsum dolor sit amet</li>
                           <li>Consectetur adipiscing elit</li>
                           <li>Integer molestie lorem at massa</li>
                           <li>Facilisis in pretium nisl aliquet</li>
                           <li>
                              Nulla volutpat aliquam velit
                              <ul>
                                 <li>Phasellus iaculis neque</li>
                                 <li>Purus sodales ultricies</li>
                                 <li>Vestibulum laoreet porttitor sem</li>
                                 <li>Ac tristique libero volutpat at</li>
                              </ul>
                           </li>
                           <li>Faucibus porta lacus fringilla vel</li>
                           <li>Aenean sit amet erat nunc</li>
                           <li>Eget porttitor lorem</li>
                        </ul>
                     </CardBody>
                  </Card>
               </Col>
               <Col sm="12" md="4">
                  <Card>
                     <CardBody>
                        <CardTitle>
                           Lists Ordered
                           <small className="text-muted ml-2">Default</small>
                        </CardTitle>
                        <p>
                           List of items in which the order does explicitly
                           matter.
                        </p>
                        <ol>
                           <li>Lorem ipsum dolor sit amet</li>
                           <li>Consectetur adipiscing elit</li>
                           <li>Integer molestie lorem at massa</li>
                           <li>Facilisis in pretium nisl aliquet</li>
                           <li>
                              Nulla volutpat aliquam velit
                              <ol>
                                 <li>Phasellus iaculis neque</li>
                                 <li>Purus sodales ultricies</li>
                                 <li>Vestibulum laoreet porttitor sem</li>
                                 <li>Ac tristique libero volutpat at</li>
                              </ol>
                           </li>
                           <li>Faucibus porta lacus fringilla vel</li>
                           <li>Aenean sit amet erat nunc</li>
                           <li>Eget porttitor lorem</li>
                        </ol>
                     </CardBody>
                  </Card>
               </Col>
            </Row>
         </Fragment>
      );
   }
}

export default TypoGraphy;
