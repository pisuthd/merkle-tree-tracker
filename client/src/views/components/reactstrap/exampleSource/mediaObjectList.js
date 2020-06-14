const MediaObjectListSource = `import React, { Component } from "react";
import { Media } from "reactstrap";

import avatarImg1 from "../../../../assets/img/portrait/small/avatar-s-18.png";
import avatarImg2 from "../../../../assets/img/portrait/small/avatar-s-7.png";
import avatarImg3 from "../../../../assets/img/portrait/small/avatar-s-13.png";

class MediaObject extends Component {
   render() {
      return (
         <div>
            <Media list>
               <Media tag="li">
                  <Media left href="#">
                     <Media
                        object
                        src={avatarImg1}
                        alt="Generic placeholder image"
                        width="60"
                     />
                  </Media>
                  <Media body>
                     <Media heading>Media heading</Media>
                     Cras sit amet nibh libero, in gravida nulla. Nulla vel
                     metus scelerisque ante sollicitudin commodo.
                     <Media className="mt-3">
                        <Media left href="#">
                           <Media
                              object
                              src={avatarImg2}
                              alt="Generic placeholder image"
                              width="60"
                           />
                        </Media>
                        <Media body>
                           <Media heading>Nested media heading</Media>
                           Cras sit amet nibh libero, in gravida nulla. Nulla
                           vel metus scelerisque ante sollicitudin commodo.
                           <Media className="mt-3">
                              <Media left href="#">
                                 <Media
                                    object
                                    src={avatarImg3}
                                    alt="Generic placeholder image"
                                    width="60"
                                 />
                              </Media>
                              <Media body>
                                 <Media heading>Nested media heading</Media>
                                 Cras sit amet nibh libero, in gravida nulla.
                                 Nulla vel metus scelerisque ante sollicitudin
                                 commodo.
                              </Media>
                           </Media>
                        </Media>
                     </Media>
                     <Media className="mt-3">
                        <Media left href="#">
                           <Media
                              object
                              src={avatarImg1}
                              alt="Generic placeholder image"
                              width="60"
                           />
                        </Media>
                        <Media body>
                           <Media heading>Nested media heading</Media>
                           Cras sit amet nibh libero, in gravida nulla. Nulla
                           vel metus scelerisque ante sollicitudin commodo.
                        </Media>
                     </Media>
                  </Media>
               </Media>
               <Media tag="li" className="mt-3">
                  <Media body>
                     <Media heading>Media heading</Media>
                     Cras sit amet nibh libero, in gravida nulla. Nulla vel
                     metus scelerisque ante sollicitudin commodo.
                  </Media>
                  <Media right href="#">
                     <Media
                        object
                        src={avatarImg2}
                        alt="Generic placeholder image"
                        width="60"
                     />
                  </Media>
               </Media>
            </Media>
         </div>
      );
   }
}

export default MediaObject;`;

export default MediaObjectListSource;