const ProgramaticDialogDropzoneSource = `import React, { Component } from "react";
import Dropzone from "react-dropzone";

let dropzoneRef;

class ProgramaticDialogDropzone extends Component {
   state = {
      files: [],
      accepted: [],
      rejected: [],
   };

   render() {
      return (
         <div>
            <Dropzone
               ref={node => {
                  dropzoneRef = node;
               }}
               onDrop={(accepted, rejected) => {
                  alert(accepted);
               }}
            >
               <p>Drop files here.</p>
            </Dropzone>
            <button
               type="button"
               onClick={() => {
                  dropzoneRef.open();
               }}
            >
               Open File Dialog
            </button>
         </div>
      );
   }
}
export default ProgramaticDialogDropzone;
`;

export default ProgramaticDialogDropzoneSource;
