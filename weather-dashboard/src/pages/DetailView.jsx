import React from 'react';
import { useParams } from 'react-router-dom';
import Details from '../Components/Details'

const DetailView = ({data}) => {

    const {datetime} = useParams();
    const details = data.filter(item => item.datetime === datetime)[0];

    return (
        <div className="App-page">
            <div className="App-row">
                <Details data={details}/>
            </div>
        </div>  
    )
}

export default DetailView;