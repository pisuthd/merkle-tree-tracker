import React, { Component, Fragment } from "react";
import ShowEmials from "../../containers/email/showEmails";
import EmailSidebar from "../../components/email/emailSidebar";
import EmailActions from "../../containers/email/emailActions";
import EmailSearch from "../../containers/email/emailSearch";
import EmailContent from "../../containers/email/emailContent";

class Email extends Component {
   render() {
      return (
         <Fragment>
            <div className="email-application">
               <div className="content-overlay" />
               <EmailSidebar />
               <div className="email-app-content row">
                  <div className="email-app-content-area w-100">
                     <div className="email-app-list-mails p-0">
                        <EmailSearch />
                        <div className="email-actions px-2 bg-white">
                           <EmailActions />
                        </div>
                        <ShowEmials />
                     </div>
                     <EmailContent />
                  </div>
               </div>
            </div>
         </Fragment>
      );
   }
}

export default Email;
