import { GET_ALL_HOMEWORKS, ADD_HOMEWORK, GET_HOMEWORKS_MONTH, GET_HOMEWORKS_WEEK, REMOVE_HW} from './actionTypes'

const homeworksInitialState = {
    username: 'KevinG',
    email: 'kagines1@up.edu.ph',
    homeworks: [],
    homeworksThisMonth:[],
    homeworksThisWk:[],
    listFilter:'' // * try to turn the values into a variable para iwas typos
}
export const homeworkReducer = (state = homeworksInitialState, action) => {
    switch(action.type){
        case GET_ALL_HOMEWORKS:
            return {
                // homeworks:[...state, action.payload]
                ...state,
                homeworks: action.payload
            }
        case GET_HOMEWORKS_MONTH:
            return{
                ...state, 
                homeworksThisMonth:action.payload
            }
        case GET_HOMEWORKS_WEEK:
            return{
                ...state, 
                homeworksThisWk:action.payload
            }
        case REMOVE_HW:
            return{
                ...state,
                homeworks: state.homeworks.filter((hw)=>hw.assignment_id !== action.payload),
                homeworksThisMonth: state.homeworksThisMonth.filter((hw)=>hw.assignment_id !== action.payload),
                homeworksThisWk: state.homeworksThisWk.filter((hw)=>hw.assignment_id !== action.payload),
            }
        default:
            return state
    }
}

export default homeworkReducer