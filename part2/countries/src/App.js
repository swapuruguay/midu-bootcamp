import React, {useState, useEffect} from 'react'
import Filter from './components/filter'
import Countries from './components/countries'
import axios from 'axios'
import './App.css'

function App() {
  const [countries, setCountries] = useState([])
  const [list, setList] = useState([])
  const [search, setSearch] = useState('')
 
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(({data}) => {
        setCountries(data)
      })
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
    const auxPaises = countries.filter(c => c.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
    setList(auxPaises)
  }


  return (
    <div >
      <Filter search={search} handleSearch={handleSearch} />
      <Countries countries={list} />
    </div>
  );
}

export default App;
