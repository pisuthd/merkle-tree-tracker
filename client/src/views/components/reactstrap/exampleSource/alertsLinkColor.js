const AlertsLinkColorSource = `import React, { Component } from "react";
import { Alert } from "reactstrap";

class AlertsLinkColor extends Component {
   render() {
      return (
         <div>
            <Alert color="primary">
                This is a primary alert with{" "}
                <Link to="/components/bootstrap/alerts" className="alert-link">
                    an example link
                </Link>
                . Give it a click if you like.
            </Alert>
            <Alert color="secondary">
                This is a secondary alert with{" "}
                <Link to="/components/bootstrap/alerts" className="alert-link">
                    an example link
                </Link>
                . Give it a click if you like.
            </Alert>
            <Alert color="success">
                This is a success alert with{" "}
                <Link to="/components/bootstrap/alerts" className="alert-link">
                    an example link
                </Link>
                . Give it a click if you like.
            </Alert>
            <Alert color="danger">
                This is a danger alert with{" "}
                <Link to="/components/bootstrap/alerts" className="alert-link">
                    an example link
                </Link>
                . Give it a click if you like.
            </Alert>
            <Alert color="warning">
                This is a warning alert with{" "}
                <Link to="/components/bootstrap/alerts" className="alert-link">
                    an example link
                </Link>
                . Give it a click if you like.
            </Alert>
            <Alert color="info">
                This is a info alert with{" "}
                <Link to="/components/bootstrap/alerts" className="alert-link">
                    an example link
                </Link>
                . Give it a click if you like.
            </Alert>
            <Alert color="light">
                This is a light alert with{" "}
                <Link to="/components/bootstrap/alerts" className="alert-link">
                    an example link
                </Link>
                . Give it a click if you like.
            </Alert>
            <Alert color="dark">
                This is a dark alert with{" "}
                <Link to="/components/bootstrap/alerts" className="alert-link">
                    an example link
                </Link>
                . Give it a click if you like.
            </Alert>
         </div>
      );
   }
}

export default AlertsLinkColor;`;

export default AlertsLinkColorSource;
