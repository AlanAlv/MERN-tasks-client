import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { PROJECT_FORM } from '../../types'

const ProjectState = props => {
    const initialState = {
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
                form: state.form,
                showForm
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;