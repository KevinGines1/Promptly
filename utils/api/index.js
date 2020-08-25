import axios from 'axios'

//instantiate axios

const api = axios.create({
    baseURL: 'http://192.168.254.108:3001', // server port; retrieved thru ipconfig, the IP of LAN
    // baseURL: 'http://192.168.254.254:3001', // server port
    // baseURL: 'http://localhost:3001', // server port
    withCredentials: true,
    headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
    }
})

export default api
export * from './homeworks'
export * from './courses'