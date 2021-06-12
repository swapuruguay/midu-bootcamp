import React, { useState, useEffect } from 'react'
import PersonsForm from './components/persons-form'
import Persons from './components/persons'
import Filter from './components/filter'
import Notification from './components/notification'
import {create, getAll, remove, update} from './services/persons'




const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [search, setSearch] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    getAll()
      .then((data) => {
          setPersons(data)
      })
  },[])

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.find(p => p.name.toLowerCase() === newName.toLowerCase())) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new once`)) {
        const auxName = persons.find(p => p.name === newName)
        const updatedPerson = {...auxName, number: newPhone}
        update({id: auxName.id, person:updatedPerson})
          .then(data => {
            setPersons(persons.map(p => p.id !== auxName.id ? p : data))
            setNewName('')
            setNewPhone('')
            const noty = {message: `Updated ${data.name}`, type: 'info'}
            setNotification(noty)
            setTimeout(() => {
              setNotification(null)        
            }, 5000)
          })
          .catch(() => {
            const noty = {message: `Information of ${auxName.name} has already been removed from server`, type: 'error'}
            setNotification(noty)
            setTimeout(() => {
              setNotification(null)
            }, 5000)
          })  
      }
    } else {
      const auxName = {name: newName, number: newPhone}
      create(auxName)
        .then(data => {
          setPersons(persons.concat(data))
          setNewName('')
          setNewPhone('')
          const noty = {message: `Added ${data.name}`, type: 'success'}
          setNotification(noty)
          setTimeout(() => {
            setNotification(null)        
          }, 5000)
        })   
    }
  }


  const removePerson = (id, name) => {
    if(window.confirm(`Delete ${name} ?`)) {
      remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
          const noty = {message: `Removed ${name}`, type: 'success'}
          setNotification(noty)
          setTimeout(() => {
            setNotification(null)        
          }, 5000)
        })
    }
  }

  const handleChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value)
  }

  const personsToShow = search.length === 0 ?
    persons : 
    persons.filter(p => p.name.toLowerCase().indexOf(search.toLowerCase()) > 0 )

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Filter handleSearch={handleChangeSearch} search={search} />
      <PersonsForm 
          handleNameChange={handleNameChange}
         addPerson={addPerson} 
         handlePhoneChange={handlePhoneChange}
         newName={newName}
         newPhone={newPhone}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} remove={removePerson} />
    </div>
  )
}

export default App
