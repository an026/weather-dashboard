
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  } from 'recharts';
import React, { useState, useEffect } from 'react'
import './Chart.css';

const ChartA = (props) => {

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(props.data);
  }, [props]);


  return (
    <div className="Chart">
    <LineChart
    width={380}
    height={300}
    data={chartData}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="datetime" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line
      type="bump"
      dataKey="temp"
      stroke="#FFFFFF"
      activeDot={{ r: 6 }}
    />
  </LineChart>
  </div>   
  );
}

export default ChartA;