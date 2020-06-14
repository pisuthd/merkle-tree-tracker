import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

//Prism
// eslint-disable-next-line
import Prism from "prismjs";  //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

import "../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../assets/scss/views/components/extra/editor.scss";

import CustomTabs from "../../../components/tabs/customTabs";
import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";

// Import examples
import DefaultEditor from "./examples/editorDefault";
import ControlledEditor from "./examples/editorControlled";
import CustomToolbar from "./examples/editorCustomToolbar";
import ImageUpload from "./examples/editorImageUpload";
import WhenFocused from "./examples/editorInline";

// Import Example Source Code
import DefaultEditorSource from "./exampleSource/editorDefault";
import ControlledEditorSource from "./exampleSource/editorControlled";
import CustomToolbarSource from "./exampleSource/editorCustomToolbar";
import ImageUploadSource from "./exampleSource/editorImageUpload";
import WhenFocusedSource from "./exampleSource/editorInline";

class TextEditor extends Component {
   render() {
      return (
         <Fragment>
            <ContentHeader>Editor</ContentHeader>
            <ContentSubHeader>
               <p>A Wysiwyg editor build on top of ReactJS and DraftJS.</p>
               <a href="https://github.com/jpuri/react-draft-wysiwyg" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/github/stars/jpuri/react-draft-wysiwyg.svg?style=social" alt="Stars" />
                  <img src="https://img.shields.io/npm/dm/react-draft-wysiwyg.svg" alt="Downloads"/>
               </a>
            </ContentSubHeader>
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Default Editor</CardTitle>
                        <CustomTabs
                           TabContent1={<DefaultEditor />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {DefaultEditorSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Controlled Editor</CardTitle>
                        <CustomTabs
                           TabContent1={<ControlledEditor />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ControlledEditorSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>
                           Custom toolbar option - insert star
                        </CardTitle>
                        <CustomTabs
                           TabContent1={<CustomToolbar />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {CustomToolbarSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Image Upload & Preview</CardTitle>
                        <CustomTabs
                           TabContent1={<ImageUpload />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ImageUploadSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row>

            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Inline Editor Only When Focused</CardTitle>
                        <CustomTabs
                           TabContent1={<WhenFocused />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {WhenFocusedSource}
                              </PrismCode>
                           }
                        />
                     </CardBody>
                  </Card>
               </Col>
            </Row>
         </Fragment>
      );
   }
}

export default TextEditor;
