import React, { useState , useEffect}from 'react'
import CountryHeader from './country-header'
import axios from 'axios'
import Weather  from './weather'
const api_key = process.env.REACT_APP_API_KEY
console.log(api_key)
const api_url = `http://api.worldweatheronline.com/premium/v1/weather.ashx?format=json&key=${api_key}&q=`


const CountryDetail = ({country}) => {
  const [clima, setClima] = useState({})
  useEffect(() => {
    axios
      .get(`${api_url}${country.capital}`)
      .then(({data: {data}}) => {
        setClima(data.current_condition[0]) 
      })
  },[country.capital])
  return (
    <div>
      <CountryHeader country={country} />
      <ul>
        {country.languages.map(l => <li key={l.name}>{l.name}</li>)}
      </ul>
      <div>
        <img className="App-img" src={country.flag} alt={`${country.name}'s flag`} />
      </div>
      <Weather city={country.capital} clima={clima} />
    </div>
  )
}

export default CountryDetail