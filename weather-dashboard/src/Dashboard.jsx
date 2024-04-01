import React from 'react';
import Card from './Components/Card.jsx';
import List from './Components/List.jsx'


const Dashboard = ({data}) => {

    return (
        <div className="dashboard">
            <div className="dashboard-section">
                <Card number={'New York'} metric="New York, USA"/>
                <Card number={"14:25:39"} metric="Moon Rise"/> 
                <Card number={".58"} metric="Moon Phase"/>  
            </div>
            <div className="dashboard-section">
                <List data={data}/>
            </div>
        </div>  
    )
}

export default Dashboard;