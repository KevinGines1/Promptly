import axios from 'axios'

//instantiate axios

const api = axios.create({
    baseURL: 'http://192.168.254.129:3001', // server port
    // baseURL: 'http://192.168.254.254:3001', // server port
    // baseURL: 'http://localhost:3001', // server port
    withCredentials:true,
    headers:{
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
    }
})

export default api
export * from './homeworks'
export * from './courses'