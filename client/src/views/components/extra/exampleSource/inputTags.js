const InputTagsSource = `import React, { Component } from "react";

import TagsInput from 'react-tagsinput'

import 'react-tagsinput/react-tagsinput.css'

class InputTags extends Component {
   state = {tags: []}
 
   handleChange = (tags) => {
     this.setState({tags})
   }

   render() {
      return (
         <TagsInput 
            value={this.state.tags}
            onChange={this.handleChange}
         />
      );
   }
 }
 export default InputTags;
 `;

 export default InputTagsSource;