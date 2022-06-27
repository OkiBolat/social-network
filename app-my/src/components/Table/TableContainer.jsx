import React from "react";
import * as operations from './utils';
import Table from "./Table";

class TableContainer extends React.Component {
  state ={
    isLoading: true,
    filterOptions: {
      column: null,
      action: null,
      value: '',
    },
    data: [
      { date: '11.12.19', name: 'Window', amount: 2301, distance: '1' },
      { date: '11.12.19', name: 'Window', amount: 2302, distance: '3' },
      { date: '11.12.19', name: 'Window', amount: 2303, distance: '235' },
      { date: '11.12.19', name: 'Window', amount: 2304, distance: '21312' },
      { date: '11.12.19', name: 'Window', amount: 2305, distance: '21' },
      { date: '11.12.19', name: 'Window', amount: 2306, distance: '345' },
      { date: '11.12.19', name: 'Window', amount: 2307, distance: '13' },
      { date: '11.12.19', name: 'Window', amount: 2308, distance: '345' },
      { date: '11.12.19', name: 'Window', amount: 2309, distance: '13' },
    ],
    filteredData: [
      { date: '11.12.19', name: 'Window', amount: 2301, distance: '1' },
      { date: '11.12.19', name: 'Window', amount: 2302, distance: '3' },
      { date: '11.12.19', name: 'Window', amount: 2303, distance: '235' },
      { date: '11.12.19', name: 'Window', amount: 2304, distance: '21312' },
      { date: '11.12.19', name: 'Window', amount: 2305, distance: '21' },
      { date: '11.12.19', name: 'Window', amount: 2306, distance: '345' },
      { date: '11.12.19', name: 'Window', amount: 2307, distance: '13' },
      { date: '11.12.19', name: 'Window', amount: 2308, distance: '345' },
      { date: '11.12.19', name: 'Window', amount: 2309, distance: '13' },
    ],
  }

  getOperation(key) {
    switch (key) {
      case 'equal':
        return operations.isEqual;
      case 'contains':
        return operations.isContains;
      case 'bigger': 
        return operations.isBigger;
      case 'less':
        return operations.isLess;
      default: return () => {};
    };
  }
  onFilterChange = (option, value) => {
    this.setState((state) => ({
      ...state,
      filterOptions: {
        ...state.filterOptions,
        [option]: value
      }
    }));
  }

  onFilter = () => {
    const { column, action, value } = this.state.filterOptions;
    if (!column || !action) return;
    if (!value) this.setState((state) => ({ ...state, filteredData: state.data }))
    const handler = this.getOperation(action);
    this.setState((state) => ({
      ...state,
      filteredData: state.filteredData.filter((row) => {
        return handler(row[column], value);
      })
    }))
  }

  render(){
    return (
      <Table {...this.state} onFilterChange={this.onFilterChange} onFilter={this.onFilter} />
    )
  }





}


export default TableContainer;

// const data =[
//   { date: '11.12.19', name: 'Window', amount: 2301, distance: '113' },
//   { date: '11.12.19', name: 'Window', amount: 2302, distance: '113' },
//   { date: '11.12.19', name: 'Window', amount: 2303, distance: '113' },
//   { date: '11.12.19', name: 'Window', amount: 2304, distance: '113' },
//   { date: '11.12.19', name: 'Window', amount: 2305, distance: '113' },
//   { date: '11.12.19', name: 'Window', amount: 2306, distance: '113' },
//   { date: '11.12.19', name: 'Window', amount: 2307, distance: '113' },
//   { date: '11.12.19', name: 'Window', amount: 2308, distance: '113' },
//   { date: '11.12.19', name: 'Window', amount: 2309, distance: '113' },
// ]
// const filterTable = (data, field, payload, inputValue) => {
//   if(field === 'amount' && payload === 'low') {
//     return data.map(item => item.name.filter(item < inputValue) )
//   }
//   return data
// }

// console.log(filterTable(data, 'name', 'low', 2305))

