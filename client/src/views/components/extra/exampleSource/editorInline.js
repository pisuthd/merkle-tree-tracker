const WhenFocusedSource = `import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";


class EditorToolbarWhenFocused extends Component {
   render() {
      return (
         <Editor
            toolbarClassName="demo-toolbar-absolute"
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            toolbarOnFocus
         />
      );
   }
}
export default EditorToolbarWhenFocused;
`;

export default WhenFocusedSource;
