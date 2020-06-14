import React, { Component } from "react";
import Dropzone from "react-dropzone";

class BasicDropzone extends Component {
   state = {
      files: []
   };

   onDrop = files => {
      this.setState({
         files
      });
   };

   render() {
      return (
         <div>
            <div className="dropzone mb-2">
               <Dropzone onDrop={this.onDrop.bind(this)}>
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
                     <li key={f.name}>
                        {f.name} - {f.size} bytes
                     </li>
                  ))}
               </ul>
            </aside>
         </div>
      );
   }
}

export default BasicDropzone;
