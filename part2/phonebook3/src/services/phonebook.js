import axios from 'axios'

const url = 'http://localhost:3001/persons'

const getData = () => {
    const makeReq = axios.get(url)
    return makeReq.then(resp => resp.data)
}

const deleteData = (id) => {
    const makeReq = axios.delete(`${url}/${id}`)
    return makeReq.then(resp => resp.data)
}

const addData = (newData) => {
    const makeReq = axios.post(url, newData)
    return makeReq.then(resp => resp.data)
}

export default { getData, deleteData, addData }