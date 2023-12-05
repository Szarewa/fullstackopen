import axios from 'axios'

const url = 'http://localhost:3001/persons'

const getData = () => {
    const makeReq = axios.get(url)
    return makeReq.then(resp => resp.data)
}

export default { getData }