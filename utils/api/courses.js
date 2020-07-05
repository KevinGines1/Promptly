import api from './index'

export const getCourses = (username) => api.get(`/courses/${username}`) // get all courses 
export const getCourseHW = (username, course) => api.get(`/homeworks/${username}&${course}`) // get all homeworks for course
export const getCourseFromID = (hwID) => api.get(`/course/${hwID}`) // get all homeworks for course
