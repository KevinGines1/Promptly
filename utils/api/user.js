import api from './index'


export const getUserInfo = username => api.get(`/student/${username}`) // get the info of the user from db