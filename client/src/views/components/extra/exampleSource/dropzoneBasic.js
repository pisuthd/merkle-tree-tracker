const BasicDropzoneSource = `import React, { Component } from "react";
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
            <div className="dropzone">
               <Dropzone onDrop={this.onDrop.bind(this)}>
                  <p>
                     Try dropping some files here, or click to select files to
                     upload.
                  </p>
               </Dropzone>
            </div>
            <aside>
               <h2>Dropped files</h2>
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
`;

export default BasicDropzoneSource;
