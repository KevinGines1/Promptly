import api from './index'

export const getAllHWs = (username) => api.get(`/allHW/${username}`) // get all homeworks 
export const getMonthHWs = (username) => api.get(`/allHWMonth/${username}`) // get all homeworks for the month
export const getWeekHWs = (username) => api.get(`/allHWWeek/${username}`) // get all homeworks for the week
export const addHW = (homeworkInfo) => api.post(`/addHW`, {homeworkInfo}) // add a homework to db 
export const removeHW = (assignmentID) => api.delete(`/removeHW/${assignmentID}`) // remove a homework from db
export const markAsDone = (assignmentID) => api.patch(`/done/${assignmentID}`) // mark a homework as done
export const markAsUndone = (assignmentID) => api.patch(`/undone/${assignmentID}`) // mark a homework as done