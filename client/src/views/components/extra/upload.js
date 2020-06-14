import React, { Component, Fragment } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

//Prism
// eslint-disable-next-line
import Prism from "prismjs";  //Include JS
import "prismjs/themes/prism-okaidia.css"; //Include CSS
import { PrismCode } from "react-prism"; //Prism Component

import "../../../assets/scss/views/components/extra/upload.scss";

import CustomTabs from "../../../components/tabs/customTabs";
import ContentHeader from "../../../components/contentHead/contentHeader";
import ContentSubHeader from "../../../components/contentHead/contentSubHeader";

// Import examples
import BasicDropzone from "./examples/dropzoneBasic";
import FileTypeDropzone from "./examples/dropzoneFileType";
import ProgramaticDialogDropzone from "./examples/dropzoneProgramaticDialog";
import DisabledDropzone from "./examples/dropzoneDisabled";

// Import Example Source Code
import BasicDropzoneSource from "./exampleSource/dropzoneBasic";
import FileTypeDropzoneSource from "./exampleSource/dropzoneFileType";
import ProgramaticDialogDropzoneSource from "./exampleSource/dropzoneProgramaticDialog";
import DisabledDropzoneSource from "./exampleSource/dropzoneDisabled";


class Upload extends Component {

   render() {
      return (
         <Fragment>
            <ContentHeader>Dropzone</ContentHeader>
            <ContentSubHeader>
               <p>Simple HTML5 drag-drop zone with React.js.</p>
               <a href="https://github.com/react-dropzone/react-dropzone" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.shields.io/github/stars/react-dropzone/react-dropzone.svg?style=social" alt="Stars" />
                  <img src="https://img.shields.io/npm/dm/react-dropzone.svg" alt="Downloads"/>
               </a>
            </ContentSubHeader>
            <Row>
               <Col sm="12">
                  <Card>
                     <CardBody>
                        <CardTitle>Basic Dropzone</CardTitle>
                        <p>
                           Dropzone with default properties and displays list of
                           the dropped files.
                        </p>
                        <CustomTabs
                           TabContent1={<BasicDropzone />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {BasicDropzoneSource}
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
                        <CardTitle>Specific file types</CardTitle>
                        <p>
                           By providing accept prop you can make Dropzone to
                           accept specific file types and reject the others. The
                           value must be a comma-separated list of unique
                           content type specifiers.
                        </p>
                        <CustomTabs
                           TabContent1={<FileTypeDropzone />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {FileTypeDropzoneSource}
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
                           Opening File Dialog Programmatically
                        </CardTitle>
                        <p>
                           You can programmatically invoke default OS file
                           prompt. In order to do that you'll have to set the
                           ref on your Dropzone instance and call the instance
                           open method.
                        </p>
                        <CustomTabs
                           TabContent1={<ProgramaticDialogDropzone />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {ProgramaticDialogDropzoneSource}
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
                        <CardTitle>Dropzone with disabled property</CardTitle>
                        <p>
                           You can programmatically invoke default OS file
                           prompt. In order to do that you'll have to set the
                           ref on your Dropzone instance and call the instance
                           open method.
                        </p>
                        <CustomTabs
                           TabContent1={<DisabledDropzone />}
                           TabContent2={
                              <PrismCode
                                 component="pre"
                                 className="language-javascript"
                              >
                                 {DisabledDropzoneSource}
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

export default Upload;
