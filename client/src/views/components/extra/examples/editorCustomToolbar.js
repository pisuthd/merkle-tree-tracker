import React, { Component } from "react";
import PropTypes from "prop-types";
import { EditorState, Modifier } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

class CustomOption extends Component {
   static propTypes = {
      onChange: PropTypes.func,
      editorState: PropTypes.object
   };

   addStar = () => {
      const { editorState, onChange } = this.props;
      const contentState = Modifier.replaceText(
         editorState.getCurrentContent(),
         editorState.getSelection(),
         <span role="img" aria-label="Star">⭐</span>,
         editorState.getCurrentInlineStyle()
      );
      onChange(EditorState.push(editorState, contentState, "insert-characters"));
   };

   render() {
      return <div onClick={this.addStar}><span role="img" aria-label="Star">⭐</span></div>;
   }
}

const EditorCustomToolbarOption = () => (
   <Editor wrapperClassName="demo-wrapper" editorClassName="demo-editor" toolbarCustomButtons={[<CustomOption />]} />
);

export default EditorCustomToolbarOption;
