import React, { useEffect } from 'react'
import './DetailTable.scss'
import PropTypes from 'prop-types'; 

const DetailTable = ({ data }) => {

    const getCostValue = (cost, key) => {
        return cost && cost[key] ? cost[key] : '-';
    };

  return (
    <table className='detail-table'>
        {data.length > 0 && data.map((item) => (
            <tbody key={item.id}>
                <tr>
                    <th>ID:</th>
                    <td>{item.id}</td>
                </tr>
                <tr>
                    <th>Name:</th>
                    <td>{item.name}</td>
                </tr>
                <tr>
                    <th>Description:</th>
                    <td>{item.description}</td>
                </tr>
                <tr>
                    <th>Min. Required Age:</th>
                    <td>{item.age}</td>
                </tr>
                <tr>
                    <th>Wood Cost:</th>
                    <td>{getCostValue(item.cost,'Wood')}</td>
                </tr>
                <tr>
                    <th>Food Cost:</th>
                    <td>{getCostValue(item.cost,'Food')}</td>
                </tr>
                <tr>
                    <th>Gold Cost:</th>
                    <td>{getCostValue(item.cost,'Gold')}</td>
                </tr>
                <tr>
                    <th>Build Time:</th>
                    <td>{item.build_time ? item.build_time : '-'}</td>
                </tr>
                <tr>
                    <th>Reload Time:</th>
                    <td>{item.reload_time ? item.reload_time : '-'}</td>
                </tr>
                <tr>
                    <th>Hit Points:</th>
                    <td>{item.hit_points ? item.hit_points : '-'}</td>
                </tr>
                <tr>
                    <th>Attack:</th>
                    <td>{item.attack ? item.attack : '-'}</td>
                </tr>
                <tr>
                    <th>Accuracy:</th>
                    <td>{item.accuracy ? item.accuracy : '-'}</td>
                </tr>
            </tbody>
        ))}
    </table>
  )
}

DetailTable.propTypes = {
    data: PropTypes.array.isRequired,  
};

export default DetailTable