import React, { useState } from 'react'
import PersonsForm from './components/persons-form'
import Persons from './components/persons'
import Filter from './components/filter'
import './App.css'

const INITIAL_PERSONS = [
  { name: 'Arto Hellas', number: '040-123456' },
  { name: 'Ada Lovelace', number: '39-44-5323523' },
  { name: 'Dan Abramov', number: '12-43-234345' },
  { name: 'Mary Poppendieck', number: '39-23-6423122' }
]

const App = () => {
  const [persons, setPersons] = useState(INITIAL_PERSONS)
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [search, setSearch] = useState('')
  const [list, setList] = useState(INITIAL_PERSONS)

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
    <div className="App App-header">
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
