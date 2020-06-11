import { 
    PROJECT_FORM, 
    GET_PROJECTS,
    ADD_PROJECT
} from '../../types'


export default (state, action) => {
    switch(action.type) {
        case PROJECT_FORM:
            return {
                ...state,
                form: true
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                form: false
            }
            
            
        default:
            return state;
    }
}