import axios from 'axios'

const api_url = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(api_url)
    return request.then(r => r.data )
}

const create = newPerson => {
  const request = axios.post(api_url, newPerson)
    return request.then(r => r.data )
}

const update = ({person, id}) => {
  const request = axios.put(`${api_url}/${id}`, person)
    return request.then(r => r.data )
}

const remove = id => {
  const request = axios.delete(`${api_url}/${id}`)
  return request.then(r => r.data)
}
export {getAll, create, update, remove}