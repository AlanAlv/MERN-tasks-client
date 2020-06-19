import React, { useReducer } from 'react';

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

import clientAxios from '../../config/axios';

const ProjectState = props => {

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
    const getProjects = async () => {
        try {
            const result = await clientAxios.get('/api/projects');

            dispatch({
                type: GET_PROJECTS,
                payload: result.data.projects
            });
        } catch (error) {
            console.log(error);
        }
    }

    // Add new project
    const addProject = async project => {

        try {
            const result = await clientAxios.post('/api/projects', project);
            console.log(result);

            // Add project to state
            dispatch({
                type: ADD_PROJECT,
                payload: result.data
            })
        } catch (error) {
            console.log(error);
        }
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