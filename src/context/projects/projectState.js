import React, { useReducer } from 'react';
import { v4 as uuidv4 }  from 'uuid';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { 
    PROJECT_FORM, 
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT
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
        form : false,
        formError : false,
        project: null
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

    // ValidateForm
    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    // Select current project
    const currentProject = projectId => {
        dispatch({
            type: CURRENT_PROJECT,
            payload: projectId
        })
    }

    // Delete project
    const deleteProject = projectId => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
    }

    return(
        <projectContext.Provider
            value={{
                projects: state.projects,
                form: state.form,
                formError: state.formError,
                project: state.project,
                showForm,
                getProjects,
                addProject,
                showError,
                currentProject,
                deleteProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;