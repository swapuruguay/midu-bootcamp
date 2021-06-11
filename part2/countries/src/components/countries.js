import React, {useState} from 'react'
import CountryDetail from './country-detail'
import Country from './country'

const Countries = ({countries}) => {
  const [showCountry, setShowCountry] = useState()
  const show = evt => {
    const aux = countries.filter(c => c.name.includes(evt.target.value))
    setShowCountry(aux[0])
  }

  if(countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
   
  } 

  if (showCountry !== undefined) {
    return (
      <CountryDetail country={showCountry}/>
    )
   
  }

  if(countries.length > 1) {
    return (
      countries.map(c => {
        return <Country show={show} key={c.name} country={c} />
      })
    )
  } 

  if(countries.length === 0) {
    return <p>No data</p>
  }

  return (
      <CountryDetail country={countries[0]} />
    )
 
}

export default Countries