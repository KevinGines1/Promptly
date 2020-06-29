import { GET_ALL_HOMEWORKS, ADD_HOMEWORK, GET_HOMEWORKS_MONTH, GET_HOMEWORKS_WEEK, REMOVE_HW} from './actionTypes'
import * as api from '../utils/api/index'

// * notes: there is a network error when sending a request :SOLVED: REPLACED THE BASE URL IN AXIOS WITH IPV4 ADDRESS (ipconfig)
// * progress: checkbox has functionality
// todo (1): some more filters for display (course, progress), authentication
// todo (2): improve add homework feature
// * synchronous action creators
export const getAllHomeworks = (listOfHomeworks) =>{
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

// * asynchronous action creators

export const getAllHomeworksAsync = (username) => async(dispatch) => {
    // * you can add isLoading to state to display a loading icon when fetching data
    try{
        const response = await api.getAllHWs(username);
        const homeworks = response.data
        console.log('getting all')
        dispatch(getAllHomeworks(homeworks));
    }catch(err){
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
        console.log("GET ALL HWS WEEK ERR: ", err)
    }
}

export const addHomeworkAsync = (homeworkInfo) => async(dispatch) => {
    try{
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
    }catch(err){
        console.log("ADD HW ERR: ", err)
    }
}

export const removeHomeworkAsync = (homeworkID) => async(dispatch) => {
    try{
        const response = await api.removeHW(homeworkID)
        console.log(response.data.msg)
        dispatch(removeHW(homeworkID))
    }catch(err){
        console.log("REMOVE HW ERR: ", err)
    }
}

export const markAsDone = (homeworkID, username) => async(dispatch) => {
    try{
        const response = await api.markAsDone(homeworkID)
        console.log(response.data.msg)
        dispatch(getAllHomeworksAsync(username))
        dispatch(getWeekHomeworksAsync(username))
        dispatch(getMonthHomeworksAsync(username))
    }catch(err){
        console.log("MARK AS DONE HW ERR: ", err)
    }
}

export const markAsUndone = (homeworkID, username) => async(dispatch) => {
    try{
        const response = await api.markAsUndone(homeworkID)
        console.log(response.data.msg)
        dispatch(getAllHomeworksAsync(username))
        dispatch(getWeekHomeworksAsync(username))
        dispatch(getMonthHomeworksAsync(username))
    }catch(err){
        console.log("MARK AS NOT DONE HW ERR: ", err)
    }
}