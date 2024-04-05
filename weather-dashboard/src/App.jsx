import './App.css';
import React, { useState, useEffect } from 'react';
import Sidebar from './Components/Sidebar.jsx';
// import './App.css';
// import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import DetailView from './pages/DetailView'

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    // declare the async data fetching function
    const fetchData = async () => {

      const location = 'New York, NY';
      const API_KEY = '3C3DR7FPTDDTCSHRPTT4VBCZP';
      const options = '&include=days&elements=id,temp,feelslikemin,tempmin,datetime,moonphase,sunrise,sunset,moonrise,moonset,description,visibility,conditions'
      const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+ location + '?key='+ API_KEY + options;

      const response = await fetch(url);
      const json = await response.json();

      setData(json.days);

      return json;
    }

    fetchData()

  }, []);

  let element = useRoutes([
    {
      path: "/",
      element:<Dashboard data={data}/>
    },
    {
      path:"/:datetime",
      element: <DetailView data={data} />
    }
  ]);


  return ( 

    <div className="App">
      <div className="sidebar">
        <Sidebar />
      </div>

      {element}
      
    </div>

  );
}

export default App;
