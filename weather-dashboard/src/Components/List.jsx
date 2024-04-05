import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import './List.css';

const List = (props) => {

  
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const[date, setDate] = useState('');
  const[moonphase, setMoonphase] = useState('');

  useEffect(() => {
    setTableData(props.data);
    setFilteredData(props.data);
  }, [props]);


  const handleSearch = () => {
    const filterByDate = tableData.filter(item => item.datetime === (date === ''? item.datetime : date));
    const filterByPhase = filterByDate.filter(item => parseFloat(item.moonphase) <= moonphase ) 
    setFilteredData(filterByPhase);
    
  }


  


  return (
    <div className='List'>

      <div className='filters'>

        <div className='dateFilter'>
          <input type='text' placeholder="Enter Date" onChange={(e) => setDate(e.target.value)}/>
        </div>
        <div className='phaseFilter'>
          <label >Moon Phase:</label>
          <input type="range" name="moonphase" onChange={(e) => setMoonphase(e.target.value)} min="0.0" max="1.0" step="0.1"></input>
        </div>

        <button className ='btn' onClick={() => handleSearch()}>Search</button>
      </div>

      <div className='table'>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Temperature</th>
            <th>Time</th>
            <th> Phase</th>
          </tr>
        </thead>
        <tbody>
          {
            // Conditional Rendering
            filteredData && filteredData.length > 0 ?
            filteredData.map((item,index) => 

                <tr key={'item-'+index}>
                  <td>{item.datetime}</td>
                  <td>{item.feelslikemin + ' °F'}</td>
                  <td>{item.moonrise}</td>
                  <td><Link to={item.datetime}> &nbsp;&nbsp;&nbsp;&nbsp;🔗 </Link></td>
                </tr> 
              ) : <tr><td>{'No Data'}</td></tr>
          }
        </tbody>
      </table>
      </div>
    </div>


    
  );

}

export default List;