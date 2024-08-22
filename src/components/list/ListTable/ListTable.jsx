import React, { useEffect } from 'react'
import './ListTable.scss';
import PropTypes from 'prop-types'; 
import useFormatCost from '../../../hooks/useFormatCost';
import { Link } from 'react-router-dom';

const ListTable = ({data}) => {
  const formatCost = useFormatCost();

  return (
    <table className='list-table'>
        <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Costs</th>
            </tr>
        </thead>
        <tbody>
        {data.length > 0 && data.map((item) => (
          <tr key={item.id}>
            <td> <Link to={`/detail/${item.id}`}>{item.id}</Link> </td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{formatCost(item.cost)}</td>
          </tr>
        ))}

        </tbody>
    </table>
  )
}

ListTable.propTypes = {
  data: PropTypes.array.isRequired,  
};

export default ListTable