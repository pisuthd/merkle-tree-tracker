import React, { Component } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

class TextEditor extends Component {
   state = {
      editorState: EditorState.createEmpty()
   };

   onEditorStateChange = editorState => {
      this.setState({
         editorState
      });
   };
   render() {
      const { editorState } = this.state;
      return (
         <Editor
            editorState={editorState}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
         />
      );
   }
}

export default TextEditor;
