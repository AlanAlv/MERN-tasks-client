import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

const ProjectState = props => {
    const initialState = {
        form : true
    }

    // Dispatch actions
    const [ state, dispatch ] = useReducer(projectReducer, initialState);

    // CRUD functions

    return(
        <projectContext.Provider
            value={{
                form: state.form
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;