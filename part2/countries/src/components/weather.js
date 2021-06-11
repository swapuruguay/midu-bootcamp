import React from 'react'

const Weather = ({city, clima}) => {
  if(Object.keys(clima).length === 0) {
    return <p></p>
  }
  return <div>
    <h2>{city}</h2>
    <p><strong>temperature:</strong> {clima.temp_C} Celsius</p>
    <img src={clima.weatherIconUrl[0].value} alt="" />
    <p><strong>wind:</strong> {clima.windspeedMiles} mph direction {clima.winddir16Point}</p>
  </div>
}

export default Weather