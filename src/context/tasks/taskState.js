import React, { useReducer } from 'react'
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import {
    TASKS_PROJECT,
    ADD_TASK,
    VALIDATE_TASK
} from '../../types'

const TaskState = props => {
    const initialState = {
        tasks: [
            { name: 'Choose Product', state: true, projectId: 1 },
            { name: 'Choose Color', state: true, projectId: 2},
            { name: 'Add to cart', state: true,  projectId: 3 },
            { name: 'Pay Product', state: false, projectId: 4 },
            { name: 'Choose Product', state: true, projectId: 3 },
            { name: 'Choose Color', state: true, projectId: 2},
            { name: 'Add to cart', state: true,  projectId: 1 },
            { name: 'Pay Product', state: false, projectId: 1 }
    
        ],
        tasksProject: null,
        errorTask: false
    
    }

    // Dispatch and state
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    // Get tasks by projectId
    const getTasks = projectId => {
        dispatch({
            type: TASKS_PROJECT,
            payload: projectId
        })
    }

    // Add task to selected project
    const addTask = task => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    // Validate & show error
    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        })
    }

    return(
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                tasksProject: state.tasksProject,
                errorTask: state.errorTask,
                getTasks,
                addTask,
                validateTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;

