import api from './index'

export const getAllHWs = (username) => api.get(`/allHW/${username}`) // get all homeworks 
export const getMonthHWs = (username) => api.get(`/allHWMonth/${username}`) // get all homeworks for the month
export const getWeekHWs = (username) => api.get(`/allHWWeek/${username}`) // get all homeworks for the week
export const addHW = (homeworkInfo) => api.post(`/addHW`, {homeworkInfo}) // add a homework to db 