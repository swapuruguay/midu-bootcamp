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
  const [list, setList] = useState([])
  const [message, setMessage] = useState(null)
  const [estilo, setEstilo] = useState('')

  useEffect(() => {
    getAll()
      .then((data) => {
          setPersons(data)
          setList(data)
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
            setList(persons.map(p => p.id !== auxName.id ? p : data))
            setNewName('')
            setNewPhone('')
            setEstilo('info')
            setMessage(`Updated ${data.name}`)
            setTimeout(() => {
              setMessage(null)        
            }, 5000)
          })
          .catch(() => {
            setEstilo('error')      
            setMessage(`Information of ${auxName.name} has already been removed from server`)
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })  
      }
    } else {
      const auxName = {name: newName, number: newPhone}
      create(auxName)
        .then(data => {
          setPersons(persons.concat(data))
          setList(list.concat(data))
          setNewName('')
          setNewPhone('')
          setEstilo('info')
          setMessage(`Added ${data.name}`)
          setTimeout(() => {
            setMessage(null)        
          }, 5000)
        })   
    }
  }


  const removePerson = (id, name) => {
    if(window.confirm(`Delete ${name} ?`)) {
      remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
          setList(list.filter(p => p.id !== id))
          setEstilo('info')
          setMessage(`Removed ${name}`)
          setTimeout(() => {
            setMessage(null)        
          }, 5000)
        })
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
      <Notification message={message} estilo={estilo} />
      <Filter handleSearch={(search) => handleChangeSearch(search)} search={search} />
      <PersonsForm 
          handleNameChange={handleNameChange}
         addPerson={addPerson} 
         handlePhoneChange={handlePhoneChange}
         newName={newName}
         newPhone={newPhone}
      />
      <h2>Numbers</h2>
      <Persons persons={list} remove={removePerson} />
    </div>
  )
}

export default App
