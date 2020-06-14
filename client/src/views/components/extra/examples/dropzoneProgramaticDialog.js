import React, { Component } from "react";
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
         <div className="dropzone">
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
               className="mt-2 btn btn-primary"
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
