import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from "react-router-dom";

class Breadcrumbs extends Component {
   render() {
      return (
         <div>
            <Breadcrumb>
               <BreadcrumbItem active>Home</BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
               <BreadcrumbItem>
                <Link to="/components/bootstrap/breadcrumbs">
                    Home
                </Link>
               </BreadcrumbItem>
               <BreadcrumbItem active>Library</BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
               <BreadcrumbItem>
                <Link to="/components/bootstrap/breadcrumbs">
                    Home
                </Link>
               </BreadcrumbItem>
               <BreadcrumbItem>
                <Link to="/components/bootstrap/breadcrumbs">
                    Library
                </Link>
               </BreadcrumbItem>
               <BreadcrumbItem active>Data</BreadcrumbItem>
            </Breadcrumb>
         </div>
      );
   }
}

export default Breadcrumbs;
