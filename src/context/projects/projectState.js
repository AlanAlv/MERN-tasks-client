import React, { useReducer } from 'react';
import uuid, { v4 as uuidv4 }  from 'uuid';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { 
    PROJECT_FORM, 
    GET_PROJECTS,
    ADD_PROJECT
} from '../../types'


const ProjectState = props => {
    const projects = [
        {id: 1, name: 'Virtual Store'},
        {id: 2, name: 'Web App'},
        {id: 3, name: 'Mobile App'},
        {id: 4, name: 'MERN'}
    ]
    
    const initialState = {
        projects : [],
    
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

    // Get projects
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    // Add new project
    const addProject = project => {
        project.id = uuidv4();

        // Add project to state
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }

    return(
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                showForm,
                getProjects,
                addProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;