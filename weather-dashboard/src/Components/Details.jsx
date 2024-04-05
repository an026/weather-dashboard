// import React from 'react'
import React from 'react'
import './Details.css';

const Details = ({data}) => {

    // // filter variables
    // const[date, setDate] = useState('');
    // const[description, setDescription] = useState('');
  
    // useEffect(() => {
    //   setDate(data.datetime);
    //   setDescription(data.description);

    // }, [data]);

// const longDate = new Date(data.datetime);
// console.log(longDate)

console.log(data)
  
  // Stretch Challenge: Additional Parsing
  const phaseInfo = (moonphase) => {

    if (moonphase === 0) {
      return ['🌑', 'New Moon', 'The moon is between Earth and the sun, and the side of the moon facing toward us receives no direct sunlight; it is lit only by dim sunlight reflected from Earth.'];
    } else if (moonphase < 0.25){
      return ['🌒', 'Waxing Crescent', 'As the moon moves around Earth, the side we can see gradually becomes more illuminated by direct sunlight.'];
    } else if (moonphase === 0.25){
      return ['🌓', 'First Quarter', 'When the moon is new, it\'s most nearly between the Earth and sun for any particular month. It\'s rising and setting when the sun does and traveling across the sky with the sun during the day. Because it is near the sun its shadowed side points toward Earth, and hence it is invisible, except when it crosses the face of the sun in a solar eclipse.'];
    } else if (moonphase < 0.5){
      return ['🌔', 'Waxing Gibbous', 'The area of illumination continues to increase. More than half of the moon\'s face appears to be getting sunlight.'];
    } else if (moonphase === 0.5){
      return ['🌕', 'Full Moon', 'The moon is 180 degrees away from the sun and is as close as it can be to being fully illuminated by the sun from our perspective. The sun, Earth and the moon are aligned, but because the moon\'s orbit is not exactly in the same plane as Earth\'s orbit around the sun, they rarely form a perfect line.'];
    } else if (moonphase < 0.75){
      return ['🌖', 'Waning Gibbous', 'More than half of the moon\'s face appears to be getting sunlight, but the amount is decreasing.'];
    } else if (moonphase === 0.75){
      return ['🌗', 'Third Quarter', 'The moon has moved another quarter of the way around Earth, to the third quarter position. The sun\'s light is now shining on the other half of the visible face of the moon.'];
    } else if (moonphase < 1.0){
      return ['🌘', 'Waxing Cresent', 'Less than half of the moon\'s face appears to be getting sunlight, and the amount is decreasing.'];
    } else {
      return ['🌑', 'New Moon', 'The moon is between Earth and the sun, and the side of the moon facing toward us receives no direct sunlight; it is lit only by dim sunlight reflected from Earth.'];
    }

  }



  return (
    <div className='Details'>
          {
            // Conditional Rendering
            data ?
              <div>
                <h3>Date: {data.datetime}</h3>
                <h3>Phase: {phaseInfo(data.moonphase)[0] +'   ' +phaseInfo(data.moonphase)[1]}</h3> 
                <h3>Visibility: {data.visibility + '%'}</h3> 
                <h3>Moonrise: {data.moonrise + ' PM'}</h3> 
                <h3>Moonset: {data.moonset + ' PM'}</h3> 
                <h3>Description: {phaseInfo(data.moonphase)[2]}</h3>



              </div>

               : <h1>{'No Data'}</h1>
          }
    </div>

    
  );

}

export default Details;