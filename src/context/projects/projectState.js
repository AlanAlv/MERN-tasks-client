import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { PROJECT_FORM } from '../../types'

const ProjectState = props => {
    const initialState = {
        projects : [
            {id: 1, name: 'Virtual Store'},
            {id: 2, name: 'Web App'},
            {id: 3, name: 'Mobile App'},
            {id: 4, name: 'MERN'}
        ],
    
        form : false
    }

    // Dispatch actions
    const [ state, dispatch ] = useReducer(projectReducer, initialState);

    // CRUD functions
    const showForm = () => {
        dispatch({
            type: PROJECT_FORM
        })
    }

    return(
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                showForm
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;