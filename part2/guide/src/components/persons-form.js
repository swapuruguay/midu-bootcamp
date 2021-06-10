import React from 'react'

const PersonsForm = ({addPerson, handleNameChange, handlePhoneChange, newPhone, newName}) => {
  return (
    <div>
      <h2>Add person</h2>
      <form onSubmit={addPerson}>
          <div>
            name: <input value={newName} onChange={handleNameChange} />
          </div>
          <div>
            phone: <input value={newPhone} onChange={handlePhoneChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
    </div>
  )
}
export default PersonsForm