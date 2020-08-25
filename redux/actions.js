import { GET_ALL_HOMEWORKS, ADD_HOMEWORK, GET_HOMEWORKS_MONTH, GET_HOMEWORKS_WEEK, REMOVE_HW, GET_COURSES, GET_COURSE_HW } from './actionTypes'
import * as api from '../utils/api/index'

// * notes: there is a network error when sending a request :SOLVED: REPLACED THE BASE URL IN AXIOS WITH IPV4 ADDRESS (ipconfig)
// * progress: add hw form input already clears when submitted, no back button when in homework added screen, stack navigator pops to form screen
// todo (1): display homeworks that are in progress only (filter)
// todo (2): improve add homework input fields
// todo (3): remove a course in the course list when it does not have a homework anymore (?)
// todo (4): authentication

// * synchronous action creators

export const getAllHomeworks = (listOfHomeworks) => {
    return {
        type: GET_ALL_HOMEWORKS,
        payload: listOfHomeworks
    }
}

export const getAllHomeworksMonth = (listOfHomeworks) => {
    return {
        type: GET_HOMEWORKS_MONTH,
        payload: listOfHomeworks
    }
}

export const getAllHomeworksWeek = (listOfHomeworks) => {
    return {
        type: GET_HOMEWORKS_WEEK,
        payload: listOfHomeworks
    }
}

export const removeHW = (hwID) => {
    return {
        type: REMOVE_HW,
        payload: hwID
    }
}

// *courses
export const getCourses = (courses) => {
    return {
        type: GET_COURSES,
        payload: courses
    }
}

export const getCourseHW = (homeworks) => {
    return {
        type: GET_COURSE_HW,
        payload: homeworks
    }
}

// * asynchronous action creators

// *homeworks
export const getAllHomeworksAsync = (username) => async (dispatch) => {
    // * you can add isLoading to state to display a loading icon when fetching data
    try {
        const response = await api.getAllHWs(username);
        const homeworks = response.data
        console.log('getting all')
        dispatch(getAllHomeworks(homeworks));
    } catch (err) {
        console.log("GET ALL HWS ERR: ", err)
    }
}

export const getMonthHomeworksAsync = (username) => async (dispatch) => {
    try {
        const response = await api.getMonthHWs(username);
        const homeworks = response.data
        console.log('getting monthly')
        dispatch(getAllHomeworksMonth(homeworks));
    } catch (err) {
        console.log("GET ALL HWS MONTH ERR: ", err)
    }
}

export const getWeekHomeworksAsync = (username) => async (dispatch) => {
    try {
        const response = await api.getWeekHWs(username);
        const homeworks = response.data
        console.log('getting weekly')
        dispatch(getAllHomeworksWeek(homeworks));
    } catch (err) {
        console.log("GET ALL HWS WEEK ERR IN REDUX: ", err)
    }
}

export const addHomeworkAsync = (homeworkInfo) => async (dispatch) => {
    try {
        // * using fetch
        // const response = await fetch('http://192.168.254.129:3001/addHW', {
        //     method: 'POST',
        //     headers:{
        //         'Content-Type': 'application/json'
        //     },
        //     body : JSON.stringify(homeworkInfo)
        // })
        // // console.log(response.json())

        // * using axios
        const response = await api.addHW(homeworkInfo)
        console.log(response.data.msg)
        dispatch(getAllHomeworksAsync(homeworkInfo.username))
        dispatch(getWeekHomeworksAsync(homeworkInfo.username))
        dispatch(getMonthHomeworksAsync(homeworkInfo.username))
        dispatch(getCoursesAsync(homeworkInfo.username))
    } catch (err) {
        console.log("ADD HW ERR IN REDUX: ", err)
    }
}

export const removeHomeworkAsync = (homeworkID) => async (dispatch) => {
    try {
        const response = await api.removeHW(homeworkID)
        console.log(response.data.msg)
        dispatch(removeHW(homeworkID))
    } catch (err) {
        console.log("REMOVE HW ERR IN REDUX: ", err)
    }
}

export const markAsDone = (homeworkID, username) => async (dispatch) => {
    try {
        const response = await api.markAsDone(homeworkID)
        // console.log(response.data.msg)
        // we need to update the values in the state
        // get the course name
        const response1 = await api.getCourseFromID(homeworkID)
        const course = response1.data[0].Course
        // get the course hws
        const response2 = await api.getCourseHW(username, course)
        const courseHWs = response2.data

        // update the state
        dispatch(getCourseHW(courseHWs))
        dispatch(getAllHomeworksAsync(username))
        dispatch(getWeekHomeworksAsync(username))
        dispatch(getMonthHomeworksAsync(username))

    } catch (err) {
        console.log("MARK AS DONE HW ERR IN REDUX: ", err)
    }
}

export const markAsUndone = (homeworkID, username) => async (dispatch) => {
    try {
        const response = await api.markAsUndone(homeworkID)
        // console.log(response.data.msg)

        // we need to update the data in the state
        // get course name
        const response1 = await api.getCourseFromID(homeworkID)
        const course = response1.data[0].Course
        // get course HW
        const response2 = await api.getCourseHW(username, course)
        const courseHWs = response2.data

        // update the state
        dispatch(getCourseHW(courseHWs))
        dispatch(getAllHomeworksAsync(username))
        dispatch(getWeekHomeworksAsync(username))
        dispatch(getMonthHomeworksAsync(username))

    } catch (err) {
        console.log("MARK AS NOT DONE HW ERR IN REDUX: ", err)
    }
}

// *courses
export const getCoursesAsync = (username) => async (dispatch) => {
    try {
        const response = await api.getCourses(username)
        const listOfCourses = response.data
        // console.log("LIST OF COURSES: ", listOfCourses)
        dispatch(getCourses(listOfCourses))
    } catch (err) {
        console.log("GET COURSES ERR IN REDUX: ", err)
    }
}

export const getCourseHWAsync = (username, course) => async (dispatch) => {
    try {
        // console.log("INSIDE GET COURSE HOMEWORKS ASYNC")
        const response = await api.getCourseHW(username, course)
        // console.log("RESPONSE: ", response.data)
        const homeworks = response.data
        dispatch(getCourseHW(homeworks))
    } catch (err) {
        console.log("GET COURSE HOMEWORKS ERR IN REDUX: ", err)
    }
}

