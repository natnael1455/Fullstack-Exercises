import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }

 const create = newObject => {
  const request = axios.post(baseUrl, newObject)
 return request
 .then(response => response.data)
 
}

const update = (id, newPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, newPerson)
    return request
    .then(response => response.data)
    
  }
const delet = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request
  .then(response => response.data)
  .catch(error => {
    alert("not deleted");
  })
}

export default { getAll,create,delet,update}