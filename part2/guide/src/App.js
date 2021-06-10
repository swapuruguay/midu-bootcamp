import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.find(p => p.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const auxName = {name: newName}
      setPersons(persons.concat(auxName))
      setNewName('')
    }
  }

  const handleChange = (e) => {
    setNewName(e.target.value)
  }

  const estilo = {textTransform: 'capitalize'}

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(p => <li style={estilo} key={p.name} >{p.name}</li>)}
      </ul>
    </div>
  )
}

export default App
