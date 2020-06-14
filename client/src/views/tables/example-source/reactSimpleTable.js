const ReactSimpleTableSource = `import React from "react";
// To create random data
import { makeData } from "../utils";
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class Example extends React.Component {
   constructor() {
      super();
      this.state = {
         data: makeData()
      };
   }
   render() {
      const { data } = this.state;
      return (
         <div>
            <ReactTable
               data={data}
               columns={[
                  {
                     Header: "Name",
                     columns: [
                        {
                           Header: "First Name",
                           accessor: "firstName"
                        },
                        {
                           Header: "Last Name",
                           id: "lastName",
                           accessor: d => d.lastName
                        }
                     ]
                  },
                  {
                     Header: "Info",
                     columns: [
                        {
                           Header: "Age",
                           accessor: "age"
                        },
                        {
                           Header: "Status",
                           accessor: "status"
                        }
                     ]
                  },
                  {
                     Header: "Stats",
                     columns: [
                        {
                           Header: "Visits",
                           accessor: "visits"
                        }
                     ]
                  }
               ]}
               defaultPageSize={10}
               className="-striped -highlight"
            />
         </div>
      );
   }
}
`;

export default ReactSimpleTableSource;