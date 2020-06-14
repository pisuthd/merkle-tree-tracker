import React, { Component } from "react";
import { Media } from "reactstrap";

import avatarImg1 from "../../../../assets/img/portrait/small/avatar-s-18.png";
import avatarImg2 from "../../../../assets/img/portrait/small/avatar-s-7.png";
import avatarImg3 from "../../../../assets/img/portrait/small/avatar-s-13.png";

class MediaObject extends Component {
   render() {
      return (
         <div>
            <Media>
               <Media left className="d-none d-sm-block" href="#">
                  <Media
                     object
                     src={avatarImg1}
                     alt="Generic placeholder image"
                     width="60"
                  />
               </Media>
               <Media body>
                  <Media heading>Media heading</Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis. Fusce
                  condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                  congue felis in faucibus.
                  <Media className="mt-3">
                     <Media left className="d-none d-sm-block" href="#">
                        <Media
                           object
                           src={avatarImg2}
                           alt="Generic placeholder image"
                           width="60"
                        />
                     </Media>
                     <Media body>
                        <Media heading>Nested media heading</Media>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin commodo. Cras purus
                        odio, vestibulum in vulputate at, tempus viverra turpis.
                        Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
                        <Media className="mt-3">
                           <Media left className="d-none d-sm-block" href="#">
                              <Media
                                 object
                                 src={avatarImg3}
                                 alt="Generic placeholder image"
                                 width="60"
                              />
                           </Media>
                           <Media body>
                              <Media heading>Nested media heading</Media>
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque ante sollicitudin commodo.
                              Cras purus odio, vestibulum in vulputate at,
                              tempus viverra turpis. Fusce condimentum nunc ac
                              nisi vulputate fringilla. Donec lacinia congue
                              felis in faucibus.
                           </Media>
                        </Media>
                     </Media>
                  </Media>
               </Media>
            </Media>
         </div>
      );
   }
}

export default MediaObject;
