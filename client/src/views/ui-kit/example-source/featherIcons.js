const FeatherIconExampleSource = `import React from "react";
import { Camera } from "react-feather";

export default class Example extends React.Component {
   render() {
      return (
         <div>
            <h5>Icon Size</h5>
            <Camera size={96} className="mr-4" />
            <Camera size={80} className="mr-4" />
            <Camera size={64} className="mr-4" />
            <Camera size={48} className="mr-4" />
            <Camera size={32} className="mr-4" />
            <Camera size={16} className="mr-4" />

            <h5>Icon Color</h5>
            <Camera size={96} className="danger mr-4" />
            <Camera size={80} className="primary mr-4" />
            <Camera size={64} color="#FF8D60" className="mr-4" />
            <Camera size={48} className="info mr-4" />
            <Camera size={32} className="success mr-4" />
            <Camera size={16} color="red" className=" mr-4" />
         </div>
      );
   }
}
`;

export default FeatherIconExampleSource;