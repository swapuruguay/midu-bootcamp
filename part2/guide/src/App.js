import React, { useState, useEffect } from 'react'
import PersonsForm from './components/persons-form'
import Persons from './components/persons'
import Filter from './components/filter'
import axios from 'axios'



const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [search, setSearch] = useState('')
  const [list, setList] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(({data}) => {
          setPersons(data)
          setList(data)
      })
  },[])

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.find(p => p.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const auxName = {name: newName, number: newPhone}
      setPersons(persons.concat(auxName))
      setList(list.concat(auxName))
      setNewName('')
      setNewPhone('')
    }
  }

  const handleChangeSearch = (e) => {
    
    const auxPersons = [...persons]
    const newPersons = auxPersons.filter(p => p.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
    setSearch(e.target.value)
    setList(newPersons)
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={(search) => handleChangeSearch(search)} search={search} />
      <PersonsForm 
          handleNameChange={handleNameChange}
         addPerson={addPerson} 
         handlePhoneChange={handlePhoneChange}
         newName={newName}
         newPhone={newPhone}
      />
      <h2>Numbers</h2>
      <Persons persons={list} />
    </div>
  )
}

export default App
