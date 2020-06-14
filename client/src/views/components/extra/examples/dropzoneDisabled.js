import React, { Component } from "react";
import Dropzone from "react-dropzone";

class DisabledDropzone extends Component {
   state = {
      files: [],
      disabled: true
   };

   onDrop = files => {
      this.setState({
         files
      });
   };

   render() {
      return (
         <div>
            <aside>
               <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() =>
                     this.setState({
                        disabled: !this.state.disabled
                     })
                  }
               >
                  Toggle disabled
               </button>
            </aside>
            <div className="dropzone my-2">
               <Dropzone
                  onDrop={this.onDrop.bind(this)}
                  disabled={this.state.disabled}
               >
                  <p>
                     Try dropping some files here, or click to select files to
                     upload.
                  </p>
               </Dropzone>
            </div>
            <aside>
               <h4>Dropped files</h4>
               <ul>
                  {this.state.files.map(f => (
                     <li>
                        {f.name} - {f.size} bytes
                     </li>
                  ))}
               </ul>
            </aside>
         </div>
      );
   }
}

export default DisabledDropzone;
