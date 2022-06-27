import React from "react";
import './Table.css'

const columnOptions = [
  {label: 'Имя', value: 'name'},
  {label: 'Количество', value: 'amount'},
  {label: 'Расстояние', value: 'distance'}
];
const operationsOptions = [
  {label: 'Равно', value: 'equal'},
  {label: 'Содержит', value: 'contains'},
  {label: 'Больше', value: 'bigger'},
  {label: 'Меньше', value: 'less'},
];

const Table = ({onFilterChange, onFilter, filteredData}) => {
  return (
    <div>
      <div className="form-group">
        <label>Сортировка:</label>
        <select className="form-control" onChange={(e) => onFilterChange('column', e.target.value)}>
        {columnOptions.map(item => (
            <option value={item.value}>{item.label}</option>
          ))}
        </select>
        <select className="form-control" onChange={(e) => onFilterChange('action', e.target.value)}>
        {operationsOptions.map(item => (
            <option value={item.value}>{item.label}</option>
          ))}
        </select>
        <input onChange={(e) => onFilterChange('value', e?.target?.value)} onBlur={onFilter} />
      </div>
      <table id='customers'>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Название</th>
            <th>Количество</th>
            <th>Расстояние</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.amount}>
              <td>{item.date}</td>
              <td>{item.name}</td>
              <td>{item.amount}</td>
              <td>{item.distance} км</td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  )

}
export default Table