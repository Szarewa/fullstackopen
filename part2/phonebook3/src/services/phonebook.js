import axios from 'axios'

let url = 'http://localhost:3001/persons'

const createData = (newData) => {
    const makeReq = axios.post(url, newData)
    return makeReq.then(resp => resp.data)
}

const getData = () => {
    const makeReq = axios.get(url)
    return makeReq.then(resp => resp.data)
}

const updateData = (id, newData) => {
    const makeReq = axios.put(`${url}/${id}`, newData)
    return makeReq.then(resp => resp.data)
}

const deleteData = (id) => {
    const makeReq = axios.delete(`${url}/${id}`)
    return makeReq.then(resp => resp.data)
}

export default { createData, getData, updateData, deleteData }