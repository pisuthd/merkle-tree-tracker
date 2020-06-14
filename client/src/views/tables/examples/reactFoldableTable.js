import React from 'react'
import Chance from 'chance'

import ReactTable from 'react-table'
import 'react-table/react-table.css'

import selectTableHOC from 'react-table/lib/hoc/selectTable'
import treeTableHOC from 'react-table/lib/hoc/treeTable'

import testData from "../data/test-data";

const SelectTreeTable = selectTableHOC(treeTableHOC(ReactTable))
// const CheckboxTable = checkboxHOC(ReactTable);
const chance = new Chance();

function getData() {
  const data = testData.map((item) => {
    // using chancejs to generate guid
    // shortid is probably better but seems to have performance issues
    // on codesandbox.io
    const _id = chance.guid();
    return {
      _id,
      ...item,
    }
  })
  return data;
}

const ignoreColumns = ['phone1','phone2','web','email','_id'];
function getColumns(data) {
  const columns = [];
  const sample = data[0];
  for (let key in sample) {
    if (ignoreColumns.includes(key)) continue;
    columns.push({
      accessor: key,
      Header: key,
      style: { whiteSpace: 'normal' },
    })
  }
  return columns;
}

function getNodes(data, node = []) {
  data.forEach((item) => {
    if (item.hasOwnProperty('_subRows') && item._subRows) {
      node = getNodes(item._subRows, node);
    } else {
      node.push(item._original);
    }
  });
  return node;
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    const data = getData();
    const columns = getColumns(data);
    this.state = {
      data,
      columns,
      selection: [],
      selectAll: false,
      selectType: 'checkbox',
      pivotBy: ['state', 'post'],
      expanded: {},
    };
  }
  toggleSelection = (key, shift, row) => {
    /*
      Implementation of how to manage the selection state is up to the developer.
      This implementation uses an array stored in the component state.
      Other implementations could use object keys, a Javascript Set, or Redux... etc.
    */
    // start off with the existing state
    if (this.state.selectType === 'radio') {
      let selection = [];
      if (selection.indexOf(key) < 0) selection.push(key);
      this.setState({ selection });
    } else {
      let selection = [
        ...this.state.selection
      ];
      const keyIndex = selection.indexOf(key);
      // check to see if the key exists
      if (keyIndex >= 0) {
        // it does exist so we will remove it using destructing
        selection = [
          ...selection.slice(0, keyIndex),
          ...selection.slice(keyIndex + 1)
        ]
      } else {
        // it does not exist so add it
        selection.push(key);
      }
      // update the state
      this.setState({ selection });
    }
  }
  toggleAll = () => {
    /*
      'toggleAll' is a tricky concept with any filterable table
      do you just select ALL the records that are in your data?
      OR
      do you only select ALL the records that are in the current filtered data?
      
      The latter makes more sense because 'selection' is a visual thing for the user.
      This is especially true if you are going to implement a set of external functions
      that act on the selected information (you would not want to DELETE the wrong thing!).
      
      So, to that end, access to the internals of ReactTable are required to get what is
      currently visible in the table (either on the current page or any other page).
      
      The HOC provides a method call 'getWrappedInstance' to get a ref to the wrapped
      ReactTable and then get the internal state and the 'sortedData'. 
      That can then be iterrated to get all the currently visible records and set
      the selection state.
    */
    const selectAll = this.state.selectAll ? false : true;
    const selection = [];
    if (selectAll) {
      // we need to get at the internals of ReactTable
      const wrappedInstance = this.selectTable.getWrappedInstance();
      // the 'sortedData' property contains the currently accessible records based on the filter and sort
      const currentRecords = wrappedInstance.getResolvedState().sortedData;
      // we need to get all the 'real' (original) records out to get at their IDs
      const nodes = getNodes(currentRecords);
      // we just push all the IDs onto the selection array
      nodes.forEach((item) => {
        selection.push(item._id);
      })
    }
    this.setState({ selectAll, selection })
  }
  isSelected = (key) => {
    /*
      Instead of passing our external selection state we provide an 'isSelected'
      callback and detect the selection state ourselves. This allows any implementation
      for selection (either an array, object keys, or even a Javascript Set object).
    */
    return this.state.selection.includes(key);
  }
  logSelection = () => {
    console.log('selection:', this.state.selection);
  }
  toggleType = () => {
    this.setState({ selectType: this.state.selectType === 'radio' ? 'checkbox' : 'radio', selection: [], selectAll: false, });
  }
  toggleTree = () => {
    if (this.state.pivotBy.length) {
      this.setState({ pivotBy: [], expanded: {} });
    } else {
      this.setState({ pivotBy: ['state', 'post'], expanded: {} });
    }
  }
  onExpandedChange = (expanded) => {
    this.setState({ expanded });
  }
  render() {
    const { 
      toggleSelection, toggleAll, isSelected, 
      logSelection, toggleType,
      onExpandedChange, toggleTree,
    } = this;
    const { data, columns, selectAll, selectType, pivotBy, expanded } = this.state;
    const extraProps =
      {
        selectAll,
        isSelected,
        toggleAll,
        toggleSelection,
        selectType,
        pivotBy,
        expanded,
        onExpandedChange,
      }
    return (
      <div style={{ padding: '10px' }}>        
        <p>This example combines two HOCs (the TreeTable and the SelectTable) to make a composite component.</p>
        <p>We'll call it SelectTreeTable!</p>
        <p>Here is what the buttons do:</p>
        <ul>
          <li><strong>Toggle Tree:</strong> enables or disabled the pivotBy on the table.</li>
          <li><strong>Select Type:</strong> changes from 'checkbox' to 'radio' and back again.</li>
          <li><strong>Log Selection to Console:</strong> open your console to see what has been selected.</li>
        </ul>
        <p>
          <strong>NOTE:</strong> the selection is maintained when toggling the tree on and off but is cleared
          when switching between select types (radio, checkbox).
        </p>
        <button className="btn btn-primary mr-2" onClick={toggleTree}>Toggle Tree [{pivotBy && pivotBy.length ? pivotBy.join(', ') : ''}]</button>
        <button className="btn btn-primary mr-2" onClick={toggleType}>Select Type: <strong>{selectType}</strong></button>
        <button className="btn btn-primary" onClick={logSelection}>Log Selection to Console</button>
        {` (${this.state.selection.length}) selected`}
        {
          data ?
            <SelectTreeTable
              data={data}
              columns={columns}
              ref={(r) => this.selectTable = r}
              className="-striped -highlight"
              {...extraProps}
              pageSize={5}
              freezWhenExpanded={true}
            />
            : null
        }
      </div>
    );
  }
}
