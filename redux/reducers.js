import { GET_ALL_HOMEWORKS, ADD_HOMEWORK, GET_HOMEWORKS_MONTH, GET_HOMEWORKS_WEEK} from './actionTypes'

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
        default:
            return state
    }
}

export default homeworkReducer